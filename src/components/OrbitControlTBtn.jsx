import { Box, IconButton } from "@mui/material";
// import { tokens } from "../Theme";
// icons
import ScreenLockPortraitIcon from "@mui/icons-material/ScreenLockPortrait";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";

function OrbitControlTBtn({ orbitEnabled, setOrbitEnabled }) {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
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
        right: "3px",
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
          setOrbitEnabled((prev) => !prev);
        }}
      >
        {orbitEnabled ? (
          <ScreenLockPortraitIcon sx={{ fontSize: 25, color: "#ffffff" }} />
        ) : (
          <StayCurrentPortraitIcon sx={{ fontSize: 25, color: "#ffffff" }} />
        )}
      </IconButton>
    </Box>
  );
}

export default OrbitControlTBtn;
