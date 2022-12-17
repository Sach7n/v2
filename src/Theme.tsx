import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         backgroundColor: "#FAACA8",
  //         backgroundImage: `linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)`,
  //       },
  //     },
  //   },
  // },
    palette: {
      primary:{
        main:"#fff"
      },
      secondary: {
        main: "#484a04",
      },
      info:{
        main:"#fff",
        dark:"#1ef7e2"
      },
    },
    
    
  });

  export default mainTheme;