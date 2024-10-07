"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const theme_1 = require("../../constants/theme");
const sizes = {
    1: {
        width: theme_1.DEFAULT_THEME.spaces[2],
        height: theme_1.DEFAULT_THEME.spaces[2],
    },
    2: {
        width: "20px",
        height: "20px",
    },
    3: {
        width: theme_1.DEFAULT_THEME.spaces[3],
        height: theme_1.DEFAULT_THEME.spaces[3],
    },
};
exports.IconContainer = native_1.default.View `
  width: ${({ size }) => sizes[size].width};
  height: ${({ size }) => sizes[size].height};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
`;
