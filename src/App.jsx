import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./styles/main.css";
// components
import ThemeBtn from "./components/ThemeBtn";
// pages
import Home from "./pages/Home";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <ThemeBtn />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
