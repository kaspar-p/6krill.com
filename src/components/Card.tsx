import React from "react";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Founder {
  name: string;
  blurb: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: "20px",
    boxShadow: "200",
    backgroundColor: theme.palette.primary.main,
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
    <div className={classes.card}>
      <Grid container direction="row">
        {alignLeft ? (
          <>
            {founderSection} {textSection}
          </>
        ) : (
          <>
            {textSection} {founderSection}
          </>
        )}
      </Grid>
    </div>
  );
}

export default Card;
