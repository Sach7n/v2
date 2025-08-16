import Home from "./Screens/Home";
import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkMinimalTheme, industrialTheme } from "./Theme";
import Sidebar from "./Components/general/Sidebar";
import Navbar from "./Components/general/Navbar";
import MainContainer from "./Components/general/MainBackgroundDefault";
import { LoadingScreen } from "./Components/general/LoadingScreen";
import { AnimatePresence } from "framer-motion";

function App() {
  const themes = [darkMinimalTheme, industrialTheme];
  const [themeIndex, setThemeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const interval = setInterval(() => {
        setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
      }, 90000);

      return () => clearInterval(interval);
    } catch (error) {
      console.error("Theme switching error:", error);
    }
  }, []);

  const currentTheme = themes[themeIndex];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          transition: 
            background-color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            border-color 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        body {
          font-feature-settings: "cv02", "cv03", "cv04", "cv11";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        ::selection {
          background-color: ${currentTheme.palette.primary.main}40;
        }
        
        ::-moz-selection {
          background-color: ${currentTheme.palette.primary.main}40;
        }
      `}</style>
      <CssBaseline />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <MainContainer key="main">
            <Navbar />
            <Sidebar />
            <Home />
          </MainContainer>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
