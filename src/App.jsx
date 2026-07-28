import { useEffect } from "react";
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
// me
import { me } from "./data/me";

if (import.meta.env.DEV || import.meta.env.PROD) {
  window.me = JSON.stringify(me, null, 2);
}

export default function App() {
  const [theme, colorMode] = useMode();

  useEffect(() => {
    if (!window.__portfolioMessageShown__) {
      window.__portfolioMessageShown__ = true;

      console.log(`
👋 Hello! You're currently viewing ${me.name}'s portfolio.

Try :
  > console.log(me)
if you want to know about me
`);
    }
  }, []);

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
