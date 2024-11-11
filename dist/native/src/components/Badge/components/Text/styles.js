"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBadgeText = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const BaseText_1 = require("../../../BaseText");
const Colors_1 = require("../../Colors");
exports.StyledBadgeText = (0, native_1.default)(BaseText_1.BaseText) `
  color: ${({ badgeColor, theme }) => (0, Colors_1.getBadgeColors)(badgeColor, theme).text};
`;
