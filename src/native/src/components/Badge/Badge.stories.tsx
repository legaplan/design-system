import { Meta, StoryObj } from "@storybook/react";
import Badge, { BadgeProps } from ".";
import Text from "../Text";
import React from "react";

const meta = {
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<BadgeProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "brand",
    label: "Default text",
  },
};
