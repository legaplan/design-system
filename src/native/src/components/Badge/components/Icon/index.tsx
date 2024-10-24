import { useTheme } from "styled-components/native";
import { BadgeChildrenProps } from "../../types";
import BaseText, { IconKeys } from "../../../BaseIcon";
import { getBadgeColors } from "../../Colors";
import { useComponentProps } from "../../../../providers/ComponentPropsProvider";

export interface IconProps {
  name: IconKeys;
}
const Icon = ({ name }: IconProps) => {
  const theme = useTheme();
  const { color, isOutline } = useComponentProps<BadgeChildrenProps>();

  const iconColor = getBadgeColors(color, theme, isOutline).icon;

  return <BaseText color={iconColor} size={1} name={name} />;
};

export default Icon;
