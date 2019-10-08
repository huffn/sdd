import React from "react";
import Profile from "./Profile";
import { text, withKnobs } from "@storybook/addon-knobs";
import topics from "../shared/topics";

export default {
  title: "Screen|Profile",
  component: Profile,
  decorators: [withKnobs]
};

export const ProfilePage = () => (
  <Profile
    username={text("Username", "huffn", "basic")}
    topics={topics}
  ></Profile>
);
