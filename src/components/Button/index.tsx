import { Content, GradientContainer, Container } from "./styles";
import { ComponentScheme } from "@/theme/schemes/createComponentsScheme";
import { ComponentPropsProvider } from "@/providers/ComponentPropsProvider";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { TouchableOpacityProps } from "react-native";
import { useButton } from "./hooks/useButton";
import { Link } from "./components/Link";

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
  disabled = false,
  onPress,
}: ButtonProps) => {
  const { handleTogglePress, theme, baseProps, currentState, gradientColors } =
    useButton({
      disabled,
      size,
    });

  const textColor = disabled
    ? theme.colors.foreground.disabled
    : theme.colors.components.button[variant].foreground[currentState];

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
        variant={variant}
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
          <Content variant={variant} {...baseProps}>
            {children}
          </Content>
        </>
      </Container>
    </ComponentPropsProvider>
  );
};

Button.Icon = Icon;
Button.Text = Text;
Button.Link = Link;
