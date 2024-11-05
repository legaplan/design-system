"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const getIconSizes = (iconSize, theme) => {
    const sizes = {
        1: {
            width: theme.space[4],
            height: theme.space[4],
        },
        2: {
            width: theme.space[5],
            height: theme.space[5],
        },
        3: {
            width: theme.space[6],
            height: theme.space[6],
        },
    };
    return sizes[iconSize] || sizes[1];
};
exports.IconContainer = native_1.default.View `
  width: ${({ size, theme }) => getIconSizes(size, theme).width};
  height: ${({ size, theme }) => getIconSizes(size, theme).height};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
`;
