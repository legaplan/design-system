import { BadgeColors } from "../../types";
import { IconKeys } from "../../../Icon";
interface BadgeIconProps {
    color: BadgeColors;
    name: IconKeys;
    isOutline: boolean;
}
declare const BadgeIcon: ({ color, isOutline, name }: BadgeIconProps) => import("react/jsx-runtime").JSX.Element;
export default BadgeIcon;
