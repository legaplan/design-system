import React from "react";
import { ButtonSize, ButtonVariant } from "../..";
import { ButtonLinkContainer } from "./styles";
import { ComponentPropsProvider } from "@/providers/ComponentPropsProvider";
import { useButton } from "../../hooks/useButton";
import { TouchableOpacityProps } from "react-native";
import { ComponentScheme } from "@/theme/schemes/createComponentsScheme";

export interface LinkProps extends TouchableOpacityProps {
  size: ButtonSize;
  variant: keyof ComponentScheme["buttonLink"];
  children: React.ReactNode;
}

export const Link = ({
  children,
  disabled = false,
  size = 2,
  variant = "gray",
}: LinkProps) => {
  const { handleTogglePress, theme, currentState, baseProps } = useButton({
    disabled,
    size,
  });

  const textColor = disabled
    ? theme.colors.foreground.disabled
    : theme.colors.components.buttonLink[variant].foreground[currentState];

  return (
    <ComponentPropsProvider value={{ textColor, size }}>
      <ButtonLinkContainer
        activeOpacity={1}
        delayPressIn={0}
        delayPressOut={0}
        onPressIn={handleTogglePress}
        onPressOut={handleTogglePress}
        {...baseProps}
      >
        {children}
      </ButtonLinkContainer>
    </ComponentPropsProvider>
  );
};
