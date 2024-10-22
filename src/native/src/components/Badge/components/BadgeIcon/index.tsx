import { useTheme } from "styled-components/native";
import { BadgeChildrenProps } from "../../types";
import Icon, { IconKeys } from "../../../Icon";
import { getBadgeColors } from "../../Colors";
import { useComponentProps } from "../../../../providers/ComponentPropsProvider";

export interface BadgeIconProps {
  name: IconKeys;
}
const BadgeIcon = ({ name }: BadgeIconProps) => {
  const theme = useTheme();
  const { color, isOutline } = useComponentProps<BadgeChildrenProps>();

  const iconColor = getBadgeColors(color, theme, isOutline).icon;

  return <Icon color={iconColor} size={1} name={name} />;
};

export default BadgeIcon;
