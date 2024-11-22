import { useMemo, useState } from "react";
import { Content, GradientContainer, Container } from "./styles";
import { ComponentScheme } from "@/theme/schemes/createComponentsScheme";
import { useTheme } from "styled-components/native";
import { getButtonState } from "./Colors";
import { ComponentPropsProvider } from "@/providers/ComponentPropsProvider";
import { FontSizeKeys } from "@/constants/theme";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { TouchableOpacityProps } from "react-native";
import { useTheme as useScheme } from "@/providers/ThemeProvider";

type GradientTuple = [string, string];

export interface ButtonChildrenProps {
  size: ButtonSize;
  textColor: string;
}
export type ButtonVariant = keyof ComponentScheme["button"];
export type ButtonSize = 1 | 2 | 3;

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress: () => void;
  children: React.ReactNode;
}

const skeumorphicInner = {
  light: ["transparent", "rgba(16, 24, 40, 0.05)"] as GradientTuple,
  dark: ["transparent", "rgba(12, 17, 29, 0.05)"] as GradientTuple,
};

const hasGradient: Record<ButtonVariant, boolean> = {
  "secondary-color": true,
  "tertiary-color": false,
  primary: true,
  secondary: true,
  tertiary: false,
};

export const Button = ({
  variant = "primary",
  size = 2,
  children,
  disabled,
  onPress,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const { theme: scheme } = useScheme();
  const theme = useTheme();

  const handleTogglePress = () => setIsPressed((prev) => !prev);

  const currentState = useMemo(() => getButtonState(isPressed), [isPressed]);
  const gradientColors = skeumorphicInner[scheme];

  const textColor = disabled
    ? theme.colors.foreground.disabled
    : theme.colors.components.button[variant].foreground[currentState];

  const baseProps = {
    disabled: disabled,
    isPressed: isPressed,
    variant: variant,
    size: size,
  };

  return (
    <ComponentPropsProvider value={{ textColor, size }}>
      <Container
        delayPressIn={0}
        delayPressOut={0}
        onPressIn={handleTogglePress}
        activeOpacity={1}
        onPressOut={handleTogglePress}
        onPress={onPress}
        {...baseProps}
      >
        <>
          <GradientContainer
            hasGradient={hasGradient[variant]}
            isDisabled={disabled}
            colors={gradientColors}
            start={{
              x: 0,
              y: 0,
            }}
            end={{ x: 0, y: 1 }}
          />
          <Content {...baseProps}>{children}</Content>
        </>
      </Container>
    </ComponentPropsProvider>
  );
};

Button.Icon = Icon;
Button.Text = Text;
