import React, { useState } from "react";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import emoji from "emoji-dictionary";

import Card from "../components/Card";
import Section from "../components/Section";
import ColorFinding from "../components/ColorFinding";
import { makeStyles } from "@mui/styles";
import SnorkelPic from "../images/images.jpeg";

const useStyles = makeStyles((theme: Theme) => ({
  homeWrapper: {
    backgroundColor: theme.palette.secondary.light,
    padding: "5%",
  },
  titleText: {
    fontSize: "2.75rem",
    color: theme.palette.primary.main,
  },
  founderText: {
    color: theme.palette.primary.main,
  },
  creditCardButton: {
    fontSize: "3rem",
    cursor: "pointer",
    borderRadius: "10px",
    border: "1px solid black",
  },
  contentRow: {
    // padding: "2%",
  },
}));

const cakeEmoji = emoji.getUnicode("birthday");
const nutEmoji = emoji.getUnicode("peanuts");
const trainEmoji = emoji.getUnicode("train");

const founders = {
  cake: {
    name: `${cakeEmoji}cake${cakeEmoji}`,
    blurb: `"let me fish" - Douglas, age 50. cake is big. Like big big. cake is astonishingly massive. At this point, 
    it's a hygiene issue. Other interests: snorkling and babes. As the worst member 
    of 6krill, he gets hit. He may not admit it, but he enjoys being hit. little piggie. 
    Other interests: snorkling. `,
  },
  "2nuts": {
    name: `${nutEmoji}2nuts${nutEmoji}`,
    blurb:
      "Ain't shit get past me. Other interests: pulling strings and breathing down necks. ",
  },
  boos: {
    name: `${trainEmoji}boos${trainEmoji}`,
    blurb: `Meet boos. boos is our biggest hitter. Other interests: drinking and hitting. 
      The interns are his favorite. to hit. As the inventor of the 6krill
      title, boos got ideas. As a Dust II hater, a young producer, and
      gamer on the sticks, boos really stays odd around the hose. boos is
      valuable to 6krill in his raw, unapologetic conformity. boos likes french toast but 
      won't eat it all at once. boos keep it weird.`,
  },
  internships: {
    name: "Cash",
    blurb:
      "Here at 6krill, we want your credit card informations and we will do anything to get it. We will also take sentimental items and experiences from you (and NOT give them back). come get cash. Working at 6krill is the opportunity of a lifetime. We require a small deposit, and will charge you for each hour worked until you have nothing. Then we will take your posessions. Add us on linkedin, and see your value rise as high as a bug. ",
  },
};

function randGen() {
  return Math.floor(Math.random() * 1000000);
}

function Home() {
  const classes = useStyles();
  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  const contentDirection = isLargeScreen ? "row" : "column";

  const [creditCardEmoji, setCreditCardEmoji] = useState(
    emoji.getUnicode("neutral_face")
  );

  const smallSize = 4.65;
  const largeSize = 6.75;

  const spacingSize = 3;

  const cursedString = `I don't know who needs to hear this, but ${
    randGen() + "-" + randGen()
  }. And yes, he was watching you.`;

  const coloredCursedString = cursedString
    .split("")
    .map((char) => (
      <span style={{ color: Math.random() < 0.3 ? "red" : "black" }}>
        {char}
      </span>
    ));

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.homeWrapper}
    >
      <Section>
        <h1 className={classes.titleText}>
          {emoji.getUnicode("shrimp")}
          Meet the <s>founders</s> krill
          {emoji.getUnicode("shrimp")}
        </h1>
      </Section>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        xs={12}
        lg={9}
        spacing={spacingSize}
      >
        <Section>
          <h2 className={classes.founderText}>{founders.cake.name}</h2>
          <h2 className={classes.founderText}>{founders["2nuts"].name}</h2>
          <h2 className={classes.founderText}>{founders.boos.name}</h2>
        </Section>

        <Grid
          item
          container
          direction={contentDirection}
          justifyContent="space-around"
          alignItems="space-around"
          className={classes.contentRow}
          spacing={spacingSize}
        >
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

        <Grid
          item
          container
          direction={contentDirection}
          className={classes.contentRow}
          justifyContent="space-around"
          spacing={spacingSize}
        >
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
              socks. DM me for pricing. Steroids optional, chemtrails required.
            </p>
          </Card>
          <Card size={smallSize}>
            <h2>Meet {founders["2nuts"].name}</h2>
            <p>{founders["2nuts"].blurb}</p>
          </Card>
        </Grid>

        <Grid
          item
          container
          direction={contentDirection}
          justifyContent="space-around"
          className={classes.contentRow}
          spacing={spacingSize}
        >
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

        <Grid
          item
          container
          direction={contentDirection}
          justifyContent="space-around"
          className={classes.contentRow}
          spacing={spacingSize}
        >
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

        <Grid
          item
          container
          direction={contentDirection}
          justifyContent="space-around"
          className={classes.contentRow}
          spacing={spacingSize}
        >
          <Card size={smallSize}>
            <h2>Findings and hypotheses</h2>
            <ColorFinding color={"#A239CA"} />
            <ColorFinding color={"#B54F55"} />
            <ColorFinding color={"#FC030F"} />
            <ColorFinding color={"#79A307"} />
            <ColorFinding color={"#DAED12"} />
            <ColorFinding color={"#133769"} />
            <p>
              I personally believe that snorkels could be way longer. I'm talkin
              10, 20, 50 feet in length. A couple in girth. If I don't feel like
              I'm drinking ocean boba, it ain't snorkeling. Please make it
              happen. Try it with PVC pipe?
            </p>
            <img src={SnorkelPic} width="50" height="50" />
          </Card>
          <Card size={largeSize}>
            <h2> Quotes to live by </h2>
            <p>"I be starin at shrimps" - cake, on why he snorkels</p>
            <p>"Ain't shit get past me." - 2nuts, constantly</p>
            <p>
              "Could I get a plate of french toast. But you know, just to nibble
              on? Just to take a couple bites? I just wanna taste it. Can I get
              a box with that also? I know its weird to ask but I just know I'm
              not going to finish these. They really are just for nibbling. I
              like french toast. Don't tell me I don't. I really do. It's just
              I'm not all that hungry. To be honest, my appetite was ruined
              earlier today. I saw this intern hit cake. Awesome. " - boos, at
              breakfast time
            </p>
          </Card>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Grid
          item
          container
          direction={contentDirection}
          justifyContent="space-around"
          className={classes.contentRow}
          spacing={spacingSize}
        >
          <div style={{ fontSize: "1.25rem", fontFamily: "initial" }}>
            <p>{coloredCursedString}</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
