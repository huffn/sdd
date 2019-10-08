import React from "react";
import TopicList from "./TopicList";
import { action } from "@storybook/addon-actions";
import topics from "../shared/topics";
import returnNewState from "../shared/stateLogic";

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

export const ListWithState = () => {
  const [stateTopics, updateState] = React.useState(topics);
  const updateSelected = ({ currentTarget }) => {
    const id = parseInt(currentTarget.parentElement.getAttribute("_id"), 10);
    const foundIndex = stateTopics.findIndex(topic => topic.id === id);
    const newState = returnNewState(
      currentTarget,
      stateTopics[foundIndex].state
    );
    updateState(
      stateTopics.map(topic =>
        topic.id === id ? { ...topic, state: newState } : topic
      )
    );
  };
  return (
    <TopicList topics={stateTopics} updateSelected={updateSelected}></TopicList>
  );
};
