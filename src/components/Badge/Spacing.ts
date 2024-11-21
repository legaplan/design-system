import { DefaultTheme } from "styled-components/native";
import { BadgeSizes } from "./types";

const PADDING: Record<BadgeSizes, (theme: DefaultTheme) => string> = {
  1: (theme) => `${theme.space[0.5]} ${theme.space[2]}`,
  2: (theme) => `${theme.space[0.5]} ${theme.space[2.5]}`,
  3: (theme) => `${theme.space[1]} ${theme.space[3]}`,
};

export const getBadgePadding = (size: BadgeSizes, theme: DefaultTheme) => {
  return PADDING[size](theme);
};