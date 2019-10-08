import React from "react";
import SwipeCard from "./SwipeCard";
import { withKnobs } from "@storybook/addon-knobs";
import profiles, { singleProfile } from "../shared/profiles";

export default {
  title: "Component|SwipeableCard",
  component: SwipeCard,
  decorators: [
    storyFn => (
      <div style={{ height: "500px", width: "362px", margin: "auto" }}>
        {storyFn()}
      </div>
    ),
    withKnobs
  ]
};

export const DefaultCard = () => <SwipeCard {...singleProfile}></SwipeCard>;

export const MultipleCards = () => (
  <>
    {profiles.map((profile, i) => (
      <SwipeCard key={i} {...profile} addTilt></SwipeCard>
    ))}
  </>
);
