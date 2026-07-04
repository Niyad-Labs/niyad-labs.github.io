import { useState } from "react";
import { Text, Edges } from "@react-three/drei";

export default function ServicesSection() {
  const services = [
    {
      title: "🌐 Full-Stack Web Development",
      description:
        "Build modern, responsive, and scalable web applications from concept to deployment. I develop secure front-end and back-end solutions using React.js, Node.js, Express.js, FastAPI, MongoDB, and PostgreSQL, ensuring high performance, maintainability, and an excellent user experience.",
    },
    {
      title: "🤖 AI Integration",
      description:
        "Integrate AI-powered features into your applications, including chatbots, content generation, image generation, smart search, recommendations, document processing, and workflow automation using APIs or custom AI solutions.",
    },
    {
      title: "🔗 REST API Development",
      description:
        "Design and develop secure, scalable RESTful APIs with authentication, authorization, database integration, input validation, error handling, documentation, and third-party API integration for seamless communication between applications.",
    },
    {
      title: "🗄 Database Design",
      description:
        "Design efficient and well-structured MongoDB and PostgreSQL databases with optimized schemas, indexing, relationships, data validation, and performance tuning to ensure fast and reliable data management.",
    },
    {
      title: "📱 Cross-Platform Mobile Apps",
      description:
        "Develop high-performance Flutter applications for Android and iOS with responsive UI, API integration, authentication, local storage, and smooth user experiences from a single codebase.",
    },
    {
      title: "💻 Desktop Applications",
      description:
        "Create cross-platform desktop applications using Electron.js with modern interfaces, local database support, file system access, auto-updates, and integration with existing web services.",
    },
    {
      title: "🐳 Docker & Deployment",
      description:
        "Containerize applications using Docker and deploy them to cloud platforms or VPS servers with production-ready configurations, environment management, reverse proxies, SSL certificates, and automated deployment workflows.",
    },
    {
      title: "⚡ Real-Time Applications",
      description:
        "Build real-time applications using WebSockets, including live chat systems, notifications, collaborative tools, dashboards, tracking systems, and instant data synchronization.",
    },
    {
      title: "🏢 SaaS & ERP Development",
      description:
        "Develop secure and scalable SaaS platforms and ERP systems with user authentication, role-based access control, subscription management, dashboards, analytics, payment integration, and business workflow automation.",
    },
    {
      title: "🔧 Maintenance & Feature Development",
      description:
        "Maintain and improve existing applications by fixing bugs, optimizing performance, implementing new features, enhancing security, upgrading dependencies, and ensuring long-term reliability and scalability.",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <group position={[0, 1.4, -36]}>
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
        <group position={[-6, 3 - index * 0.7, 0]} key={index}>
          {selected === index && (
            <>
              {/* Top line */}
              <mesh
                scale={selected === index ? [1, 1, 1] : [0, 1, 1]}
                position={[2, 0.28, -0.01]}
              >
                <planeGeometry args={[4.5, 0.02]} />
                <meshBasicMaterial color="white" />
              </mesh>

              {/* Bottom line */}
              <mesh
                scale={selected === index ? [1, 1, 1] : [0, 1, 1]}
                position={[2, -0.28, -0.01]}
              >
                <planeGeometry args={[4.5, 0.02]} />
                <meshBasicMaterial color="white" />
              </mesh>
            </>
          )}

          <Text
            fontSize={0.35}
            anchorX="left"
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
