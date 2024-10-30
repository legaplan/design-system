import { concatStyles } from "../../utils/concatStyles";
import styles from "./Icon.module.scss";
import BarChartSquare02 from "./commons/BarChartSquare02";
import CheckCircle from "./commons/CheckCircle";
import ChevronDown from "./commons/ChevronDown";
import LogOut01 from "./commons/LogOut01";
import SearchLg from "./commons/SearchLg";
import Users01 from "./commons/Users01";
import XClose from "./commons/XClose";

const icons = {
  ["bar-chart-square-02"]: BarChartSquare02,
  ["users-01"]: Users01,
  ["chevron-down"]: ChevronDown,
  ["log-out-01"]: LogOut01,
  ["search-lg"]: SearchLg,
  ["check-circle"]: CheckCircle,
  ["x-close"]: XClose,
};

// TODO: Get from theme when it's available
const sizes = {
  1: 16,
  2: 20,
  3: 24,
};

export type IconsKey = keyof typeof icons;

export interface IconProps {
  name: IconsKey;
  size?: 1 | 2 | 3;
  className?: string;
}

export const Icon = ({ name, size = 2, className = "" }: IconProps) => {
  const IconByName = icons[name];
  const iconStyles = concatStyles([styles[`size-${size}`], className]);
  const calculatedStrokeWidth = (sizes[size] / 24) * 2;

  return (
    <div className={iconStyles}>
      <IconByName strokeWidth={calculatedStrokeWidth} />
    </div>
  );
};
