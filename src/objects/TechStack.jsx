import { Text, Text3D, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const techs = [
  "React",
  "Node.js",
  "FastAPI",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "JavaScript",
  "Express.js",
  "Three js",
  "MUI",
  "SEO",
  "GitHub",
];

export default function TechStack() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    groupRef.current.rotation.z += delta * 0.3; // Rotate like a fan
  });

  return (
    <group position={[0, 2, -56]}>
      {/* Center */}
      <Text3D
        font="fonts/Bodoni Moda SC_Regular.json"
        size={0.6}
        castShadow
        position={[-2, -0.3, 0]}
      >
        Tech Stack
        <meshStandardMaterial color="#c5c5c5" />
      </Text3D>

      {/* Surrounding names */}
      <group ref={groupRef}>
        {techs.map((tech, index) => {
          const angle = (index / techs.length) * Math.PI * 2;
          const radius = 4;

          return (
            <Billboard
              key={tech}
              position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
            >
              <mesh>
                <circleGeometry args={[1, 6]} />
                <meshStandardMaterial color="#1f1f1f" />
              </mesh>
              <Text
                fontSize={0.3}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {tech}
              </Text>
            </Billboard>
          );
        })}
      </group>
    </group>
  );
}
