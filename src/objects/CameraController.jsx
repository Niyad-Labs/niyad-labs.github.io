import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CameraController({ start }) {
  const { camera } = useThree();
  camera.position.set(15, 15, -110);
  useEffect(() => {
    if (!start) return;

    // starting cinematic position
    camera.position.set(15, 15, -110);

    // intro fly-through
    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 10,
      duration: 3,
      ease: "power3.inOut",
    });

    // enable scroll only after intro
    const trigger = ScrollTrigger.create({
      trigger: document.body,

      start: "top top",

      end: "bottom bottom",

      scrub: true,

      onUpdate: (self) => {
        camera.position.z = 10 - self.progress * 100;
      },
    });

    return () => trigger.kill();
  }, [start, camera]);

  useFrame(() => {
    camera.lookAt(0, 1, -130);
  });

  return null;
}
