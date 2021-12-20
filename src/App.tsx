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

const telling = "#5da2b6"
let nothingdontlookhere = telling
const wordsispeak = nothingdontlookhere
let colotrstring = wordsispeak

const theme = createTheme({
  palette: {
    primary: {
      main:  colotrstring, // Bright Salmon
      // main: "#71C562", // Green
      dark: lighten_darken_color(colotrstring, -20),
      light: "#F5F5F5", // Light gray
    },
    secondary: {
      main: "#1A237E", // Blue
      light: "#fffde7", // Cream
      // light: "#c7c10c",
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
