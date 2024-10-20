import { View } from "react-native";
import { BadgeContainer, BadgeText } from "./styles";
import { BadgeSizes, BadgeColors, BadgeVariants } from "./types";
import { IconKeys } from "../Icon";
import BadgeIcon from "./components/BadgeIcon";

export interface BadgeProps {
  size?: BadgeSizes;
  color: BadgeColors;
  variant?: BadgeVariants;
  suffix?: IconKeys;
  prefix?: IconKeys;
  label: string;
}
const Badge = ({
  color,
  label,
  prefix,
  suffix,
  size = 2,
  variant = "fill",
}: BadgeProps) => {
  const textSize = size === 1 ? "xs" : "sm";
  const isOutline = variant === "outline";
  return (
    <View>
      <BadgeContainer color={color} size={size} variant={variant}>
        {prefix && (
          <BadgeIcon
            color={color}
            isOutline={variant === "outline"}
            name={prefix}
          />
        )}
        <BadgeText badgeColor={color} size={textSize} weight="medium">
          {label}
        </BadgeText>
        {suffix && (
          <BadgeIcon isOutline={isOutline} color={color} name={suffix} />
        )}
      </BadgeContainer>
    </View>
  );
};

export default Badge;
