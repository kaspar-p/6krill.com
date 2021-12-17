import React from "react";
import Section from "./Section";
import Grid from "@material-ui/core/Grid";
import emoji from "emoji-dictionary";

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
    </Grid>
  );
}

export default App;
