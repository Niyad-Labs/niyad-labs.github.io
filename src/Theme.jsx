import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color tokens
export const tokens = (mode) => ({
  ...(mode == "dark"
    ? {
        floor: "#3b3b3b",
        room: "#141414",
        grey: {
          100: "#ffffff",
          200: "#e0e0e0",
          300: "#c0c0c0",
          400: "#a0a0a0",
          500: "#808080",
          600: "#606060",
          700: "#404040",
          800: "#202020",
          900: "#000000",
        },
        honeyBg: `
            conic-gradient(from 60deg at 56.25% calc(425%/6),
              transparent,
              #262626 .5deg 119.5deg,
              transparent 120deg),
            conic-gradient(from 60deg at 56.25% calc(425%/6),
              transparent,
              #262626 .5deg 119.5deg,
              transparent 120deg)
              33px calc(1.73 * 33px),

            conic-gradient(from 180deg at 43.75% calc(425%/6),
              transparent,
              #262626 .5deg 119.5deg,
              transparent 120deg),

            conic-gradient(from 180deg at 43.75% calc(425%/6),
              transparent,
              #262626 .5deg 119.5deg,
              transparent 120deg)
              33px calc(1.73 * 33px),

            conic-gradient(from -60deg at 50% calc(175%/12),
              transparent,
              #262626 .5deg 119.5deg,
              transparent 120deg)
              33px 0,

            conic-gradient(from -60deg at 50% calc(175%/12),
              transparent,
              #262626 .5deg 119.5deg,
              transparent 120deg)
              0 calc(1.73 * 33px)

            #121212
          `,
      }
    : {
        floor: "#7b1ee6",
        room: "#2e0161",
        grey: {
          100: "#000000",
          200: "#202020",
          300: "#404040",
          400: "#606060",
          500: "#808080",
          600: "#a0a0a0",
          700: "#c0c0c0",
          800: "#e0e0e0",
          900: "#ffffff",
        },
        honeyBg: `
            conic-gradient(from 60deg at 56.25% calc(425%/6),
              transparent,
              #f2eb07 .5deg 119.5deg,
              transparent 120deg),
            conic-gradient(from 60deg at 56.25% calc(425%/6),
              transparent,
              #f2eb07 .5deg 119.5deg,
              transparent 120deg)
              33px calc(1.73 * 33px),

            conic-gradient(from 180deg at 43.75% calc(425%/6),
              transparent,
              #f2eb07 .5deg 119.5deg,
              transparent 120deg),

            conic-gradient(from 180deg at 43.75% calc(425%/6),
              transparent,
              #f2eb07 .5deg 119.5deg,
              transparent 120deg)
              33px calc(1.73 * 33px),

            conic-gradient(from -60deg at 50% calc(175%/12),
              transparent,
              #f2eb07 .5deg 119.5deg,
              transparent 120deg)
              33px 0,

            conic-gradient(from -60deg at 50% calc(175%/12),
              transparent,
              #f2eb07 .5deg 119.5deg,
              transparent 120deg)
              0 calc(1.73 * 33px)

            #ecbe13
          `,
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  // const colors=tokens(mode);
  return {
    palette: {
      mode,
      background: { default: "#000000" },
      text: { primary: "#ffffff" },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
