import { concatStyles } from "../../utils/concatStyles";
import styles from "./Icon.module.scss";
import BarChartSquare02 from "./commons/BarChartSquare02";
import CheckCircle from "./commons/CheckCircle";
import ChevronDown from "./commons/ChevronDown";
import LogOut01 from "./commons/LogOut01";
import Search from "./commons/Search";
import Users01 from "./commons/Users01";

const icons = {
  ["bar-chart-square-02"]: BarChartSquare02,
  ["users-01"]: Users01,
  ["chevron-down"]: ChevronDown,
  ["log-out-01"]: LogOut01,
  ["search"]: Search,
  ["check-circle"]: CheckCircle,
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
  return (
    <div className={iconStyles}>
      <IconByName />
    </div>
  );
};
