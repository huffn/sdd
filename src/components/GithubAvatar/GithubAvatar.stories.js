import React from "react";
import Avatar from "./GithubAvatar";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Component|Github Avatar",
  component: Avatar,
  decorators: [withKnobs]
};

export const BasicAvatar = () => (
  <Avatar user={text("Username", "huffn", "basic")}></Avatar>
);

export const NoAvatarFound = () => <Avatar user="mosesdawson"></Avatar>;

export const EmptyAvatar = () => <Avatar user=""></Avatar>;
