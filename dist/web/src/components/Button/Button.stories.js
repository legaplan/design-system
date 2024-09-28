"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outline = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
require("./Button.module.scss");
exports.default = {
    title: "Components/Button",
    tags: ["autodocs"],
    component: _1.Button,
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
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(_1.Button, { ...args }));
exports.Default = Template.bind({});
exports.Default.args = {
    children: "Button",
    size: 3,
    variant: "default",
};
exports.Outline = Template.bind({});
exports.Outline.args = {
    children: "Button",
    size: 2,
    variant: "outline",
};
