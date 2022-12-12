import Home from "./Screens/Home"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import mainTheme from "./Theme"
import "./App.css"
import Sidebar from "./Components/general/Sidebar";
import Navbar from "./Components/general/Navbar.tsx"
function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Navbar/>
     <Sidebar/>
     <Home/> 
    </ThemeProvider>
  )
}

export default App
