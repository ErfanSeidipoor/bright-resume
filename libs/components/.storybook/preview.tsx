import React from "react";
import { Preview } from "@storybook/react";

import { ThemeProvider } from "../src/lib/Theme";
import "../../theme/_index.scss";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
