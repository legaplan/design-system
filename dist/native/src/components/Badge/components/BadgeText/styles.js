"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBadgeText = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const Text_1 = __importDefault(require("../../../Text"));
const Colors_1 = require("../../Colors");
exports.StyledBadgeText = (0, native_1.default)(Text_1.default) `
  color: ${({ badgeColor, theme }) => (0, Colors_1.getBadgeColors)(badgeColor, theme).text};
`;
