import { View } from "react-native";
import { Container } from "./styles";
import { BadgeSizes, BadgeColors, BadgeVariants } from "../../types";
import { ComponentPropsProvider } from "../../../../providers/ComponentPropsProvider";

export interface BadgeProps {
  size?: BadgeSizes;
  color: BadgeColors;
  variant?: BadgeVariants;
  children: React.ReactNode;
}

const BadgeContainer = ({
  color,
  children,
  size = 2,
  variant = "fill",
}: BadgeProps) => {
  const textSize = size === 1 ? "xs" : "sm";
  const isOutline = variant === "outline";
  return (
    <ComponentPropsProvider value={{ color, textSize, isOutline }}>
      <View>
        <Container color={color} size={size} variant={variant}>
          {children}
        </Container>
      </View>
    </ComponentPropsProvider>
  );
};

export default BadgeContainer;
