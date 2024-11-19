import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";
import React from "react";
import { BaseText } from "../BaseText";
import { View } from "react-native";

const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <View style={{ maxWidth: 153 }}>
        <Story />
      </View>
    ),
  ],
} as Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <BaseText color="white" weight="semibold">
        Default Button
      </BaseText>
    ),
  },
};

export const SecondaryGray: Story = {
  args: {
    variant: "secondary",
    children: (
      <BaseText color="secondary" weight="semibold">
        Default Button
      </BaseText>
    ),
  },
};
