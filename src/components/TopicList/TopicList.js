import React from "react";
import TopicChoice from "../TopicChoice/TopicChoice";

const TopicList = ({ topics = [], updateSelected }) => {
  const events = {
    updateSelected
  };
  if (topics.length === 0) {
    return <div className="topic-list empty">No Topics</div>;
  } else {
    return (
      <div className="topic-list">
        {topics.map((topic, i) => {
          const id = topic.id || i;
          return (
            <TopicChoice
              key={id}
              _id={id}
              title={topic.title}
              state={topic.state}
              {...events}
            ></TopicChoice>
          );
        })}
      </div>
    );
  }
};

export default TopicList;
