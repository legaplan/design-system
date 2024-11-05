"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const Colors_1 = require("./Colors");
const Spacing_1 = require("./Spacing");
exports.Container = native_1.default.View `
  border-radius: 9999px;

  border-width: ${({ variant }) => (variant === "outline" ? "1.5px" : "1px")};

  padding: ${({ size, theme }) => (0, Spacing_1.getBadgePadding)(size, theme)};
  border-style: solid;
  border-color: ${({ color, theme, variant }) => (0, Colors_1.getBadgeColors)(color, theme, variant === "outline").border};
  background-color: ${({ color, variant, theme }) => variant === "outline"
    ? "transparent"
    : (0, Colors_1.getBadgeColors)(color, theme).background};

  flex-direction: row;
  align-items: center;
  gap: ${({ size, theme }) => size === 1 ? theme.space[0.5] : theme.space[1.5]};
  align-self: flex-start;
`;
