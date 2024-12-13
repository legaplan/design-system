import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Platform, } from "react-native";
import { BorderContainer, InputContainer, StyledInput, SuffixContainer, } from "./styles";
import { BaseIcon } from "../../../BaseIcon";
import { useTheme } from "../../../../providers/ThemeProvider";
import { getTextLineHeight } from "../../../../components/BaseText/styles";
export const Input = ({ hasError, suffix, onFocus, onBlur, onChange, mask, value, ...props }) => {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
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
    const suffixIcon = suffix ? suffix : hasError ? "alert-circle" : null;
    const minHeight = Platform.select({
        android: `${(props.numberOfLines || 1) * getTextLineHeight("3")}px`,
        default: "auto",
    });
    return (_jsxs(InputContainer, { isFocused: isFocused, hasSuffixIcon: !!suffixIcon, hasError: hasError, children: [_jsx(BorderContainer, { hasError: hasError, isFocused: isFocused }), _jsx(StyledInput, { minHeight: minHeight, underlineColorAndroid: "transparent", onFocus: handleFocus, onBlur: handleBlur, textAlignVertical: "top", placeholderTextColor: theme.colors.text.placeholder, selectionColor: theme.colors.primary.brand[400], onChangeText: handleOnChange, value: value, ...props }), suffixIcon && (_jsx(SuffixContainer, { children: _jsx(BaseIcon, { size: 1, color: hasError
                        ? theme.colors.primary.error[500]
                        : theme.colors.foreground.quinary, name: suffixIcon }) }))] }));
};
