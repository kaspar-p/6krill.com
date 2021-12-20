import React from "react";
import Home from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/system";

/**
 *
 * @param color The color to pass in, in hex
 * @param amount The amount (in RGB) to affect. Negative means darker.
 * @returns The resulting hex.
 */
function lighten_darken_color(color: string, amount: number): string {
  return (
    "#" +
    color
      .replace(/^#/, "")
      .replace(/../g, (color) =>
        (
          "0" +
          Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
        ).substr(-2)
      )
  );
}

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

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#0E0B16", // Card background color
//       dark: "#A239CA", // Card drop shadow color
//     },
//     secondary: {
//       light: "#E7DFDD", // Background color
//       dark: "#FFF", // Text color
//     },
//   },
// });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
