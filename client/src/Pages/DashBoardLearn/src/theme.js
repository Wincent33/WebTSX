import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { color } from "@mui/system";

//color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary1: {
          100: "#d8dee6",
          200: "#b1bdcc",
          300: "#8b9cb3",
          400: "#647b99",
          500: "#3d5a80",
          600: "#314866",
          700: "#25364d",
          800: "#182433",
          900: "#0c121a",
        },
        primary2: {
          100: "#eaf3f7",
          200: "#d6e6f0",
          300: "#c1dae8",
          400: "#adcde1",
          500: "#98c1d9",
          600: "#7a9aae",
          700: "#5b7482",
          800: "#3d4d57",
          900: "#1e272b",
        },
        primary3: {
          100: "#f9fefe",
          200: "#f3fdfe",
          300: "#ecfdfd",
          400: "#e6fcfd",
          500: "#e0fbfc",
          600: "#b3c9ca",
          700: "#869797",
          800: "#5a6465",
          900: "#2d3232",
        },
        primary4: {
          100: "#fce2db",
          200: "#f8c4b8",
          300: "#f5a794",
          400: "#f18971",
          500: "#ee6c4d",
          600: "#be563e",
          700: "#8f412e",
          800: "#5f2b1f",
          900: "#30160f",
        },
        primary5: {
          100: "#d4d6d9",
          200: "#a9adb3",
          300: "#7f848d",
          400: "#545b67",
          500: "#293241",
          600: "#212834",
          700: "#191e27",
          800: "#10141a",
          900: "#080a0d",
        },
      }
    : {
        primary1: {
          100: "#d8dee6",
          200: "#b1bdcc",
          300: "#8b9cb3",
          400: "#647b99",
          500: "#3d5a80",
          600: "#314866",
          700: "#25364d",
          800: "#182433",
          900: "#0c121a",
        },
        primary2: {
          100: "#eaf3f7",
          200: "#d6e6f0",
          300: "#c1dae8",
          400: "#adcde1",
          500: "#98c1d9",
          600: "#7a9aae",
          700: "#5b7482",
          800: "#3d4d57",
          900: "#1e272b",
        },
        primary3: {
          100: "#f9fefe",
          200: "#f3fdfe",
          300: "#ecfdfd",
          400: "#e6fcfd",
          500: "#e0fbfc",
          600: "#b3c9ca",
          700: "#869797",
          800: "#5a6465",
          900: "#2d3232",
        },
        primary4: {
          100: "#fce2db",
          200: "#f8c4b8",
          300: "#f5a794",
          400: "#f18971",
          500: "#ee6c4d",
          600: "#be563e",
          700: "#8f412e",
          800: "#5f2b1f",
          900: "#30160f",
        },
        primary5: {
          100: "#d4d6d9",
          200: "#a9adb3",
          300: "#7f848d",
          400: "#545b67",
          500: "#293241",
          600: "#212834",
          700: "#191e27",
          800: "#10141a",
          900: "#080a0d",
        },
      }),
});

//mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary1[500],
            },
            secondary: {
              main: colors.primary4[500],
            },
            neutral: {
              dark: colors.primary5[500],
              main: colors.primary3[500],
              light: colors.primary2[500],
            },
            background: {
              default: colors.primary1[500],
            },
          }
        : {
            primary: {
              main: colors.primary1[500],
            },
            secondary: {
              main: colors.primary4[500],
            },
            neutral: {
              dark: colors.primary5[500],
              main: colors.primary3[500],
              light: colors.primary2[500],
            },
            background: {
              default: colors.primary1[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

//context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode(prev === "light" ? "dark" : "light"),
    }),
    []
  );
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return [theme, colorMode];
};


