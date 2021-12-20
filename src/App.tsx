import React from "react";
import Section from "./Section";
import Grid from "@material-ui/core/Grid";
import emoji from "emoji-dictionary";
import Button from "@material-ui/core/Button"


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
    >
      <Section>
        <h1>
          Meet the <s>founders</s> shrimp
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



      <div>
        <h1> How we do it </h1>
        <Button variant = "outlined" className="btn btn-dark">PRESS RELEASE</Button>
        <p>
        At wyayouat.com, we are committed to utilizing the power of blockchain technology.
        With advanced machine learning algorithms harnessing ECC, TDA, ECC, bio-machine interfaces, cybernetics, post quantum cryptography we make the most sustainable product on the planet. Our decentralized cryptosystems and blockchains are international,
         and we share in the needs of our multlingual conglomorate allies in standing against global.

        We also sell used socks. DM me for pricing. Steroids optional.
        </p>
      </div>
    </Grid>





  );
}

export default App;
