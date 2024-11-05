import { BASE_THEME, BaseTheme } from "../constants/theme";
import { DeepPartial, ThemeConfigProps } from "../types/theme";

const merge = <T>(object: T, source: DeepPartial<T>): T => {
  const result = { ...object };

  for (const key in source) {
    if (source[key] && typeof source[key] === "object") {
      result[key] = merge(result[key], source[key] as any);
    } else {
      result[key] = source[key] as any;
    }
  }

  return result;
};

export const mergeThemes = (userTheme: ThemeConfigProps = {}): BaseTheme => {
  return merge(BASE_THEME, userTheme);
};
