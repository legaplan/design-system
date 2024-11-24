import styled from "styled-components/native";
import { ButtonSize, ButtonVariant } from ".";
import { LinearGradient } from "expo-linear-gradient";
import {
  getBackgroundStyles,
  getBorderStyles,
  getShadowStyles,
} from "./Colors";
import { getSpacingStyles } from "./Spacing";

export interface ButtonBaseProps {
  size: ButtonSize;
  isPressed: boolean;
  variant: ButtonVariant;
  disabled: boolean;
}

export const Container = styled.TouchableOpacity<ButtonBaseProps>`
  overflow: hidden;
  position: relative;

  border-radius: ${({ theme }) => theme.borderRadius[2]};
  padding: 1px;

  ${({ theme, size }) => getSpacingStyles({ size, theme }).container}
  ${({ theme, isPressed, variant, disabled }) =>
    getBorderStyles({ variant, theme, isPressed, disabled })}
  ${({ theme, isPressed, variant, disabled }) =>
    getBackgroundStyles({ variant, theme, isPressed, disabled })}

    ${({ variant }) => getShadowStyles({ variant })}
`;

export const GradientContainer = styled(LinearGradient)<{
  isDisabled: boolean | undefined;
  hasGradient: boolean;
}>`
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  inset: -1px;
  ${({ isDisabled, hasGradient }) =>
    (isDisabled || !hasGradient) && "display:none;"}
`;

export const Content = styled.View<ButtonBaseProps>`
  border-radius: ${({ theme }) => theme.borderRadius[1.5]};
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 1;

  /* Padding and gap*/
  ${({ theme, size }) => getSpacingStyles({ size, theme }).content}

  /* Background */
  ${({ theme, isPressed, variant, disabled }) =>
    getBackgroundStyles({ variant, theme, isPressed, disabled })}
`;
