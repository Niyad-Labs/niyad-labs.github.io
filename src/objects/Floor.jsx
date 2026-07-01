// import React from "react";
import { tokens } from "../Theme";
import { useTheme } from "@mui/material";

function Floor() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, -30]} receiveShadow>
      <planeGeometry args={[20, 150]} />
      <meshStandardMaterial color={colors.floor} />
    </mesh>
  );
}

export default Floor;
