import React from "react";

const TopicChoice = ({ title, state, _id = 1, updateSelected }) => {
  return (
    <div className="topic" _id={_id}>
      <div
        className={`dead icon ${state === "DEAD" ? "selected" : ""}`}
        onClick={updateSelected}
      ></div>
      <div className="title" title={title}>
        {title}
      </div>
      <div
        className={`alive icon ${state === "ALIVE" ? "selected" : ""}`}
        onClick={updateSelected}
      ></div>
    </div>
  );
};

export default TopicChoice;
