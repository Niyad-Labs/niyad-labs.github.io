import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PointLights() {
  const lightRef = useRef();

  useEffect(() => {
    if (!lightRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        lightRef.current.position.z = -self.progress * 100;
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <pointLight ref={lightRef} position={[0, 5, 0]} intensity={70} castShadow />
  );
}
