import { BaseTheme } from "../constants/theme";

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type ThemeConfigProps = DeepPartial<BaseTheme>;
