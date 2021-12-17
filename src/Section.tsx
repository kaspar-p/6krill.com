import React, { ReactNode } from "react";
import Grid from "@material-ui/core/Grid";

function Section({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <Grid
      item
      xs={8}
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}

export default Section;
