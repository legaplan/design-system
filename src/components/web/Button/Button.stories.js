"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Danger = exports.Transparent = exports.Outline = exports.Default = void 0;
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
require("./Button.module.scss"); // Certifique-se de importar o estilo
exports.default = {
    title: "Components/Button",
    tags: ["autodocs"],
    component: Button_1.default,
    argTypes: {
        size: {
            control: { type: "select" },
            options: [1, 2, 3], // Opções de tamanho para o botão
            description: "Tamanho do botão",
        },
        variant: {
            control: { type: "select" },
            options: ["default", "outline", "transparent", "danger"], // Variantes do botão
            description: "Estilo do botão",
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
// Template base para todas as variações do botão
const Template = (args) => (react_1.default.createElement(Button_1.default, { ...args }));
// Histórias do botão
exports.Default = Template.bind({});
exports.Default.args = {
    children: "Button", // Texto padrão do botão
    size: 3,
    variant: "default",
};
exports.Outline = Template.bind({});
exports.Outline.args = {
    children: "Button",
    size: 2,
    variant: "outline",
};
exports.Transparent = Template.bind({});
exports.Transparent.args = {
    children: "Button",
    size: 1,
    variant: "transparent",
};
exports.Danger = Template.bind({});
exports.Danger.args = {
    children: "Delete",
    size: 3,
    variant: "danger",
    disabled: false,
};
