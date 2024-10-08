declare const icons: {
    "arrow-left": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "chevron-left": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "alert-circle": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "help-circle": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
};
export type IconKeys = keyof typeof icons;
export type IconSizes = 1 | 2 | 3;
interface IconProps {
    name: IconKeys;
    size?: IconSizes;
    className?: string;
    color?: string;
}
export declare const Icon: ({ name, color, size }: IconProps) => import("react/jsx-runtime").JSX.Element;
export default Icon;
