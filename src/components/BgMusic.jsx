import { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
// import { tokens } from "../Theme";
// icons
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function BgMusic({ play }) {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    audioRef.current = new Audio("/audio/mixkit-relax-beat-292.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.25;

    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    }
  }, [play]);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };
  return (
    <Box
      sx={{
        position: "fixed",
        background: "#404040ce",
        zIndex: 4,
        width: "30px",
        height: "30px",
        maxWidth: "40px",
        maxHeight: "40px",
        left: "5px",
        bottom: "60px",
        borderRadius: "50%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{
          width: "25px",
          height: "25px",
        }}
        onClick={() => {
          setPlaying(toggleMusic);
        }}
      >
        {playing ? (
          <VolumeUpIcon sx={{ fontSize: 25, color: "#ffffff" }} />
        ) : (
          <VolumeOffIcon sx={{ fontSize: 25, color: "#ffffff" }} />
        )}
      </IconButton>
    </Box>
  );
}

export default BgMusic;
