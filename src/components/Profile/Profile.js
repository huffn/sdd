import React from "react";
import GithubAvatar from "../GithubAvatar/GithubAvatar";
import TopicList from "../TopicList/TopicList";
import returnNewState from "../shared/stateLogic";

const Profile = ({ username, topics = [] }) => {
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
    <>
      <GithubAvatar user={username}></GithubAvatar>
      <h1 className="username">{username}</h1>
      <TopicList
        topics={stateTopics}
        updateSelected={updateSelected}
      ></TopicList>
    </>
  );
};

export default Profile;
