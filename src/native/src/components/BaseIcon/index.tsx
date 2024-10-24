import { IconContainer } from "./styles";
import { useTheme } from "styled-components/native";
import ArrowLeft from "./components/ArrowLeft";
import ChevronLeft from "./components/ChevronLeft";
import AlertCircle from "./components/AlertCircle";
import HelpCircle from "./components/HelpCircle";
import CheckFill from "./components/CheckFill";
import ChevronDown from "./components/ChevronDown";

const icons = {
  ["arrow-left"]: ArrowLeft,
  ["chevron-left"]: ChevronLeft,
  ["alert-circle"]: AlertCircle,
  ["help-circle"]: HelpCircle,
  ["check-fill"]: CheckFill,
  ["chevron-down"]: ChevronDown,
};

export type IconKeys = keyof typeof icons;
export type IconSizes = 1 | 2 | 3;

export interface IconProps {
  name: IconKeys;
  size?: IconSizes;
  className?: string;
  color?: string;
}

export const BaseIcon = ({ name, color, size = 2 }: IconProps) => {
  const theme = useTheme();
  const defaultColor = theme.colors.black;
  const IconByName = icons[name];

  return (
    <IconContainer size={size}>
      <IconByName color={color ?? defaultColor} />
    </IconContainer>
  );
};

export default BaseIcon;
