"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgePadding = void 0;
const PADDING = {
    1: (theme) => `${theme.spaces.nano} ${theme.spaces[1]}`,
    2: (theme) => `${theme.spaces.nano} 10px`,
    3: (theme) => `${theme.spaces.micro} ${theme.spaces["1_5"]}`,
};
const getBadgePadding = (size, theme) => {
    return PADDING[size](theme);
};
exports.getBadgePadding = getBadgePadding;
