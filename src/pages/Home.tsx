import React, { useState } from "react";
import { Button, Grid, Theme } from "@mui/material";
import emoji from "emoji-dictionary";

import Card from "../components/Card";
import Section from "../components/Section";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  homeWrapper: {
    padding: "20px",
    backgroundColor: theme.palette.secondary.light,
  },
  titleText: {
    color: theme.palette.primary.main,
  },
  creditCardButton: {
    fontSize: "3rem",
    cursor: "pointer",
    borderRadius: "10px",
    border: "1px solid black",
  },
}));

const cakeEmoji = emoji.getUnicode("birthday");
const nutEmoji = emoji.getUnicode("peanuts");
const trainEmoji = emoji.getUnicode("train");

const founders = {
  cake: {
    name: `${cakeEmoji}cake${cakeEmoji}`,
    blurb: "something",
  },
  "2nuts": {
    name: `${nutEmoji}2nuts${nutEmoji}`,
    blurb: "something else",
  },
  boos: {
    name: `${trainEmoji}boos${trainEmoji}`,
    blurb: `Meet boos. boos is our biggest hitter. As the inventor of the 6krill
      title, boos got ideas. As a Dust II hater, a young producer, and
      gamer on the sticks, boos really stays odd around the hose. boos is
      valuable to 6krill in his sheer unconformity. boos the type of guy
      to order a whole plate of french toast and ask for a box at the same
      time. boos keep it weird.`,
  },
  internships: {
    name: "Cash",
    blurb:
      "Here at 6krill, we want your credit card informations and we will do anything to get it. We will also take sentimental items and experiences from you (and NOT give them back). come get cash. Working at 6krill is the opportunity of a lifetime. We require a small deposit, and will charge you for each hour worked until you have nothing. Then we will take your posessions. Add us on linkedin, and see your value rise as high as a bug. ",
  },
};

function Home() {
  const classes = useStyles();

  const [creditCardEmoji, setCreditCardEmoji] = useState(
    emoji.getUnicode("neutral_face")
  );

  const smallSize = 4.65;
  const largeSize = 6.75;

  const spacingSize = 3;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.homeWrapper}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={8}
        spacing={spacingSize}
      >
        <Section>
          <h1 className={classes.titleText}>
            {emoji.getUnicode("shrimp")}
            Meet the <s>founders</s> shrimp
            {emoji.getUnicode("shrimp")}
          </h1>
        </Section>
        <Section>
          <h1 className={classes.titleText}>{founders.cake.name}</h1>
          <h1 className={classes.titleText}>{founders["2nuts"].name}</h1>
          <h1 className={classes.titleText}>{founders.boos.name}</h1>
        </Section>

        <Grid item container direction="row" justifyContent="space-around">
          <Card size={smallSize}>
            <h2>Meet {founders.cake.name}</h2>
            <p>{founders.cake.blurb}</p>
          </Card>
          <Card size={largeSize}>
            <h2> About us</h2>
            <p>
              The team here at <strong>6krill&copy;&trade;&reg;</strong> is
              dedicated to making cash and getting earning. Helping our clients
              make money since 1900, we really bring in the big bucks. There is
              nothing that can block the path between a shrimp and the dough.
            </p>
          </Card>
        </Grid>

        <Grid item container direction="row" justifyContent="space-around">
          <Card size={largeSize}>
            <h2> How we do it </h2>
            <p>
              At wyayouat.com, we are committed to utilizing the power of
              blockchain technology. With advanced machine learning algorithms
              harnessing ECC, TDA, ECC, bio-machine interfaces, cybernetics,
              post quantum cryptography we make the most sustainable product on
              the planet. Our decentralized cryptosystems and blockchains are
              international, and we share in the needs of our multilingual
              conglomerate allies in standing against global. We also sell used
              socks. DM me for pricing. Steroids optional.{" "}
            </p>
          </Card>
          <Card size={smallSize}>
            <h2>Meet {founders["2nuts"].name}</h2>
            <p>{founders["2nuts"].blurb}</p>
          </Card>
        </Grid>

        <Grid item container direction="row" justifyContent="space-around">
          <Card size={smallSize}>
            <h2>Meet {founders.boos.name}</h2>
            <p>{founders.boos.blurb}</p>
          </Card>
          <Card size={largeSize}>
            <h2> CREDIT CARD </h2>
            <p>OR DEBIT CARD</p>
            <input
              id="ccn"
              type="tel"
              inputMode="numeric"
              pattern="[0-9\s]{13,19}"
              autoComplete="cc-number"
              maxLength={19}
              placeholder="xxxx xxxx xxxx xxxx"
            ></input>
            EXPIRATION
            <input
              id="ccn"
              type="expite"
              inputMode="numeric"
              pattern="[0-3\s]{3,4s}"
              maxLength={3}
              placeholder="xx xx"
            ></input>
            CVV
            <input
              id="ccn"
              type="expite"
              inputMode="numeric"
              pattern="[0-3\s]{3,4s}"
              maxLength={3}
              placeholder="xxx"
            ></input>
            <button
              onMouseLeave={() => {
                setCreditCardEmoji(emoji.getUnicode("neutral_face"));
              }}
              onMouseEnter={() => {
                setCreditCardEmoji(emoji.getUnicode("open_mouth"));
              }}
              onClick={() => {
                setCreditCardEmoji(emoji.getUnicode("tired_face"));
              }}
              className={classes.creditCardButton}
            >
              ENTER {creditCardEmoji}
            </button>
          </Card>
        </Grid>

        <Grid item container direction="row" justifyContent="space-around">
          <Card size={largeSize}>
            <h2>{founders.internships.name}</h2>
            <p>{founders.internships.blurb}</p>
          </Card>
          <Card size={smallSize}>
            <h2>Internships</h2>
            <p>
              Input your contact info here to learn how to earn the 6krill way.
              We have synergy. Also, we don't owe you anything, so that is.
              Spyware. We have darkmode and light mode at the same time and they
              alternate very fast. Please stay on this website for a very long
              time. And also say hello to the papers because we are
              internationally known for our skills. I'm feeling generous, so no
              lunch breaks.
            </p>
            <p></p>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
