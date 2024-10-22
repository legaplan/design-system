"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
const ComponentPropsProvider_1 = require("../../../../providers/ComponentPropsProvider");
const BadgeContainer = ({ color, children, size = 2, variant = "fill", }) => {
    const textSize = size === 1 ? "xs" : "sm";
    const isOutline = variant === "outline";
    return ((0, jsx_runtime_1.jsx)(ComponentPropsProvider_1.ComponentPropsProvider, { value: { color, textSize, isOutline }, children: (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(styles_1.Container, { color: color, size: size, variant: variant, children: children }) }) }));
};
exports.default = BadgeContainer;
