import React from "react";
import TopicList from "./TopicList";
import { action } from "@storybook/addon-actions";
import topics from "../shared/topics";

export default {
  title: "Component|Topic List",
  component: TopicList
};

const events = {
  updateSelected: action("Clicked")
};

export const DefaultList = () => (
  <TopicList topics={topics} {...events}></TopicList>
);

export const EmptyList = () => <TopicList topics={[]} {...events}></TopicList>;
