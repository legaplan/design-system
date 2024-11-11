"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("./styles");
const native_1 = require("styled-components/native");
const BaseIcon_1 = require("../../../BaseIcon");
const Input = ({ hasError, suffix, onFocus, onBlur, onChange, mask, value, ...props }) => {
    const theme = (0, native_1.useTheme)();
    const [isFocused, setIsFocused] = (0, react_1.useState)(false);
    const handleOnChange = (text) => {
        const maskedText = mask ? mask(text) : text;
        onChange?.(maskedText);
    };
    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus?.(e);
    };
    const handleBlur = (e) => {
        setIsFocused(false);
        onBlur?.(e);
    };
    const suffixIcon = hasError ? "alert-circle" : suffix || null;
    return ((0, jsx_runtime_1.jsxs)(styles_1.InputContainer, { isFocused: isFocused, hasSuffixIcon: !!suffixIcon, hasError: hasError, children: [(0, jsx_runtime_1.jsx)(styles_1.BorderContainer, { hasError: hasError, isFocused: isFocused }), (0, jsx_runtime_1.jsx)(styles_1.StyledInput, { underlineColorAndroid: "transparent", onFocus: handleFocus, onBlur: handleBlur, placeholderTextColor: theme.colors.text.placeholder, selectionColor: theme.colors.primary.brand[400], onChangeText: handleOnChange, value: value, ...props }), suffixIcon && ((0, jsx_runtime_1.jsx)(styles_1.SuffixContainer, { children: (0, jsx_runtime_1.jsx)(BaseIcon_1.BaseIcon, { size: 1, color: hasError
                        ? theme.colors.primary.error[500]
                        : theme.colors.foreground.quinary, name: suffixIcon }) }))] }));
};
exports.Input = Input;
