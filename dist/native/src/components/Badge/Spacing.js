"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgePadding = void 0;
const PADDING = {
    1: (theme) => `${theme.space[0.5]} ${theme.space[2]}`,
    2: (theme) => `${theme.space[0.5]} ${theme.space[2.5]}`,
    3: (theme) => `${theme.space[1]} ${theme.space[3]}`,
};
const getBadgePadding = (size, theme) => {
    return PADDING[size](theme);
};
exports.getBadgePadding = getBadgePadding;
