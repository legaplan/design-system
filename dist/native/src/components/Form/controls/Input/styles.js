"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInput = exports.BorderContainer = exports.InputContainer = exports.SuffixContainer = void 0;
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("styled-components/native"));
const getInputBorderColor = (isFocused = false, theme, hasError = false) => {
    if (hasError)
        return theme.colors.border.error;
    if (isFocused)
        return theme.colors.border.brand;
    return theme.colors.border.primary;
};
exports.SuffixContainer = native_1.default.View `
  position: absolute;

  /* TODO: Add theme variable */
  top: 50%;

  /* TODO: Review transform value */
  /* transform: [{ translateY: -12 }]; */
  transform: translateY(-8px);
  /* transform: translateY(-50%); */
  right: 12px;
`;
exports.InputContainer = native_1.default.View `
  width: 100%;
  position: relative;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};
  height: ${({ theme }) => theme.spaces[5]};
  padding: 0px 12px;
  padding-right: ${({ hasSuffixIcon }) => (hasSuffixIcon ? "36px" : "12px")};
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  elevation: 2;
`;
exports.BorderContainer = native_1.default.View `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-width: ${({ isFocused }) => (isFocused ? "2px" : "1px")};
  border-color: ${({ theme, isFocused, hasError }) => getInputBorderColor(isFocused, theme, hasError)};
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  pointer-events: none;
`;
exports.StyledInput = (0, native_1.default)(react_native_1.TextInput) `
  display: flex;
  height: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};
  color: ${({ theme }) => theme.colors.text.primary};
  outline-style: none;
  width: 100%;
`;
