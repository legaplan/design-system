"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const FormField = ({ children }) => {
    return (0, jsx_runtime_1.jsx)(styles_1.FieldContainer, { children: children });
};
exports.FormField = FormField;
