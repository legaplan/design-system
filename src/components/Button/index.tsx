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

export interface ButtonChildrenProps {
  textSize: FontSizeKeys;
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

export const Button = ({
  variant = "primary",
  size = 2,
  children,
  disabled,
  onPress,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const theme = useTheme();

  const handleTogglePress = () => setIsPressed((prev) => !prev);

  const currentState = useMemo(() => getButtonState(isPressed), [isPressed]);
  const gradientColors = theme.colors.components.button[variant].gradient;

  const textSize = size === 3 ? 4 : 3; //16 pixels for size 3, 14 for others
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
    <ComponentPropsProvider value={{ textColor, textSize }}>
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
