import { DEFAULT_THEME } from "../constants/theme";
export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export type TDefaultTheme = typeof DEFAULT_THEME;
export type ThemeConfigProps = DeepPartial<TDefaultTheme>;
