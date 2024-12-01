import styled from "styled-components/native";
import { getBadgeColors } from "./Colors";
import { getBadgePadding, getBadgeRadius } from "./Spacing";
export const Container = styled.View `
  border-radius: ${({ type, size, theme }) => getBadgeRadius(type, size, theme)};

  border-width: ${({ variant }) => (variant === "outline" ? "1.5px" : "1px")};

  padding: ${({ size, theme }) => getBadgePadding(size, theme)};
  border-style: solid;
  border-color: ${({ color, theme, variant }) => getBadgeColors(color, theme, variant === "outline").border};
  background-color: ${({ color, variant, theme }) => variant === "outline"
    ? "transparent"
    : getBadgeColors(color, theme).background};

  flex-direction: row;
  align-items: center;
  gap: ${({ size, theme }) => size === 1 ? theme.space[0.5] : theme.space[1.5]};
  align-self: flex-start;
`;
