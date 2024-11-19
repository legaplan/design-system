import styled, { DefaultTheme } from "styled-components/native";
import { ButtonSize, ButtonVariant } from ".";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";

interface VariantSpacingStyles {
  height: number;
  padding: string;
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
    border-width: ${variant === "primary" ? "2px" : "1px"};
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
      height: theme.raw.space[8],
      padding: theme.space[3],
      gap: theme.space[1],
    },
    md: {
      height: theme.raw.space[10],
      padding: theme.space["3.5"],
      gap: theme.space[1],
    },
    lg: {
      height: theme.raw.space[11],
      padding: theme.space[4],
      gap: theme.space[1.5],
    },
  };

  const { height, padding, gap } = sizes[size];

  return {
    container: `
    height: ${height}px;
  `,
    gradient: {
      height: `${height - 2}px`,
    },
    content: `
    height: ${height - 4}px;
    padding: 0 ${padding};
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

// export const GradientBackground = styled(
//   LinearGradient
// )<GradientBackgroundProps>`
//   flex: 1;
//   position: absolute;
//   align-items: center;
//   top: 0px;
//   left: 0px;
//   right: 0px;
//   bottom: 0px;
//   justify-content: center;
//   border-radius: ${({ theme }) => theme.borderRadius[2]};
//   width: 100%;
//   ${({ theme, size }) => getSpacingStyles({ size, theme }).container}
// `;

// export const InnerContainer = styled.View<
//   ButtonContainerProps & { width: number }
// >`
//   ${({ theme, isPressed, variant }) =>
//     getBackgroundStyles({ variant, theme, isPressed })}
//   border-radius: ${({ theme }) => theme.borderRadius[2]};
//   position: absolute;
//   top: 2px;
//   left: 2px;
//   right: 2px;
//   bottom: 2px;
//   width: ${({ width }) => `${width - 4}px`};
// `;

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  // Deve ter 40 de altura, altura máxima
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  ${({ theme, size }) => getSpacingStyles({ size, theme }).container}
  ${({ theme, isPressed, variant }) =>
    getBorderStyles({ variant, theme, isPressed })}
  ${({ theme, isPressed, variant }) =>
    getBackgroundStyles({ variant, theme, isPressed })}
    
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 2;
`;

export const BorderContainer = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  background: rgba(16, 24, 40, 0.18);
`;

export const BorderInner = styled.View<
  ButtonContainerProps & { width: number }
>`
  height: 38px;
  position: absolute;
  width: ${({ width }) => `${width - 2}px`};
  inset: 1px;
  border-radius: ${({ theme }) => `${theme.raw.borderRadius[2] - 1}px`};
  ${({ theme, isPressed, variant }) =>
    getBackgroundStyles({ variant, theme, isPressed })}
`;

export const GradientContainer = styled(LinearGradient)<
  ButtonContainerProps & { width: number }
>`
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  width: 100%;
  inset: 0px;
  ${({ theme, size }) => getSpacingStyles({ size, theme }).container}
`;

export const Content = styled.View<ButtonContainerProps & { width: number }>`
  position: absolute;
  width: ${({ width }) => `${width - 4}px`};

  border-radius: ${({ theme }) => theme.borderRadius[1.5]};
  inset: 2px;
  align-items: center;
  justify-content: center;

  /* Background */
  ${({ theme, isPressed, variant }) =>
    getBackgroundStyles({ variant, theme, isPressed })}

  /* Height */
  ${({ theme, size }) => getSpacingStyles({ size, theme }).content}
`;
