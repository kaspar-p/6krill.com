import React, { ReactNode } from "react";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface CardPropsType {
  size: number;
  children: ReactNode[];
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    boxShadow: `${theme.palette.primary.dark} 5px 5px`,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "15px",
    padding: "5%",
    height: "100%",
  },
  founderSectionWrapper: {},
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
    <Grid item xs={size}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        className={classes.card + " " + classes.mainText}
      >
        {children.map((child) => (
          <Grid item> {child} </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Card;
