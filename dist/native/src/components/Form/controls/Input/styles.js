"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuffixContainer = exports.InputContainer = exports.StyledInput = void 0;
const react_native_1 = require("react-native");
const native_1 = __importDefault(require("styled-components/native"));
const getInputBorderColor = (isFocused = false, theme, hasError = false) => {
    if (hasError)
        return theme.colors.border.error;
    if (isFocused)
        return theme.colors.border.brand;
    return theme.colors.border.primary;
};
exports.StyledInput = (0, native_1.default)(react_native_1.TextInput) `
  outline: none;

  display: flex;
  height: ${({ theme }) => theme.spaces[5]};
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};

  color: ${({ theme }) => theme.colors.text.primary};
  outline-style: none;
  width: 100%;
`;
exports.InputContainer = native_1.default.View `
  width: 100%;
  position: relative;

  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};

  height: ${({ theme }) => theme.spaces[5]};

  /* TODO: Add theme spaces variables */
  padding: 0px 12px;
  padding-right: ${({ hasSuffixIcon }) => (hasSuffixIcon ? "36px" : "12px")};

  border-radius: ${({ theme }) => theme.borderRadius[3]};
  outline-width: ${({ isFocused }) => (isFocused ? "2px" : "1px")};
  outline-style: solid;
  outline-color: ${({ theme, isFocused, hasError }) => getInputBorderColor(isFocused, theme, hasError)};

  shadow-color: #1018280d;
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2;
  elevation: 2;
`;
exports.SuffixContainer = (0, native_1.default)(react_native_1.View) `
  position: absolute;

  /* TODO: Add theme variable */
  top: 50%;

  /* TODO: Review transform value */
  /* transform: [{ translateY: -12 }]; */
  transform: translateY(-8px);
  /* transform: translateY(-50%); */
  right: 12px;
`;
