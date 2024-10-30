"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BaseText_1 = __importDefault(require("../../../BaseText"));
const Label = ({ children, isRequired }) => {
    return ((0, jsx_runtime_1.jsxs)(BaseText_1.default, { color: "secondary", weight: "medium", children: [children, isRequired && ((0, jsx_runtime_1.jsxs)(BaseText_1.default, { color: "brand_tertiary", weight: "medium", children: [" ", "*"] }))] }));
};
exports.default = Label;
