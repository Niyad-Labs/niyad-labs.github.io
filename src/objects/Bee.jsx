import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// animation names 1 _bee_idle, 2 _bee_hover, 3 _bee_take_off_and_land

gsap.registerPlugin(ScrollTrigger);
// { onLoaded }
export default function Bee() {
  const groupRef = useRef();
  const mixerRef = useRef();
  let scrollTimeout = useRef(null);
  const { scene, animations } = useGLTF("/model/bee/Bee.gltf");
  const isHovering = useRef(false);
  const actionsRef = useRef({});
  const activeActionRef = useRef();

  // useEffect(() => {
  //   if (scene && onLoaded) {
  //     onLoaded();
  //   }
  // }, [scene, onLoaded]);
  useEffect(() => {
    if (!scene || animations.length === 0) return;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;

    animations.forEach((clip) => {
      actionsRef.current[clip.name] = mixer.clipAction(clip);
    });

    activeActionRef.current = actionsRef.current["_bee_idle"];

    activeActionRef.current?.play();

    const switchAction = (newAction) => {
      const active = activeActionRef.current;

      if (!newAction || active === newAction) return;

      newAction.reset();
      newAction.fadeIn(0.5).play();

      active?.fadeOut(0.5);

      activeActionRef.current = newAction;
    };

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,

      onUpdate: (self) => {
        if (!groupRef.current) return;
        groupRef.current.position.z = Math.max(-self.progress * 100, -100);
        gsap.to(groupRef.current.position, {
          y: 1,
          x: 3,
          duration: 0.3,
          ease: "power2.out",
        });

        if (self.direction == 1 && 0 - self.progress * 100 - 8 > -100) {
          gsap.to(groupRef.current.rotation, {
            y: THREE.MathUtils.degToRad(-170),
            duration: 0.5,
          });

          gsap.to(groupRef.current.scale, {
            z: 0.1,
            y: 0.1,
            x: 0.1,
            duration: 0.5,
          });

          switchAction(actionsRef.current["_bee_hover"]);
          isHovering.current = true;

          clearTimeout(scrollTimeout.current);

          scrollTimeout.current = setTimeout(() => {
            gsap.to(groupRef.current.rotation, {
              y: THREE.MathUtils.degToRad(-40),
              duration: 0.8,
            });
          }, 500);
        } else {
          switchAction(actionsRef.current["_bee_hover"]);
          isHovering.current = true;
          gsap.to(groupRef.current.rotation, {
            y: 0,
            duration: 0.5,
          });
        }
      },

      onLeaveBack: () => {
        if (!groupRef.current) return;

        isHovering.current = false;
        gsap.to(groupRef.current.position, {
          x: 2,
          y: -3,
          z: -1,
          duration: 1,
        });
        gsap.to(groupRef.current.scale, {
          z: 0.2,
          y: 0.2,
          x: 0.2,
          duration: 0.5,
          ease: "power2.out",
        });
        switchAction(actionsRef.current["_bee_idle"]);
      },
    });

    return () => trigger.kill();
  }, [scene, animations]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);

    if (groupRef.current && isHovering.current) {
      groupRef.current.position.y =
        1 + Math.sin(state.clock.elapsedTime * 3) * 0.15;
    }
  });

  return (
    <primitive
      ref={groupRef}
      object={scene}
      scale={0.2}
      position={[2, -3, -1]}
      rotation={[0, -1, 0]}
      castShadow
    />
  );
}
