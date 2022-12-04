import Home from "./Screens/Home"
import { Theme, ThemeProvider } from '@mui/material/styles';
import mainTheme from "./Theme"
import "./App.css"

function App() {
  console.log(mainTheme)
  return (
    <ThemeProvider theme={mainTheme}>
     <Home/> 
    </ThemeProvider>
  )
}

export default App
