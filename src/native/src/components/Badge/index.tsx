import { View } from "react-native";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { ComponentPropsProvider } from "../../providers/ComponentPropsProvider";
import { Container } from "./styles";
import { BadgeSizes, BadgeColors, BadgeVariants } from "./types";

export interface BadgeProps {
  size?: BadgeSizes;
  color: BadgeColors;
  variant?: BadgeVariants;
  children: React.ReactNode;
}

const Badge = ({ color, children, size = 2, variant = "fill" }: BadgeProps) => {
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

Badge.Icon = Icon;
Badge.Text = Text;
export default Badge;
