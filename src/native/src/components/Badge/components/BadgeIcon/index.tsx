import { useTheme } from "styled-components/native";
import { BadgeColors } from "../../types";
import Icon, { IconKeys } from "../../../Icon";
import { getBadgeColors } from "../../utils/getBadgeColors";

interface BadgeIconProps {
  color: BadgeColors;
  name: IconKeys;
  isOutline: boolean;
}
const BadgeIcon = ({ color, isOutline, name }: BadgeIconProps) => {
  const theme = useTheme();

  const iconColor = getBadgeColors(color, theme, isOutline).icon;

  return <Icon color={iconColor} size={1} name={name} />;
};

export default BadgeIcon;
