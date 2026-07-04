import { useState } from "react";
import { Text, Edges } from "@react-three/drei";

export default function Projects() {
  const projects = [
    {
      name: "PixelPact",
      tech: "React • Node.js • Express.js • FastAPI • PyTorch • Flutter • MongoDB • Docker • WebSockets",
      description:
        "A production-oriented AI-powered SaaS platform for digital art creation and collaboration featuring AI image generation, ERP-style order management, blockchain ownership, real-time artist collaboration, secure payments, and cross-platform web/mobile applications.",
      github: "https://github.com/Niyad-Labs/BCA-project",
      download: "",
    },
    {
      name: "Share With Node",
      tech: "Electron.js • Node.js • Express.js • Vite",
      description:
        "An open-source cross-platform desktop application for high-speed local network file sharing with QR-code pairing, instant media streaming, secure authentication, and downloadable releases for Windows.",
      github: "https://github.com/Niyad-Labs/Share-With-Node",
      download: "https://github.com/Niyad-Labs/Share-With-Node/releases",
    },
    {
      name: "3D Portfolio Website",
      tech: "React • Three.js • React Three Fiber • Material UI • GSAP",
      description:
        "An interactive 3D developer portfolio featuring animated scenes, smooth camera transitions, responsive design, project showcase, and integrated contact functionality.",
      github: "https://github.com/Niyad-Labs/My-Portfolio", // Update if different
      download: "https://niyad-labs.github.io/My-Portfolio",
    },
    {
      name: "BookNesto",
      tech: "Node.js • Express.js • MongoDB • EJS • Multer",
      description:
        "A full-stack book management platform with CRUD operations, file uploads, author-book relationships, search, filtering, and dynamic server-rendered views.",
      github: "https://github.com/Niyad-Labs/BookNesto", // Update if different
      download: "",
    },
    {
      name: "Brandism",
      tech: "HTML • CSS • JavaScript • Bootstrap",
      description:
        "A professional client website showcasing branding, social media management, advertising video production, logo design, and web design services with a responsive interface.",
      github: "", // Private if applicable
      download: "",
    },
    {
      name: "To-Do Application",
      tech: "HTML • CSS • JavaScript",
      description:
        "A task management application featuring local storage, task editing, drag-and-drop organization, and priority-based task management.",
      github: "https://github.com/Niyad-Labs", // Update repo if available
      download: "",
    },
    {
      name: "Scientific Calculator",
      tech: "HTML • CSS • JavaScript",
      description:
        "A calculator implementing postfix expression evaluation with efficient mathematical operations and a clean responsive interface.",
      github: "https://github.com/Niyad-Labs", // Update repo if available
      download: "",
    },
    {
      name: "Ping Pong Game",
      tech: "HTML • CSS • JavaScript",
      description:
        "A browser-based Ping Pong game featuring smooth animations, responsive controls, collision detection, and real-time score tracking.",
      github: "https://github.com/Niyad-Labs", // Update repo if available
      download: "",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <group position={[0, 2.1, -73]}>
      <Text
        position={[0.5, 5, 0]}
        font="/fonts/BodoniModaSC.ttf"
        fontSize={0.7}
        textAlign="center"
        anchorX="center"
        anchorY="top"
        maxWidth={10}
        color="white"
      >
        Projects
      </Text>
      {/* back ground */}
      <mesh position={[0.5, 0, -0.01]}>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="#141414" transparent opacity={0.5} />
        <Edges color="#727272" />
      </mesh>
      {/* Left Project List */}
      {projects.map((project, index) => (
        <group
          key={index}
          position={[-6, 3 - index * 0.8, 0]}
          onClick={() => setSelected(index)}
        >
          {/* Selected Lines */}
          {selected === index && (
            <>
              <mesh position={[2, 0.28, -0.01]}>
                <planeGeometry args={[4.5, 0.02]} />
                <meshBasicMaterial color="white" />
              </mesh>

              <mesh position={[2, -0.28, -0.01]}>
                <planeGeometry args={[4.5, 0.02]} />
                <meshBasicMaterial color="white" />
              </mesh>
            </>
          )}

          <Text
            fontSize={0.35}
            anchorX="left"
            color={selected === index ? "#6870fa" : "white"}
          >
            {project.name}
          </Text>
        </group>
      ))}

      {/* Right Side */}
      <group position={[0, 2.5, 0]}>
        <Text
          position={[-0.5, 0, 0]}
          anchorX="left"
          anchorY="top"
          maxWidth={7}
          fontSize={0.28}
          color="#6870fa"
        >
          {projects[selected].tech}
        </Text>

        <Text
          position={[-0.5, -1.5, 0]}
          anchorX="left"
          anchorY="top"
          maxWidth={7}
          fontSize={0.33}
          color="white"
        >
          {projects[selected].description}
        </Text>

        {/* GitHub Link */}
        <Text
          position={[-0.5, -5.5, 0]}
          anchorX="left"
          fontSize={0.35}
          color="#4dabff"
          onClick={() => window.open(projects[selected].github, "_blank")}
        >
          GitHub Repository
        </Text>

        {/* Download Link */}
        <Text
          position={[3.2, -5.5, 0]}
          anchorX="left"
          fontSize={0.35}
          color="#4caf50"
          onClick={() => window.open(projects[selected].download, "_blank")}
        >
          Live Demo
        </Text>
      </group>
    </group>
  );
}
