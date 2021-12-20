import React from "react";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Founder {
  name: string;
  blurb: string;
}

interface CardPropsType {
  alignLeft: boolean;
  founder: Founder;
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: "20px",
    boxShadow: `${theme.palette.primary.dark} 5px 5px`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "15px",
  },
  founderSectionWrapper: ({ alignLeft }: { alignLeft: boolean }) => ({
    [alignLeft
      ? "borderRight"
      : "borderLeft"]: `2px solid ${theme.palette.primary.light}`,
    [alignLeft ? "marginRight" : "marginLeft"]: "10px",
    paddingLeft: alignLeft ? "0" : "20px",
  }),
  founderName: {
    color: theme.palette.primary.light,
  },
  textTitle: {
    color: theme.palette.primary.light,
  },
}));

function Card(props: CardPropsType) {
  const { alignLeft, founder, title, children } = props;
  const classes = useStyles(props);

  const founderSection = (
    <Grid
      container
      direction="column"
      xs={4}
      className={classes.founderSectionWrapper}
    >
      <h2 className={classes.founderName}>{founder.name}</h2>
      <div>{founder.blurb}</div>
    </Grid>
  );

  const textSection = (
    <Grid xs={7} direction="column">
      <h2 className={classes.textTitle}>{title}</h2>
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
