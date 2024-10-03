import React from "react";
import { TextProps } from "./types";
import { Meta, StoryFn } from "@storybook/react";
import Text from ".";

export default {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "white",
        "gray",
        "primary",
        "secondary",
        "tertiary",
        "quaternary",
        "default",
        "error",
        "success",
        "disabled",
        "brand_primary",
        "brand_secondary",
        "brand_tertiary",
      ],
      description: "Define a cor do texto",
      table: {
        type: { summary: "keyof CustomTextStyles['color']" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "default"],
      description: "Define o tamanho do texto",
      table: {
        type: { summary: "keyof CustomTextStyles['size']" },
        defaultValue: { summary: "md" },
      },
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold", "default"],
      description: "Defines o font weight do texto",
      table: {
        type: { summary: "keyof CustomTextStyles['weight']" },
        defaultValue: { summary: "regular" },
      },
    },
    children: {
      control: "text",
      description: "Conteúdo",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Texto de exemplo",
  color: "default",
  size: "md",
  weight: "regular",
};
