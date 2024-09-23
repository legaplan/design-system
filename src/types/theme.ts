interface ThemeSpaces {
  nano?: string;
  micro?: string;
  "1"?: string;
  "2"?: string;
  "3"?: string;
  "4"?: string;
  "5"?: string;
  "6"?: string;
  "7"?: string;
  "8"?: string;
  "9"?: string;
  "10"?: string;
}

interface ThemeBorderRadius {
  "1"?: string;
  "2"?: string;
  "3"?: string;
}

interface ThemeFontSize {
  "1"?: string;
  "2"?: string;
  "3"?: string;
  "4"?: string;
  "5"?: string;
  "6"?: string;
  "7"?: string;
  "8"?: string;
}

interface ThemeColorsBrand {
  "25"?: string;
  "50"?: string;
  "100"?: string;
  "200"?: string;
  "300"?: string;
  "400"?: string;
  "500"?: string;
  "600"?: string;
  "700"?: string;
  "800"?: string;
  "900"?: string;
  "950"?: string;
}

interface ThemeColorsGray {
  "25"?: string;
  "50"?: string;
  "100"?: string;
  "200"?: string;
  "300"?: string;
  "400"?: string;
  "500"?: string;
  "700"?: string;
  "900"?: string;
}

interface ThemeColorsBlueLight {
  "50"?: string;
  "100"?: string;
  "700"?: string;
}

interface ThemeColorsBlue {
  "700"?: string;
}

interface ThemeColorsError {
  "100"?: string;
  "200"?: string;
  "300"?: string;
  "500"?: string;
  "600"?: string;
}

interface ThemeColorsSuccess {
  "500"?: string;
}

interface ThemeColors {
  brand?: ThemeColorsBrand;
  secondary?: string;
  neutral?: string;
  black?: string;
  white?: string;
  gray?: ThemeColorsGray;
  blueLight?: ThemeColorsBlueLight;
  blue?: ThemeColorsBlue;
  error?: ThemeColorsError;
  success?: ThemeColorsSuccess;
  lightenColor?: string;
  darkenColor?: string;
  background?: string;
}

export interface ThemeConfigProps {
  spaces?: ThemeSpaces;
  borderRadius?: ThemeBorderRadius;
  fontSize?: ThemeFontSize;
  colors?: ThemeColors;
}
