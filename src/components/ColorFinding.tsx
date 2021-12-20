import React from "react";
import { Grid } from "@mui/material";

import { lighten_darken_color } from "../lib";

function ColorFinding({ color }: { color: string }) {
  return (
    <Grid
      item
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ margin: "1px" }}
    >
      The slightly darker color of
      <div
        style={{
          backgroundColor: color,
          width: "20px",
          height: "20px",
          margin: "0px 5px",
        }}
      ></div>
      is
      <div
        style={{
          width: "20px",
          height: "20px",
          margin: "0px 5px",
          backgroundColor: lighten_darken_color(color, -40),
        }}
      ></div>
    </Grid>
  );
}

export default ColorFinding;
