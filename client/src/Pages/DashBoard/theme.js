import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
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
        primary: {
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
        greenAccent: {
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
        redAccent: {
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
        blueAccent: {
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
      }
    : {
        grey: {
          100: "#080a0d",
          200: "#10141a",
          300: "#191e27",
          400: "#212834",
          500: "#293241",
          600: "#545b67",
          700: "#7f848d",
          800: "#a9adb3",
          900: "#d4d6d9",
        },
        primary: {
          100: "#0c121a",
          200: "#182433",
          300: "#25364d",
          400: "#f2f0f0", // manually changed
          // 400: "#314866",
          500: "#3d5a80",
          600: "#647b99",
          700: "#8b9cb3",
          800: "#b1bdcc",
          900: "#d8dee6",
        },
        greenAccent: {
          100: "#2d3232",
          200: "#5a6465",
          300: "#869797",
          400: "#b3c9ca",
          500: "#e0fbfc",
          600: "#e6fcfd",
          700: "#ecfdfd",
          800: "#f3fdfe",
          900: "#f9fefe",
        },
        redAccent: {
          100: "#30160f",
          200: "#5f2b1f",
          300: "#8f412e",
          400: "#be563e",
          500: "#ee6c4d",
          600: "#f18971",
          700: "#f5a794",
          800: "#f8c4b8",
          900: "#fce2db",
        },
        blueAccent: {
          100: "#1e272b",
          200: "#3d4d57",
          300: "#5b7482",
          400: "#7a9aae",
          500: "#98c1d9",
          600: "#adcde1",
          700: "#c1dae8",
          800: "#d6e6f0",
          900: "#eaf3f7",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
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

// context for color mode
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
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
