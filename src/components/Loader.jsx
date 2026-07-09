import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@mui/system";
import { useProgress } from "@react-three/drei";
// import { useState } from "react";

const pulse = keyframes`
  0% { opacity: .5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: .5; transform: scale(1); }
`;

const slideTop = keyframes`
  from { transform: translateY(-50px); opacity:0; }
  to { transform: translateY(0); opacity:1; }
`;

export default function Loader({ onStart }) {
  const { progress } = useProgress();
  const ready = progress >= 100;
  return (
    <Box
      onClick={() => {
        if (ready) {
          onStart();
        }
      }}
      sx={{
        height: "100vh",
        position: "fixed",
        inset: 0,
        bgcolor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 9999,
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      {/* Top Strip */}
      <Box
        sx={{
          position: "absolute",
          width: "200vw",
          height: "100vh",
          bgcolor: "#1f1e1e",
          bottom: "87%",
          right: "-70%",
          transform: "rotate(-15deg)",
        }}
      />

      {/* Bottom Strip */}
      <Box
        sx={{
          position: "absolute",
          width: "200vw",
          height: "100vh",
          bgcolor: "#1f1e1e",
          top: "77%",
          transform: "rotate(-15deg)",
        }}
      />

      {/* Logo */}
      <Box sx={{ textAlign: "center", zIndex: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            animation: `${slideTop} 1s ease`,
            fontFamily: "BodoniModaSC",
          }}
        >
          Niyad-Labs
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 1,
            animation: `${pulse} 2s infinite`,
            fontFamily: "BodoniModaSC",
          }}
        >
          {progress < 100 ? "Loading..." : "Click to start"}
        </Typography>
      </Box>

      {/* Progress  */}
      <Box
        sx={{
          zIndex: 2,
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <CircularProgress
          size={90}
          variant="determinate"
          value={progress}
          sx={{
            color: "#ffd043",
            filter: "drop-shadow(0 0 8px #ffd043)",
          }}
        />

        <Typography
          sx={{
            position: "absolute",
            fontFamily: "BodoniModaSC",
          }}
        >
          {Math.round(progress)}%
        </Typography>
      </Box>
    </Box>
  );
}
