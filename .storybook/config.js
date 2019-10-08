import { addDecorator, configure } from "@storybook/react";
import React from "react";

import "../src/index.css";

const centerDecorator = storyFn => (
  <div style={{ width: "700px", margin: "20px auto" }}>{storyFn()}</div>
);

addDecorator(centerDecorator);
// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.(js|mdx)$/), module);
