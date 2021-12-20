import React from "react";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4511E",
      light: "#F5F5F5",
    },
    secondary: {
      main: "#1A237E",
      light: "#FFE082",
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
