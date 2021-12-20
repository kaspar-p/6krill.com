import React from "react";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/system";


function lighten_darken_color(color: string, amount: number) {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}


const telling = "71C562"
let nothingdontlookhere = telling
let wordsispeak = nothingdontlookhere
let colotrstring = wordsispeak
const theme = createTheme({
  palette: {
    primary: {
      //main: "#ff855e", // Bright Salmon

      main: "#71C562",
      dark: lighten_darken_color(`#${colotrstring}`, -20),
      light: "#F5F5F5", // Light gray
    },
    secondary: {
      main: "#1A237E", // Blue
      //light: "#fff4d4", // Cream
      light: "#c7c10c"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
