import { useState } from "react";
import { Text, Edges } from "@react-three/drei";

export default function ServicesSection() {
  const services = [
    {
      title: "🌐 Full-Stack Web Development",
      description:
        "Build scalable, responsive, and secure web applications using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and FastAPI.",
    },
    {
      title: "🤖 AI Integration",
      description:
        "Integrate AI capabilities into web applications using APIs or custom AI models.",
    },
    {
      title: "🔗 REST API Development",
      description:
        "Design and develop secure RESTful APIs with authentication and database integration.",
    },
    {
      title: "🗄 Database Design",
      description: "Design efficient MongoDB and PostgreSQL databases.",
    },
    {
      title: "📱 Cross-Platform Mobile Apps",
      description: "Develop Flutter applications for Android and iOS.",
    },
    {
      title: "💻 Desktop Applications",
      description: "Build desktop applications using Electron.js.",
    },
    {
      title: "🐳 Docker & Deployment",
      description: "Containerize applications and deploy them.",
    },
    {
      title: "⚡ Real-Time Applications",
      description: "Develop applications with WebSockets.",
    },
    {
      title: "🏢 SaaS & ERP Development",
      description: "Build SaaS and ERP business systems.",
    },
    {
      title: "🔧 Maintenance & Feature Development",
      description: "Fix bugs and add new features.",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <group position={[0, 1.4, -34]}>
      <Text
        position={[0.5, 5, 0]}
        font="/src/assets/fonts/BodoniModaSC.ttf"
        fontSize={0.7}
        textAlign="center"
        anchorX="center"
        anchorY="top"
        maxWidth={10}
        color="white"
      >
        Services I Offer
      </Text>
      {/* back ground */}
      <mesh position={[0.5, 0, -0.01]}>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="#141414" transparent opacity={0.5} />
        <Edges color="#727272" />
      </mesh>
      {/* Left Menu */}
      {services.map((service, index) => (
        <group position={[-3, 3 - index * 0.7, 0]}>
          {selected === index && (
            <>
              {/* Top line */}
              <mesh
                scale={selected === index ? [1, 1, 1] : [0, 1, 1]}
                position={[0, 0.28, -0.01]}
              >
                <planeGeometry args={[4.5, 0.02]} />
                <meshBasicMaterial color="white" />
              </mesh>

              {/* Bottom line */}
              <mesh
                scale={selected === index ? [1, 1, 1] : [0, 1, 1]}
                position={[0, -0.28, -0.01]}
              >
                <planeGeometry args={[4.5, 0.02]} />
                <meshBasicMaterial color="white" />
              </mesh>
            </>
          )}

          <Text
            fontSize={0.35}
            anchorX="center"
            color={selected === index ? "#6870fa" : "white"}
            onClick={() => setSelected(index)}
          >
            {service.title}
          </Text>
        </group>
      ))}

      {/* Right Description */}
      <Text
        position={[2, 1.5, 0]}
        fontSize={0.3}
        anchorX="left"
        anchorY="top"
        maxWidth={5}
        color="white"
      >
        {services[selected].description}
      </Text>
    </group>
  );
}

// <Html transform position={[0, 0, -30]} distanceFactor={8} center>
//   <Card
//     sx={{
//       width: { xs: 380, sm: 550, md: 650 },
//       maxHeight: "80vh",
//       overflowY: "auto",
//       borderRadius: 4,
//       backdropFilter: "blur(12px)",
//       background: "#14141400",
//       color: "#fff",
//       //   border: "1px solid rgba(255,255,255,.1)",
//       //   boxShadow: "0 20px 50px rgba(0,0,0,.4)",
//     }}
//   >
//     <CardContent>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Services I Offer
//       </Typography>

//       <Divider sx={{ mb: 2, bgcolor: "rgba(255,255,255,.15)" }} />

//       <Typography
//         variant="body1"
//         sx={{ mb: 3, color: "grey.300", lineHeight: 1.8 }}
//       >
//         I build modern, scalable web, mobile, and desktop applications—from
//         MVPs to production-ready software—with a focus on performance, clean
//         architecture, and real-world business solutions.
//       </Typography>
