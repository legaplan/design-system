import { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import { InputContainer, StyledInput, SuffixContainer } from "./styles";
import { useTheme } from "styled-components/native";
import Icon, { IconKeys } from "../../../Icon";

export interface InputProps extends TextInputProps {
  hasError?: boolean;
  suffix?: IconKeys;
  mask?: (value: string) => string;
  onFocus?: (event?: any) => void;
  onBlur?: (event?: any) => void;
  onChange?: (event?: any) => void;
}

const Input = ({
  hasError,
  suffix,
  onFocus,
  onBlur,
  onChange,
  mask,
  ...props
}: InputProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (text: string) => {
    const maskedText = mask ? mask(text) : text;
    onChange?.(maskedText);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const suffixIcon = hasError ? "alert-circle" : suffix || null;

  return (
    <InputContainer
      isFocused={isFocused}
      hasSuffixIcon={!!suffixIcon}
      hasError={hasError}
    >
      <StyledInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={theme.colors.text.placeholder}
        selectionColor={theme.colors.brand[400]}
        onChangeText={handleOnChange}
        {...props}
      />
      {suffixIcon && (
        <SuffixContainer>
          <Icon
            size={1}
            color={hasError ? theme.colors.error[500] : theme.colors.gray[400]}
            name={suffixIcon}
          />
        </SuffixContainer>
      )}
    </InputContainer>
  );
};

export default Input;
