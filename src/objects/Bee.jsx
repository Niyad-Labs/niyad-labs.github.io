import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BEE_MODEL = "/model/bee/Bee-meshopt.glb";
useGLTF.preload(BEE_MODEL);

export default function Bee() {
  const groupRef = useRef();
  const mixerRef = useRef();
  const actionsRef = useRef({});
  const activeActionRef = useRef(null);
  const scrollTimeout = useRef(null);

  const { scene, animations } = useGLTF(BEE_MODEL);

  // Target values to smoothly interpolate in useFrame
  const targets = useRef({
    posX: 2,
    posY: -3,
    posZ: -1,
    rotY: THREE.MathUtils.degToRad(-57), // ~ -1 rad
    scale: 0.2,
    floating: false,
  });

  // Enable shadows once on load
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Setup Animation Mixer & Actions
  useEffect(() => {
    if (!scene || !animations.length) return;

    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    animations.forEach((clip) => {
      actionsRef.current[clip.name] = mixer.clipAction(clip);
    });

    const idleAction = actionsRef.current["_bee_idle"];
    if (idleAction) {
      idleAction.play();
      activeActionRef.current = idleAction;
    }

    return () => mixer.stopAllAction();
  }, [scene, animations]);

  // Helper for crossfading animation clips efficiently
  const switchAction = (name) => {
    const newAction = actionsRef.current[name];
    const currentAction = activeActionRef.current;

    if (!newAction || currentAction === newAction) return;

    newAction.reset().fadeIn(0.3).play();
    if (currentAction) currentAction.fadeOut(0.3);

    activeActionRef.current = newAction;
  };

  // Scroll logic configuration
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,

      onUpdate: (self) => {
        const { progress, direction } = self;
        const target = targets.current;

        // Ground / Start state
        if (progress === 0) {
          target.posX = 2;
          target.posY = -3;
          target.posZ = -1;
          target.rotY = THREE.MathUtils.degToRad(-57);
          target.scale = 0.2;
          target.floating = false;
          switchAction("_bee_idle");
          return;
        }

        // Flying / Scrolling state
        target.floating = true;
        switchAction("_bee_hover");

        // Compute Z position depth
        target.posZ = Math.max(-progress * 100, -100);

        if (direction === 1 && -progress * 100 - 8 > -100) {
          // Scrolling Down: Fly to top-right, facing backward
          target.posX = 3;
          target.posY = 2.3;
          target.rotY = THREE.MathUtils.degToRad(-170);
          target.scale = 0.1;

          // Timeout to reset orientation when scrolling stops mid-page
          clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            if (targets.current.floating) {
              targets.current.rotY = THREE.MathUtils.degToRad(-40);
            }
          }, 400);
        } else {
          // Scrolling Up or Near End: Face front
          target.posX = 3;
          target.posY = 2.3;
          target.rotY = 0;
          target.scale = 0.1;
        }
      },

      onLeaveBack: () => {
        const target = targets.current;
        target.posX = 2;
        target.posY = -3;
        target.posZ = -1;
        target.scale = 0.2;
        target.floating = false;
        switchAction("_bee_idle");
      },
    });

    return () => {
      trigger.kill();
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Frame Loop: Smooth dampening for transforms & mixer updates
  useFrame((state, delta) => {
    mixerRef.current?.update(delta);

    if (!groupRef.current) return;

    const group = groupRef.current;
    const target = targets.current;
    const lerpFactor = THREE.MathUtils.clamp(delta * 8, 0, 1);

    // Smooth position interpolation
    let targetY = target.posY;
    if (target.floating) {
      targetY += Math.sin(state.clock.elapsedTime * 3) * 0.15;
    }

    group.position.x = THREE.MathUtils.lerp(
      group.position.x,
      target.posX,
      lerpFactor,
    );
    group.position.y = THREE.MathUtils.lerp(
      group.position.y,
      targetY,
      lerpFactor,
    );
    group.position.z = THREE.MathUtils.lerp(
      group.position.z,
      target.posZ,
      lerpFactor,
    );

    // Smooth rotation interpolation
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      target.rotY,
      lerpFactor,
    );

    // Smooth scale interpolation
    const currentScale = group.scale.x;
    const nextScale = THREE.MathUtils.lerp(
      currentScale,
      target.scale,
      lerpFactor,
    );
    group.scale.setScalar(nextScale);
  });

  return (
    <primitive
      ref={groupRef}
      object={scene}
      scale={0.2}
      position={[2, -3, -1]}
      rotation={[0, -1, 0]}
    />
  );
}
