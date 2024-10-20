"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeText = exports.BadgeContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const getBadgePadding_1 = require("./utils/getBadgePadding");
const getBadgeColors_1 = require("./utils/getBadgeColors");
const Text_1 = __importDefault(require("../Text"));
exports.BadgeContainer = native_1.default.View `
  border-radius: 9999px;

  border-width: ${({ variant }) => (variant === "outline" ? "1.5px" : "1px")};

  padding: ${({ size, theme }) => (0, getBadgePadding_1.getBadgePadding)(size, theme)};
  border-style: solid;
  border-color: ${({ color, theme, variant }) => (0, getBadgeColors_1.getBadgeColors)(color, theme, variant === "outline").border};
  background-color: ${({ color, variant, theme }) => variant === "outline"
    ? "transparent"
    : (0, getBadgeColors_1.getBadgeColors)(color, theme).background};

  flex-direction: row;
  align-items: center;
  gap: ${({ size, theme }) => (size === 1 ? theme.spaces.micro : "6px")};
  align-self: flex-start;
`;
exports.BadgeText = (0, native_1.default)(Text_1.default) `
  color: ${({ badgeColor, theme }) => (0, getBadgeColors_1.getBadgeColors)(badgeColor, theme).text};
`;
