import { createTheme } from "@mui/material/styles";

export const darkMinimalTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00D9FF", // Electric blue
      dark: "#0099CC",
      light: "#33E1FF",
    },
    secondary: {
      main: "#FF4081", // Hot pink accent
      dark: "#C2185B",
      light: "#FF6EC7",
    },
    info: {
      main: "#00D9FF",
      dark: "#0099CC",
      light: "#33E1FF",
    },
    warning: {
      main: "#FFA726",
    },
    background: {
      default: "#0D1117", // GitHub dark
      paper: "#161B22", // Slightly lighter
    },
    text: {
      primary: "#F0F6FC", // Almost white
      secondary: "#7D8590", // Gray
    },
    divider: "#21262D",
  },
  typography: {
    fontFamily: `"JetBrains Mono", "Fira Code", "Monaco", "Consolas", monospace`,
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontSize: "clamp(3rem, 10vw, 6rem)",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2rem, 6vw, 4rem)",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
    },
    h4: {
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 3vw, 2rem)",
    },
    h5: {
      fontWeight: 600,
      fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
    },
    h6: {
      fontWeight: 600,
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.8,
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#00D9FF #161B22",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#161B22",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#00D9FF",
            borderRadius: "3px",
          },
        },
      },
    },
  },
  // @ts-ignore
  shadows: [
    "none",
    "0px 4px 20px rgba(0, 217, 255, 0.15)",
    "0px 8px 30px rgba(0, 217, 255, 0.2)",
    "0px 12px 40px rgba(0, 217, 255, 0.25)",
    ...Array(21).fill("0px 16px 50px rgba(0, 217, 255, 0.3)"),
  ] as [string, ...string[]],
  animation: {
    navDelay: 0.1,
    tabDelay: 0.05,
    sidebarDelay: 0.2,
    duration: 0.6,
    easing: [0.4, 0.0, 0.2, 1],
  },
});

export const industrialTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FACC15", // Yellow
      dark: "#EAB308",
      light: "#FDE047",
    },
    secondary: {
      main: "#F97316", // Orange
      dark: "#EA580C",
      light: "#FB923C",
    },
    info: {
      main: "#FACC15",
      dark: "#EAB308",
      light: "#FDE047",
    },
    warning: {
      main: "#F97316",
    },
    background: {
      default: "#0F0F0F", // Pure dark
      paper: "#1A1A1A", // Dark gray
    },
    text: {
      primary: "#FAFAFA", // Off white
      secondary: "#A3A3A3", // Light gray
    },
    divider: "#262626",
  },
  typography: {
    fontFamily: `"JetBrains Mono", "Fira Code", "Monaco", "Consolas", monospace`,
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
      fontSize: "clamp(3rem, 10vw, 6rem)",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "clamp(2rem, 6vw, 4rem)",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "-0.01em",
      fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
    },
    h4: {
      fontWeight: 600,
      fontSize: "clamp(1.25rem, 3vw, 2rem)",
    },
    h5: {
      fontWeight: 600,
      fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
    },
    h6: {
      fontWeight: 600,
      fontSize: "clamp(1rem, 2vw, 1.25rem)",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.8,
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#FACC15 #1A1A1A",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1A1A1A",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#FACC15",
            borderRadius: "3px",
          },
        },
      },
    },
  },
  // @ts-ignore
  shadows: [
    "none",
    "0px 4px 20px rgba(250, 204, 21, 0.15)",
    "0px 8px 30px rgba(250, 204, 21, 0.2)",
    "0px 12px 40px rgba(250, 204, 21, 0.25)",
    ...Array(21).fill("0px 16px 50px rgba(250, 204, 21, 0.3)"),
  ] as [string, ...string[]],
  animation: {
    navDelay: 0.1,
    tabDelay: 0.05,
    sidebarDelay: 0.2,
    duration: 0.6,
    easing: [0.4, 0.0, 0.2, 1],
  },
});
