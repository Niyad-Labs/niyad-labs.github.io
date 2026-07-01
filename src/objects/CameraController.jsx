import { useThree, useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    // Starting position
    camera.position.set(20, 20, 0);

    // Intro animation (like racing track fly-through)
    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 10,
      duration: 3,
      ease: "power3.inOut",
    });

    // Scroll animation
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,

      onUpdate: (self) => {
        camera.position.z = 0 - self.progress * 100 + 10;
      },
    });

    return () => trigger.kill();
  }, [camera]);

  useFrame(() => {
    camera.lookAt(0, 0, -130);
  });

  return null;
}
