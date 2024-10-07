"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
exports.FieldContainer = native_1.default.View `
  width: 100%;
  gap: 6px;
  flex-direction: column;
  align-items: flex-start;
`;
