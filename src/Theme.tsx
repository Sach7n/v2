import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7C4DFF",
    },
    secondary: {
      main: "#0282b5",
    },
    info: {
      main: "#96e1ff",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#ffffff",
      secondary: "#B0BEC5",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
      letterSpacing: "0.05em",
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  shape: {
    borderRadius: 10,
  },
  // @ts-ignore
  shadows: [
    "none",
    ...Array(24).fill("0px 0px 12px rgba(124, 77, 255, 0.12)"),
  ] as [string, ...string[]],
  animation: {
    navDelay: 0.3,
    tabDelay: 0.15,
    sidebarDelay: 0.5,
    duration: 0.6,
    easing: "easeInOut",
  },
});

export const darkCryptoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0ff",
    },
    secondary: {
      main: "#008245",
    },
    info: {
      main: "#00e5ff",
      dark: "#00e5ff",
    },
    background: {
      default: "rgba(1,33,33,0.9921218487394958)",
      paper: "rgba(7,37,33,0.9977240896358543)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#9ba0b0",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 10,
  },
  // @ts-ignore
  shadows: ["none", ...Array(24).fill("0px 0px 20px rgba(0, 255, 255, 0.15)")],
  animation: {
    navDelay: 0.3,
    tabDelay: 0.15,
    sidebarDelay: 0.5,
    duration: 0.6,
    easing: "easeInOut",
  },
});
