import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { Toggle, ToggleProps } from ".";
import { Button, Switch } from "react-native";
import { useTheme } from "../../providers/ThemeProvider";
const meta = {
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<ToggleProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'sm',
    value: true,
  },
  decorators: [
    (Story) => {
      const { toggleTheme, theme } = useTheme();

      return (
        <>
          <Button title={`Toggle theme - ${theme}`} onPress={toggleTheme} />
          <Story />
        </>
      );
    },
  ],
};
