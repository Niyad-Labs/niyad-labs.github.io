import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../Theme";
// icons
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundSharpIcon from "@mui/icons-material/NightlightRoundSharp";

function ThemeBtn() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

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
        bottom: "20px",
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
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <LightModeIcon sx={{ fontSize: 25 }} />
        ) : (
          <NightlightRoundSharpIcon
            sx={{ fontSize: 25, color: colors.grey[900], marginRight: "5px" }}
          />
        )}
      </IconButton>
    </Box>
  );
}

export default ThemeBtn;
