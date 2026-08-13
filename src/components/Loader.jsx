import { Box, Typography, CircularProgress } from "@mui/material";
import { keyframes } from "@mui/system";
import { useProgress } from "@react-three/drei";

// Keyframe Animations
const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.03); filter: drop-shadow(0 0 12px rgba(255, 208, 67, 0.6)); }
`;

const fadeInDown = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// const shimmer = keyframes`
//   0% { background-position: -200% 0; }
//   100% { background-position: 200% 0; }
// `;

export default function Loader({ onStart }) {
  const { progress } = useProgress();
  const ready = progress >= 100;

  return (
    <Box
      onClick={() => {
        if (ready && onStart) {
          onStart();
        }
      }}
      aria-label={ready ? "Click to start experience" : "Loading experience"}
      role={ready ? "button" : "region"}
      tabIndex={ready ? 0 : -1}
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        inset: 0,
        bgcolor: "#08080c",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 9999,
        cursor: ready ? "pointer" : "default",
        userSelect: "none",
        transition: "background-color 0.5s ease",
        "&:focus-visible": {
          outline: "2px solid #ffd043",
          outlineOffset: "-4px",
        },
      }}
    >
      {/* Dynamic Background Radial Glow */}
      <Box
        sx={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: ready
            ? "radial-gradient(circle, rgba(255, 208, 67, 0.12) 0%, rgba(0,0,0,0) 70%)"
            : "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, rgba(0,0,0,0) 70%)",
          transition: "background 0.8s ease-in-out",
          pointerEvents: "none",
        }}
      />

      {/* Diagonal Geometric Strips */}
      <Box
        sx={{
          position: "absolute",
          width: "200vw",
          height: "100vh",
          bgcolor: "rgba(255, 255, 255, 0.02)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          bottom: "85%",
          right: "-50%",
          transform: "rotate(-12deg)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "200vw",
          height: "100vh",
          bgcolor: "rgba(255, 255, 255, 0.02)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          top: "85%",
          left: "-50%",
          transform: "rotate(-12deg)",
          pointerEvents: "none",
        }}
      />

      {/* Main Content Stack */}
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* Brand Header */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "0.08em",
              fontSize: { xs: "2.25rem", sm: "3.5rem" },
              animation: `${fadeInDown} 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
              fontFamily: "'Bodoni Moda', 'BodoniModaSC', serif",
              background: "linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
            }}
          >
            Niyad-Labs
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mt: 1.5,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              color: ready ? "#ffd043" : "rgba(255, 255, 255, 0.6)",
              animation: ready
                ? `${pulseGlow} 2s infinite ease-in-out`
                : "none",
              transition: "color 0.4s ease",
            }}
          >
            {ready ? "— Click Anywhere To Enter —" : "Preparing Experience"}
          </Typography>
        </Box>

        {/* Circular Progress Display */}
        <Box
          sx={{
            position: "relative",
            width: 120,
            height: 120,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            "&:hover": ready
              ? {
                  transform: "scale(1.08)",
                }
              : {},
          }}
        >
          {/* Background Track Circle */}
          <CircularProgress
            size={110}
            thickness={2.5}
            variant="determinate"
            value={100}
            sx={{
              color: "rgba(255, 255, 255, 0.08)",
              position: "absolute",
            }}
          />

          {/* Animated Active Progress Circle */}
          <CircularProgress
            size={110}
            thickness={2.5}
            variant="determinate"
            value={Math.min(progress, 100)}
            sx={{
              color: "#ffd043",
              position: "absolute",
              strokeLinecap: "round",
              transition: "transform 0.2s ease, color 0.4s ease",
              filter: ready
                ? "drop-shadow(0 0 10px rgba(255, 208, 67, 0.8))"
                : "drop-shadow(0 0 4px rgba(255, 208, 67, 0.3))",
            }}
          />

          {/* Percentage / Status Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.25rem",
                fontWeight: 700,
                fontFamily: "'Bodoni Moda', 'BodoniModaSC', serif",
                color: ready ? "#ffd043" : "#ffffff",
                transition: "color 0.3s ease",
              }}
            >
              {Math.round(progress)}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
