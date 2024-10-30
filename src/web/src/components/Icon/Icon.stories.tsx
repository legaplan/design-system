import React from "react";

import { Icon, IconProps, IconsKey } from ".";
import "./Icon.module.scss";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Icon",
  tags: ["autodocs"],
  component: Icon,
  argTypes: {
    size: {
      control: { type: "select" },
      options: [1, 2, 3],
      description: "Tamanho do ícone",
    },
    name: {
      control: { type: "select" },
      options: [
        "bar-chart-square-02",
        "users-01",
        "chevron-down",
        "log-out-01",
        "search",
        "check-circle",
      ],
      description: "Nome do ícone",
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args: IconProps) => <Icon {...args} />;

export const BarChartSquare02 = Template.bind({});
BarChartSquare02.args = {
  size: 2,
  name: "bar-chart-square-02",
};

export const Users01 = Template.bind({});
Users01.args = {
  size: 2,
  name: "users-01",
};

export const ChevronDown = Template.bind({});
ChevronDown.args = {
  size: 2,
  name: "chevron-down",
};

export const LogOut01 = Template.bind({});
LogOut01.args = {
  size: 3,
  name: "log-out-01",
};

export const Search = Template.bind({});
Search.args = {
  size: 2,
  name: "search",
};

export const CheckCircle = Template.bind({});
CheckCircle.args = {
  size: 2,
  name: "check-circle",
};
