import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
// objects
import CameraController from "../objects/CameraController";
import Bee from "../objects/Bee";
import Floor from "../objects/Floor";
import PointLights from "../objects/PointLights";
// import Name from "../objects/Name";
import AboutSection from "../objects/AboutSection";
// theme
import { tokens } from "../Theme";
import { useTheme } from "@mui/material";
// components
import Loader from "../components/Loader";
// orbital control
import { OrbitControls } from "@react-three/drei";
import OrbitControlTBtn from "../components/OrbitControlTBtn";
import ServicesSection from "../objects/ServicesSection";
import TechStack from "../objects/TechStack";
import Projects from "../objects/Projects";
import Contacts from "../objects/Contacts";
import Navbar from "../components/Navbar";
import SeoContent from "../components/SeoContent";
import BgMusic from "../components/BgMusic";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [started, setStarted] = useState(false);
  const [orbitEnabled, setOrbitEnabled] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: "400vh",
        }}
      >
        {!started && <Loader onStart={() => setStarted(true)} />}
        <SeoContent />
        <Navbar />
        <Canvas
          shadows
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            // pointerEvents: orbitEnabled ? "auto" : "none",
            zIndex: 0,
          }}
          camera={{ fov: window.innerWidth < 768 ? 90 : 45 }}
        >
          {orbitEnabled && <OrbitControls />}
          <CameraController start={started} orbitEnabled={orbitEnabled} />
          <fog attach="fog" args={["#000000", 10, 40]} />
          <ambientLight />
          <PointLights />
          <color attach="background" args={[colors.room]} />
          <Floor />
          <Bee />
          {/* <Name /> */}
          <AboutSection />
          <ServicesSection />
          <TechStack />
          <Projects />
          <Contacts />
        </Canvas>
        <OrbitControlTBtn
          orbitEnabled={orbitEnabled}
          setOrbitEnabled={setOrbitEnabled}
        />
        <BgMusic play={started} />
      </Box>
    </>
  );
};

export default Home;
