import { Meta, StoryObj } from "@storybook/react";
import Icon, { IconProps } from ".";

const meta = {
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "alert-circle",
  },
};
