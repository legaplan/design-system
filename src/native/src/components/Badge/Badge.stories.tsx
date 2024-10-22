import { Meta, StoryObj } from "@storybook/react";
import Text from "../Text";
import React from "react";
import { BadgeProps } from "./components/BadgeContainer";
import { Badge } from ".";
const meta = {
  component: Badge.Container,
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
};
