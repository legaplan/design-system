import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Badge, { BadgeProps } from ".";
import { Button } from "react-native";
import { useTheme } from "../../providers/ThemeProvider";
const meta = {
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "gray",
    children: (
      <>
        <Badge.Icon name="chevron-down" />
        <Badge.Text>texto padrão</Badge.Text>
      </>
    ),
  },
  decorators: [
    (Story) => {
      const { toggleTheme } = useTheme();
      return (
        <>
          <Button title="Toggle Theme" onPress={toggleTheme} />
          <Story />
        </>
      );
    },
  ],
};
