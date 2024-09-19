import { DEFAULT_THEME } from "../constants/theme";
import { ThemeConfigProps } from "../types/theme";
function mergeThemes(userTheme: ThemeConfigProps): ThemeConfigProps {
  return {
    spaces: {
      ...DEFAULT_THEME.spaces,
      ...userTheme.spaces,
    },
    borderRadius: {
      ...DEFAULT_THEME.borderRadius,
      ...userTheme.borderRadius,
    },
    fontSize: {
      ...DEFAULT_THEME.fontSize,
      ...userTheme.fontSize,
    },
    colors: {
      ...DEFAULT_THEME.colors,
      ...userTheme.colors,
    },
  };
}
export function applyThemeVariables(theme: ThemeConfigProps) {
  const root = document.documentElement;

  function setProperties(obj: Record<string, any>, prefix: string) {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        setProperties(value, `${prefix}-${key}`);
      } else {
        root.style.setProperty(`--${prefix}-${key}`, value);
      }
    });
  }

  setProperties(theme.spaces || {}, "spaces");
  setProperties(theme.borderRadius || {}, "border-radius");
  setProperties(theme.fontSize || {}, "font-size");
  setProperties(theme.colors || {}, "colors");
}

export function initializeTheme(userTheme: ThemeConfigProps) {
  const mergedTheme = mergeThemes(userTheme);
  applyThemeVariables(mergedTheme);
}
