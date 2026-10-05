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
        position={[0, 1.2, -19]}
        castShadow
        toneMapped={false}
        material-type="MeshBasicMaterial"
        // font="/fonts/BodoniModaSC.ttf"
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
Full-Stack Developer specializing in the MERN stack with 1+ year of hands-on development and freelance experience building and deploying modern web applications for clients. Experienced in SaaS, AI-powered applications, ERP systems, responsive websites, desktop, and real-time applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, FastAPI, and modern frontend technologies. Skilled in Docker, Flutter, Electron.js, WebSockets, Tailwind CSS, and Three.js, with strong interests in backend development, databases, cloud technologies, performance optimization, and system architecture. Proven ability to design, develop, and deploy end-to-end solutions while collaborating with clients and independently developing commercial software products. `}
      </Text>
      <group position={[0, 0, -2]}>
        <Text3D
          font="fonts/Bodoni Moda SC_Regular.json"
          size={2.3}
          height={0.5}
          castShadow
          position={[-4.9, -2.5, 1]}
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
          position={[-4, -1, 1]}
        >
          {"MUHAMMED \n NIYAD"}
          <meshStandardMaterial color="#c5c5c5" />
        </Text3D>
      </group>
    </>
  );
}
