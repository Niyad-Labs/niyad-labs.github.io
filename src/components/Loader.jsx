import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@mui/system";
import { useProgress } from "@react-three/drei";

const pulse = keyframes`
  0% { opacity: .5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: .5; transform: scale(1); }
`;

const slideTop = keyframes`
  from { transform: translateY(-50px); opacity:0; }
  to { transform: translateY(0); opacity:1; }
`;

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Box
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

      {/* Left Side */}
      <Box
        sx={{
          textAlign: "center",
          zIndex: 2,
        }}
      >
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
          Loading...
        </Typography>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          position: "relative",
          width: 70,
          overflow: "hidden",
          height: 80,
          zIndex: 2,
          margin: "10px",
        }}
      >
        <CircularProgress
          size={80}
          variant="determinate"
          value={progress}
          sx={{
            color: "#ffd043", // Gold
            // filter: "drop-shadow(0 0 10px #FFD700)",
            position: "absolute",
            top: "0",
            left: "-5px",
          }}
        />

        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "BodoniModaSC",
          }}
        >
          {progress}%
        </Typography>
      </Box>
    </Box>
  );
}
