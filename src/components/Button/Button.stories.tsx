import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: { autodocs: true },
  },
  decorators: [
    (Story) => (
      <View style={{ width: "fit-content" } as unknown as StyleProp<ViewStyle>}>
        <Story />
      </View>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "secondary-color",
        "tertiary-color",
      ],
      description: "Define o estilo do botão.",
    },
    disabled: {
      control: {
        type: "radio",
      },
      options: [true, false],
    },
    size: {
      control: {
        type: "select",
      },
      options: [1, 2, 3, 4, 5],
      description: "Tamanho do botão.",
    },
    children: {
      control: {
        type: "text",
      },
      description: "Texto ou elementos filhos do botão.",
    },
    onPress: {
      action: "onPress",
      description: "Função chamada ao clicar no botão.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button.Text>Default Button</Button.Text>,
  },
};

export const SecondaryGray: Story = {
  args: {
    variant: "secondary",
    children: <Button.Text>Default Button</Button.Text>,
  },
};

export const SecondaryColor: Story = {
  args: {
    variant: "secondary-color",
    children: <Button.Text>Default Button</Button.Text>,
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: (
      <>
        <Button.Text>Tertiary Button</Button.Text>
      </>
    ),
  },
};

export const TertiaryColor: Story = {
  args: {
    variant: "tertiary-color",
    children: <Button.Text>Tertiary Button</Button.Text>,
  },
};
