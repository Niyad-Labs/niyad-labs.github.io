import { Text3D, Text, Sparkles } from "@react-three/drei";
export default function AboutSection() {
  return (
    <>
      <Sparkles
        count={50}
        scale={9}
        size={5}
        speed={3}
        color="#4cceac"
        position={[0, 0, 0]}
      />
      <Text
        position={[0, 2, -17]}
        castShadow
        font="/src/assets/fonts/BodoniModaSC.ttf"
        fontSize={0.4}
        maxWidth={14}
        fontWeight="bold"
        lineHeight={1.5}
        textAlign="center"
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {`About Me
I'm Muhammed Niyad, a Full-Stack Developer specializing in the MERN stack with over a year of hands-on software development experience gained through building production-oriented web, desktop, and mobile applications.I enjoy transforming complex ideas into scalable, user-focused software using React.js, Node.js, Express.js, MongoDB, PostgreSQL, FastAPI, Docker, and Flutter. My flagship project, PixelPact, is an AI-powered SaaS platform featuring ERP-style business workflows, blockchain-based ownership, real-time collaboration, and AI integration through FastAPI. Share With Node is an open-source desktop application for secure local file sharing and media streaming. I'm passionate about backend engineering, system architecture, performance optimization, and continuously learning modern technologies to build reliable software that solves real-world problems.`}
      </Text>
      <group position={[0, 0, -2]}>
        <Text3D
          font="fonts/Bodoni Moda SC_Regular.json"
          size={2.3}
          height={0.5}
          castShadow
          position={[-4.9, -2.5, 0]}
        >
          !
          <meshStandardMaterial color="#c5c5c5" />
        </Text3D>
        <Text3D
          font="fonts/Bodoni Moda SC_Regular.json"
          size={0.8}
          castShadow
          height={0.3}
          lineHeight={0.8}
          position={[-4, -1, 0]}
        >
          {"Muhammed \n Niyad"}
          <meshStandardMaterial color="#c5c5c5" />
        </Text3D>
      </group>
    </>
  );
}
