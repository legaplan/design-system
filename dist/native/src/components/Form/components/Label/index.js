"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BaseText_1 = require("../../../BaseText");
const Label = ({ children, isRequired }) => {
    return ((0, jsx_runtime_1.jsxs)(BaseText_1.BaseText, { color: "secondary", weight: "medium", children: [children, isRequired && ((0, jsx_runtime_1.jsxs)(BaseText_1.BaseText, { color: "brand_tertiary", weight: "medium", children: [" ", "*"] }))] }));
};
exports.Label = Label;
