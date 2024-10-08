import { TextInput, View } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

interface InputContainerProps {
  hasSuffixIcon?: boolean;
  isFocused?: boolean;
  hasError?: boolean;
}

const getInputBorderColor = (
  isFocused: boolean = false,
  theme: DefaultTheme,
  hasError: boolean = false
) => {
  if (hasError) return theme.colors.border.error;
  if (isFocused) return theme.colors.border.brand;
  return theme.colors.border.primary;
};

export const SuffixContainer = styled.View`
  position: absolute;

  /* TODO: Add theme variable */
  top: 50%;

  /* TODO: Review transform value */
  /* transform: [{ translateY: -12 }]; */
  transform: translateY(-8px);
  /* transform: translateY(-50%); */
  right: 12px;
`;
export const InputContainer = styled.View<InputContainerProps>`
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

export const BorderContainer = styled.View<{
  isFocused?: boolean;
  hasError?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-width: ${({ isFocused }) => (isFocused ? "2px" : "1px")};
  border-color: ${({ theme, isFocused, hasError }) =>
    getInputBorderColor(isFocused, theme, hasError)};
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  pointer-events: none;
`;

export const StyledInput = styled(TextInput)`
  display: flex;
  height: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};
  color: ${({ theme }) => theme.colors.text.primary};
  border-style: none;
  outline-style: none;
  width: 100%;
`;
