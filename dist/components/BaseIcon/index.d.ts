declare const icons: {
    "arrow-right": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "arrow-left": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "chevron-left": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "alert-circle": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "help-circle": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "check-fill": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "chevron-down": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "notification-off": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "paint-brush": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "user-group": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    "upload-cloud": ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    home: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    folder: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    doc: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
    plus: ({ color }: import("./types/svg").TSvg) => import("react/jsx-runtime").JSX.Element;
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
