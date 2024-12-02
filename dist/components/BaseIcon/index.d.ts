declare const icons: {
    "arrow-right": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "arrow-left": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "chevron-left": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "alert-circle": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "help-circle": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "check-fill": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "chevron-down": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "notification-off": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "paint-brush": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "user-group": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "upload-cloud-2": ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    home: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    folder: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    doc: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    plus: ({ color, strokeWidth }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
};
export type IconKeys = keyof typeof icons;
export type IconSizes = 1 | 2 | 3;
export interface IconProps {
    name: IconKeys;
    size?: IconSizes;
    className?: string;
    color?: string;
}
export declare const BaseIcon: ({ name, color, size }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
