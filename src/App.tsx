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
      <Grid item container direction="row" justifyContent="flex-start">
        <p
          style={{
            fontSize: "3rem",
            lineHeight: "0.5rem",
            paddingLeft: "3rem",
          }}
        >
          {emoji.getUnicode("shrimp")}
        </p>
      </Grid>
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
      <Section>
        <p style={{ fontSize: "1.5rem" }}>
          The team here at <strong>6krill&copy;&trade;&reg;</strong> is
          dedicated to making cash and getting earning. Helping our clients make
          money since 1900, we really bring in the big bucks. There is nothing
          that can block the path between a shrimp and the dough.
        </p>

        <p>
          Meet boos. boos is our biggest hitter. As the inventor of the 6krill
          title, boos got ideas. As a Dust II hater, a young producer, and gamer
          on the sticks, boos really stays odd around the hose. boos is valuable
          to 6krill in his sheer unconformity. boos the type of guy to order a
          whole plate of french toast and ask for a box at the same time. boos
          keep it weird.
        </p>

        <p>Meet 2nuts.</p>
        {/* <p>
          Getting money isn't the only thing the shrimp do. With recent
          technological advances in the fields of neuroscience and flatnite,
          6krill provides a frictionless solution to every problem. Whether it be "too much wind power"
        </p> */}
      </Section>
    </Grid>
  );
}

export default App;
