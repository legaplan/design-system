"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Button = ({ text, onPress, color, textColor }) => ((0, jsx_runtime_1.jsx)(styles_1.ButtonContainer, { onPress: onPress, children: (0, jsx_runtime_1.jsx)(styles_1.ButtonText, { children: text }) }));
exports.default = Button;
