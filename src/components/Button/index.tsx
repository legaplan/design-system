import { useCallback, useState } from "react";
import {
  ButtonContainer,
  BorderContainer,
  Content,
  GradientContainer,
  BorderInner,
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
  const [width, setWidth] = useState(0);

  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

  const handleTogglePress = () => setIsPressed((prev) => !prev);

  return (
    <ButtonContainer
      onLayout={handleLayout}
      isPressed={isPressed}
      activeOpacity={1}
      onPressIn={handleTogglePress}
      onPressOut={handleTogglePress}
      variant={variant}
      size={size}
      onPress={onPress}
    >
      <BorderContainer>
        <BorderInner
          width={width}
          variant={variant}
          size={size}
          isPressed={isPressed}
        />
      </BorderContainer>

      <GradientContainer
        variant={variant}
        size={size}
        isPressed={isPressed}
        width={width}
        colors={["rgba(255, 255, 255, 0.12)", "rgba(00, 00, 00, 0.03)"]} //rgba(255,255,255, 0.0) doenst work
        start={{
          x: 0,
          y: 0,
        }}
        end={{ x: 0, y: 1 }}
      />

      {/* <Content
        variant={variant}
        size={size}
        isPressed={isPressed}
        width={width}
      > */}
      {children}
      {/* </Content> */}
    </ButtonContainer>
  );
};
