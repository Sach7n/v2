import Home from "./Screens/Home";
import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { mainTheme, darkCryptoTheme } from "./Theme";
import Sidebar from "./Components/general/Sidebar";
import Navbar from "./Components/general/Navbar";
import MainContainer from "./Components/general/MainBackgroundDefault";
function App() {
  const themes = [mainTheme, darkCryptoTheme];
  const [themeIndex, setThemeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
    }, 60000);

    return () => clearInterval(interval);
  }, [themes.length]);

  const currentTheme = themes[themeIndex];
  return (
    <ThemeProvider theme={currentTheme}>
      <style>{`
    html {
      scroll-behavior: smooth;
    }
      * {
    transition: 
      background-color 0.3s ease-in-out,
      color 0.3s ease-in-out,
      transform 0.3s ease-in-out,
      border-color 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }
  `}</style>
      <CssBaseline />
      <MainContainer>
        <Navbar />
        <Sidebar />
        <Home />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
