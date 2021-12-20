import React, { ReactNode } from "react";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface CardPropsType {
  size: number;
  children: ReactNode[];
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    padding: "20px",
    boxShadow: `${theme.palette.primary.dark} 5px 5px`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "15px",
  },
  founderSectionWrapper: {
    margin: "10px 0",
  },
  founderName: {
    color: theme.palette.secondary.light,
  },
  textTitle: {
    color: theme.palette.secondary.light,
  },
  mainText: {
    color: theme.palette.secondary.dark,
  },
}));

function Card(props: CardPropsType) {
  const { children, size } = props;
  const classes = useStyles();

  return (
    <Grid
      item
      container
      direction="column"
      xs={size}
      className={classes.card + " " + classes.mainText}
    >
      {children}
    </Grid>
  );
}

export default Card;
