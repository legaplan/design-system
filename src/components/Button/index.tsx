import { useState } from "react";
import {
  Content,
  GradientContainer,

  //
  Container,
} from "./styles";
import { View } from "react-native";
export type ButtonVariant = "primary" | "secondary"; //| "secondary-color";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress: () => void;
  children: React.ReactNode;
};
export const Button = ({
  variant = "primary",
  size = "md",
  children,
  onPress,
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTogglePress = () => setIsPressed((prev) => !prev);

  return (
    <Container
      isPressed={isPressed}
      delayPressIn={0}
      delayPressOut={0}
      onPressIn={handleTogglePress}
      activeOpacity={1}
      onPressOut={handleTogglePress}
      variant={variant}
      size={size}
      onPress={onPress}
    >
      <>
        <GradientContainer
          colors={["rgba(255, 255, 255, 0.12)", "rgba(00, 00, 00, 0.03)"]} //rgba(255,255,255, 0.0) doenst work
          start={{
            x: 0,
            y: 0,
          }}
          end={{ x: 0, y: 1 }}
        />
        <Content isPressed={isPressed} size={size} variant={variant}>
          {children}
        </Content>
      </>
    </Container>
  );
};
