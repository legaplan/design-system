import { DEFAULT_THEME } from "../constants/theme";
import { ThemeConfigProps } from "../types/theme";

export function mergeThemes(userTheme?: ThemeConfigProps): ThemeConfigProps {
  return {
    spaces: {
      ...DEFAULT_THEME.spaces,
      ...userTheme?.spaces,
    },
    borderRadius: {
      ...DEFAULT_THEME.borderRadius,
      ...userTheme?.borderRadius,
    },
    fontSize: {
      ...DEFAULT_THEME.fontSize,
      ...userTheme?.fontSize,
    },
    colors: {
      ...DEFAULT_THEME.colors,
      ...userTheme?.colors,
    },
  };
}

export function applyThemeVariables(theme: ThemeConfigProps) {
  let styles = {};
  function setProperties(obj: Record<string, any>, prefix: string) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        setProperties(value, `${prefix}-${key}`);
      } else {
        styles = {
          ...styles,
          [`--${prefix}-${key}`]: value,
        };
      }
    });
  }

  setProperties(theme.spaces || {}, "spaces");
  setProperties(theme.borderRadius || {}, "border-radius");
  setProperties(theme.fontSize || {}, "font-size");
  setProperties(theme.colors || {}, "colors");
  return styles;
}

export function initializeTheme(userTheme?: ThemeConfigProps) {
  const mergedTheme = mergeThemes(userTheme);
  return applyThemeVariables(mergedTheme);
}
