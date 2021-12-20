import React from "react";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF", // Card background color
      dark: "#A239CA", // Card drop shadow color
    },
    secondary: {
      light: "#0E0B16", // Background color
      dark: "#000000", // Text color
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
