import "styled-components";
import { DEFAULT_THEME } from "../constants/theme";

type ThemeInterface = typeof DEFAULT_THEME;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}
