"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = require("styled-components/native");
const BaseIcon_1 = require("../../../BaseIcon");
const Colors_1 = require("../../Colors");
const ComponentPropsProvider_1 = require("../../../../providers/ComponentPropsProvider");
const Icon = ({ name }) => {
    const theme = (0, native_1.useTheme)();
    const { color, isOutline } = (0, ComponentPropsProvider_1.useComponentProps)();
    const iconColor = (0, Colors_1.getBadgeColors)(color, theme, isOutline).icon;
    return (0, jsx_runtime_1.jsx)(BaseIcon_1.BaseIcon, { color: iconColor, size: 1, name: name });
};
exports.default = Icon;
