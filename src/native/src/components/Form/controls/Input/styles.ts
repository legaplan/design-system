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

export const StyledInput = styled(TextInput)`
  outline: none;

  display: flex;
  height: ${({ theme }) => theme.spaces[5]};
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]};

  color: ${({ theme }) => theme.colors.text.primary};
  outline-style: none;
  width: 100%;
`;

export const InputContainer = styled.View<InputContainerProps>`
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
  outline-color: ${({ theme, isFocused, hasError }) =>
    getInputBorderColor(isFocused, theme, hasError)};

  shadow-color: #1018280d;
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2;
  elevation: 2;
`;

export const SuffixContainer = styled(View)`
  position: absolute;

  /* TODO: Add theme variable */
  top: 50%;

  /* TODO: Review transform value */
  /* transform: [{ translateY: -12 }]; */
  transform: translateY(-8px);
  /* transform: translateY(-50%); */
  right: 12px;
`;
