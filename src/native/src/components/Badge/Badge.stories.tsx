import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Badge, { BadgeProps } from ".";
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
};
