import React from "react";
import missingImage from "../../../public/missingThumbnail.jpg";

const GithubAvatar = ({ user }) => {
  return user ? (
    <img
      src={`https://github.com/${user}.png`}
      className="avatar"
      alt={`${user}'s avatar`}
      onError={evt => {
        evt.currentTarget.src = missingImage;
        evt.currentTarget.alt = "No avatar found";
      }}
    />
  ) : (
    <div className="avatar noAvatar"></div>
  );
};

export default GithubAvatar;
