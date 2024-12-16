import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/providers/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
        <SafeAreaProvider>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </SafeAreaProvider>
      );
    },
  ],
};

export default preview;
