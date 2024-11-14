import { Meta, StoryFn } from "@storybook/react";
import { Button } from ".";
import React from "react";

export default {
  title: "components/Button",
  component: Button,
} as Meta<typeof Button>;

export const Basic: StoryFn<typeof Button> = (args: any) => (
  <Button {...args} />
);

Basic.args = {
  text: "Hello World",
  color: "purple",
};
