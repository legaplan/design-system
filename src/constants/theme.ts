import { BackgroundScheme } from "../theme/schemes/createBackgroundScheme";
import { BorderScheme } from "../theme/schemes/createBorderScheme";
import { ComponentScheme } from "../theme/schemes/createComponentsScheme";
import { ForegroundScheme } from "../theme/schemes/createForegroundScheme";
import { TextScheme } from "../theme/schemes/createTextScheme";
import { UtilityScheme } from "../theme/schemes/createUtilityScheme";
import { BORDER_RADIUS_RAW } from "./borderRadius";
import { FONT_SIZE_RAW } from "./fontSizes";
import { LINE_HEIGHT_RAW } from "./lineHeight";
import { PRIMARY_COLORS, PrimaryColors } from "./primaryColors";
import { SECONDARY_COLORS, SecondaryColors } from "./secondaryColors";
import { SPACE_RAW } from "./spaces";

type SpaceKeys =
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "4.5"
  | "5"
  | "5.5"
  | "6"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "16"
  | "20";

export type FontSizeKeys =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type LineHeightKeys =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11";

export type BorderRadiusKeys = "1" | "2" | "3" | "4" | "99";

type ColorKeys =
  | "25"
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

export type FontSizeRaw = Record<FontSizeKeys, number>;
export type FontSizeInPixels = Record<FontSizeKeys, string>;

export type LineHeightRaw = Record<LineHeightKeys, number>;
export type LineHeightInPixels = Record<LineHeightKeys, string>;

export type BorderRadiusRaw = Record<BorderRadiusKeys, number>;
export type BorderRadiusInPixels = Record<BorderRadiusKeys, string>;

export type SpaceRaw = Record<SpaceKeys, number>;
export type SpaceInPixels = Record<SpaceKeys, string>;

export type Color = Record<ColorKeys, string>;

export type ColorScheme = {
  utility: UtilityScheme;
  border: BorderScheme;
  text: TextScheme;
  foreground: ForegroundScheme;
  background: BackgroundScheme;
  components: ComponentScheme;
};
type BaseColors = {
  primary: PrimaryColors;
  secondary: SecondaryColors;
};

export type BaseTheme = {
  space: SpaceRaw;
  lineHeight: LineHeightRaw;
  borderRadius: BorderRadiusRaw;
  fontSize: FontSizeRaw;
  colors: BaseColors;
};

export type Theme = {
  colors: BaseColors & ColorScheme;
  raw: {
    space: SpaceRaw;
    borderRadius: BorderRadiusRaw;
    fontSize: FontSizeRaw;
  };
  lineHeight: LineHeightInPixels;
  space: SpaceInPixels;
  borderRadius: BorderRadiusInPixels;
  fontSize: FontSizeInPixels;
};

export const BASE_THEME: BaseTheme = {
  space: SPACE_RAW,

  borderRadius: BORDER_RADIUS_RAW,
  fontSize: FONT_SIZE_RAW,
  lineHeight: LINE_HEIGHT_RAW,
  colors: {
    primary: PRIMARY_COLORS,
    secondary: SECONDARY_COLORS,
  },
};
