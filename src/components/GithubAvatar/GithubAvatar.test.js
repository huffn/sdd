import React from "react";
import ReactDOM from "react-dom";
import { BasicAvatar, EmptyAvatar } from "./GithubAvatar.stories";

it("renders with github profile", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BasicAvatar />, div);
  const avatar = div.children[0];
  expect(avatar.alt).toEqual("huffn's avatar");
  expect(avatar.src).toEqual("https://github.com/huffn.png");
  ReactDOM.unmountComponentAtNode(div);
});

it("handles no username", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmptyAvatar />, div);
  const avatar = div.children[0];
  expect(avatar.classList).toContain("noAvatar");
  ReactDOM.unmountComponentAtNode(div);
});
