import styled, { DefaultTheme } from "styled-components/native";
import { ButtonSize, ButtonVariant } from ".";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

interface VariantSpacingStyles {
  height: string;
  padding: number;
  gap: string;
}
interface GradientBackgroundProps {
  variant: ButtonVariant;
  isPressed: boolean;
  size: ButtonSize;
}
interface GetVariantColorStylesProps {
  variant: ButtonVariant;
  theme: DefaultTheme;
  isPressed: boolean;
}

interface GetVariantSpacingStylesProps {
  size: ButtonSize;
  theme: DefaultTheme;
}

interface ButtonContainerProps {
  size: ButtonSize;
  isPressed: boolean;
  variant: ButtonVariant;
}

const getButtonState = (isPressed: boolean) =>
  isPressed ? "hover" : "default";

const getBorderStyles = ({
  variant,
  theme,
  isPressed,
}: GetVariantColorStylesProps) => {
  const borderStyles = theme.colors.components.button[variant]?.border;
  if (!borderStyles) return "";

  const buttonState = getButtonState(isPressed);
  return `
    border-width: 1px;
    border-style: solid;
    border-color: ${borderStyles[buttonState]};
  `;
};

const getBackgroundStyles = ({
  variant,
  theme,
  isPressed,
}: GetVariantColorStylesProps) => {
  const backgroundStyles = theme.colors.components.button[variant]?.background;
  if (!backgroundStyles) return "";

  const buttonState = getButtonState(isPressed);
  return `
    background-color: ${backgroundStyles[buttonState]};
  `;
};

const getSpacingStyles = ({ size, theme }: GetVariantSpacingStylesProps) => {
  const sizes: Record<ButtonSize, VariantSpacingStyles> = {
    sm: {
      height: theme.space[8],
      padding: theme.raw.space[3],
      gap: theme.space[1],
    },
    md: {
      height: theme.space[10],
      padding: theme.raw.space["3.5"],
      gap: theme.space[1],
    },
    lg: {
      height: theme.space[11],
      padding: theme.raw.space[4],
      gap: theme.space[1.5],
    },
  };

  const { height, padding, gap } = sizes[size];

  return {
    container: `
    height: ${height};
  `,
    content: `
    padding: 0 ${padding - 2}px;
    gap: ${gap};
  `,
  };
};

const getShadowStyles = () => {
  return `
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    shadow-offset: 0px 4px;
    shadow-opacity: 0.3;
    shadow-radius: 4px;
    elevation: 2;
  `;
};

export const Container = styled.TouchableOpacity<ButtonContainerProps>`
  position: relative;

  border-radius: ${({ theme }) => theme.borderRadius[2]};
  padding: 1px;

  ${({ theme, size }) => getSpacingStyles({ size, theme }).container}
  ${({ theme, isPressed, variant }) =>
    getBorderStyles({ variant, theme, isPressed })}
  ${({ theme, isPressed, variant }) =>
    getBackgroundStyles({ variant, theme, isPressed })}

  border: 1px solid rgba(16, 24, 40, 0.18);

  shadow-color: rgba(16, 24, 40, 0.05);
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
  align-self: flex-start;
`;

export const GradientContainer = styled(LinearGradient)`
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  inset: -1px;
`;

export const Content = styled.View<ButtonContainerProps>`
  border-radius: ${({ theme }) => theme.borderRadius[1.5]};
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 1;

  /* Padding and gap*/
  ${({ theme, size }) => getSpacingStyles({ size, theme }).content}

  /* Background */
  ${({ theme, isPressed, variant }) =>
    getBackgroundStyles({ variant, theme, isPressed })}
`;
