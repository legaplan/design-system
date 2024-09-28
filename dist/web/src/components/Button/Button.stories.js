"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outline = exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
require("./Button.module.scss");
exports.default = {
    title: "Components/Button",
    tags: ["autodocs"],
    component: Button_1.default,
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
const Template = (args) => ((0, jsx_runtime_1.jsx)(Button_1.default, { ...args }));
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
