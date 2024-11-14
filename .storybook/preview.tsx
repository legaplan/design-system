import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/providers/ThemeProvider";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
