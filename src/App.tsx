import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Card from "./Card";
import Section from "./Section";

import emoji from "emoji-dictionary";

const founders = {
  cake: {
    name: "cake",
    blurb: "Cake the sort of dude to show up at your house breathing heavy with an otter. He also big. Like really big. I think that's why he breathe heavy. A born innovator, cake knows how to get earning. "
  },
  "2nuts": {
    name: "2nuts",
    blurb: "you might be working but are you 6krill working?",
  },
  boos: {
    name: "boos",
    blurb: `Meet boos. boos is our biggest hitter. As the inventor of the 6krill
    title, boos got ideas. As a Dust II hater, a young producer, and
    gamer on the sticks, boos really stays odd around the hose. boos is
    valuable to 6krill in his sheer unconformity. boos the type of guy
    to order a whole plate of french toast and ask for a box at the same
    time. boos keep it weird.`,
  },
  internships: {
    name: "Cash",
    blurb: `come get cash. Working at 6krill is the opportunity of a lifetime. We require a small deposit, and will charge you for each hour worked until you have nothing. Then we will take your posessions. Add us on linkedin, and see your value rise as high as a bug. `,
  },
};

function App() {
  const cakeEmoji = emoji.getUnicode("birthday");
  const nutEmoji = emoji.getUnicode("peanuts");
  const trainEmoji = emoji.getUnicode("train");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        paddingTop: "20px",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={8}
      >
        <Section>
          <h1>
            {emoji.getUnicode("shrimp")}
            Meet the <s>founders</s> shrimp
            {emoji.getUnicode("shrimp")}
          </h1>
        </Section>
        <Section>
          <h1>
            {cakeEmoji}
            cake
            {cakeEmoji}
          </h1>
          <h1>
            {nutEmoji}2nuts{nutEmoji}
          </h1>
          <h1>
            {trainEmoji}boos{trainEmoji}
          </h1>
        </Section>
        <Card alignLeft={true} title="About us" founder={founders.cake}>
          The team here at <strong>6krill&copy;&trade;&reg;</strong> is
          dedicated to making cash and getting earning. Helping our clients make
          money since 1900, we really bring in the big bucks. There is nothing
          that can block the path between a shrimp and the dough.
        </Card>
        <br />
        <Card
          alignLeft={false}
          title="How we do it"
          founder={founders["2nuts"]}
        >
          At wyayouat.com, we are committed to utilizing the power of blockchain
          technology. With advanced machine learning algorithms harnessing ECC,
          TDA, ECC, bio-machine interfaces, cybernetics, post quantum
          cryptography we make the most sustainable product on the planet. Our
          decentralized cryptosystems and blockchains are international, and we
          share in the needs of our multilingual conglomerate allies in standing
          against global. We also sell used socks. DM me for pricing. Steroids
          optional.
        </Card>
        <br />
        // kaspar did not write any of this code
        <Card alignLeft={true} title="Infinite Money Generator" founder={founders.boos}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={8}
        >


          CREDIT CARD
          <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength={19} placeholder="xxxx xxxx xxxx xxxx">
          </input>
          EXPIRATION
          <input id="ccn" type="expite" inputMode="numeric" pattern="[0-3\s]{3,4s}" maxLength={3} placeholder="xx xx">
          </input>
          CVV
          <input id="ccn" type="expite" inputMode="numeric" pattern="[0-3\s]{3,4s}" maxLength={3} placeholder="xxx">
          </input>
          </Grid>
        </Card>

        <br />

        <Card alignLeft={false} title="Internships" founder={founders.internships}>
        <br />
          Input your contact info here to learn how to earn the 6krill way babyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
        </Card>

      </Grid>
    </Grid>
  );
}

export default App;
