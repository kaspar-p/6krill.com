import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Paper } from "@material-ui/core";

interface Founder {
  name: string;
  blurb: string;
}

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "black",
  },
}));

function Card({
  alignLeft,
  founder,
  title,
  children,
}: {
  alignLeft: boolean;
  founder: Founder;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  const classes = useStyles();
  const whichBorder = alignLeft ? "borderRight" : "borderLeft";
  const whichMargin = alignLeft ? "marginRight" : "marginLeft";

  const founderSection = (
    <Grid
      container
      direction="column"
      xs={4}
      style={{
        [whichBorder]: "2px solid gray",
        [whichMargin]: "10px",
        padding: "10px",
      }}
    >
      <h2>{founder.name}</h2>
      <div>{founder.blurb}</div>
    </Grid>
  );

  const textSection = (
    <Grid xs={7} direction="column" style={{ paddingBottom: "20px" }}>
      <h2>{title}</h2>
      {children}
    </Grid>
  );

  return (
    <Paper className={classes.card}>
      <Grid container direction="row">
        {alignLeft ? (
          <React.Fragment>
            {founderSection} {textSection}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {textSection} {founderSection}
          </React.Fragment>
        )}
      </Grid>
    </Paper>
  );
}

export default Card;
