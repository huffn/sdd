import React from "react";
import TopicChoice from "./TopicChoice";
import { action } from "@storybook/addon-actions";

export default {
  title: "Component|Topic Choice",
  component: TopicChoice
};
const basicTitle = "Between every two pines is a doorway to a new world.";
const longTitle =
  "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.";

const actions = {
  updateSelected: action("Clicked")
};

export const DefaultTopicChoice = () => (
  <TopicChoice title={basicTitle} {...actions}></TopicChoice>
);

export const PositiveTopicChoice = () => (
  <TopicChoice title={basicTitle} state="ALIVE" {...actions}></TopicChoice>
);

export const NegativeTopicChoice = () => (
  <TopicChoice title={basicTitle} state="DEAD" {...actions}></TopicChoice>
);

export const OverflowingTitle = () => (
  <TopicChoice title={longTitle} {...actions}></TopicChoice>
);
