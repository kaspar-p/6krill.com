import React from "react";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff855e", // Bright Salmon
      light: "#F5F5F5", // Light gray
    },
    secondary: {
      main: "#1A237E", // Blue
      light: "#fff4d4", // Cream
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
