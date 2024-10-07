import { DEFAULT_THEME } from "../constants/theme";
import { DeepPartial, TDefaultTheme, ThemeConfigProps } from "../types/theme";

export const mergeThemes = (
  userTheme: ThemeConfigProps = {}
): TDefaultTheme => {
  const merge = <T>(defaultTheme: T, customTheme: DeepPartial<T>): T => {
    const result = { ...defaultTheme };

    for (const key in customTheme) {
      if (customTheme[key] && typeof customTheme[key] === "object") {
        result[key] = merge(result[key], customTheme[key] as any);
      } else {
        result[key] = customTheme[key] as any;
      }
    }

    return result;
  };

  return merge(DEFAULT_THEME, userTheme);
};
