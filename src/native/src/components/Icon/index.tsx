import { IconContainer } from "./styles";
import { useTheme } from "styled-components/native";
import ArrowLeft from "./components/ArrowLeft";
import ChevronLeft from "./components/ChevronLeft";
import AlertCircle from "./components/AlertCircle";
import HelpCircle from "./components/HelpCircle";

const icons = {
  ["arrow-left"]: ArrowLeft,
  ["chevron-left"]: ChevronLeft,
  ["alert-circle"]: AlertCircle,
  ["help-circle"]: HelpCircle,
};

export type IconKeys = keyof typeof icons;

interface IconProps {
  name: IconKeys;
  size?: 1 | 2 | 3;
  className?: string;
  color?: string;
}

export const Icon = ({ name, color, size = 2 }: IconProps) => {
  const theme = useTheme();
  const defaultColor = theme.colors.black;
  const IconByName = icons[name];

  return (
    <IconContainer size={size}>
      <IconByName color={color ?? defaultColor} />
    </IconContainer>
  );
};

export default Icon;
