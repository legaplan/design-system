import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { Badge, BadgeProps } from ".";
import { View } from "react-native";
import { useTheme } from "../../providers/ThemeProvider";
import { BaseText } from "../BaseText";
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
      const { toggleTheme, theme } = useTheme();

      return (
        <View style={{ gap: 16 }}>
          <Button onPress={toggleTheme}>
            <BaseText color="white">Toggle theme - {theme}</BaseText>
          </Button>

          <Story />
        </View>
      );
    },
  ],
};
