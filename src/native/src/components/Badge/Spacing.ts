import { DefaultTheme } from "styled-components/native";
import { BadgeSizes } from "./types";

const PADDING: Record<BadgeSizes, (theme: DefaultTheme) => string> = {
  1: (theme) => `${theme.spaces.nano} ${theme.spaces[1]}`,
  2: (theme) => `${theme.spaces.nano} 10px`,
  3: (theme) => `${theme.spaces.micro} ${theme.spaces["1_5"]}`,
};

export const getBadgePadding = (size: BadgeSizes, theme: DefaultTheme) => {
  return PADDING[size](theme);
};
