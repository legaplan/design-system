"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ComponentPropsProvider_1 = require("../../../../providers/ComponentPropsProvider");
const styles_1 = require("./styles");
const BadgeText = ({ children }) => {
    const { color, textSize } = (0, ComponentPropsProvider_1.useComponentProps)();
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledBadgeText, { size: textSize, badgeColor: color, children: children }));
};
exports.default = BadgeText;
