"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("./components/Icon"));
const Text_1 = __importDefault(require("./components/Text"));
const ComponentPropsProvider_1 = require("../../providers/ComponentPropsProvider");
const styles_1 = require("./styles");
const Badge = ({ color, children, size = 2, variant = "fill", }) => {
    const textSize = size === 1 ? "xs" : "sm";
    const isOutline = variant === "outline";
    return ((0, jsx_runtime_1.jsx)(ComponentPropsProvider_1.ComponentPropsProvider, { value: { color, textSize, isOutline }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(styles_1.Container, { color: color, size: size, variant: variant, children: children }) }) }));
};
exports.Badge = Badge;
exports.Badge.Icon = Icon_1.default;
exports.Badge.Text = Text_1.default;
