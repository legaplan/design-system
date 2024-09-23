import React from "react";
import Button, { ButtonProps } from "./Button";
import "./Button.module.scss"; // Certifique-se de importar o estilo
import { Meta, StoryFn } from "@storybook/react/*";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [1, 2, 3],
      description: "Tamanho do botão",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outline", "transparent", "danger"],
      description: "Variante do botão",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Desativa o botão",
    },
    children: {
      control: { type: "text" },
      description: "Texto ou conteúdo do botão",
    },
  },
} as Meta<typeof Button>;

// Template base para todas as variações do botão
const Template: StoryFn<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

// Histórias do botão
export const Default = Template.bind({});
Default.args = {
  children: "Button", // Texto padrão do botão
  size: 3,
  variant: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Button",
  size: 2,
  variant: "outline",
};

export const Transparent = Template.bind({});
Transparent.args = {
  children: "Button",
  size: 1,
  variant: "transparent",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Delete",
  size: 3,
  variant: "danger",
  disabled: false,
};
