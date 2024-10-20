import styled from "styled-components/native";
import { BadgeSizes, BadgeColors, BadgeVariants } from "./types";
import { getBadgePadding } from "./utils/getBadgePadding";
import { getBadgeColors } from "./utils/getBadgeColors";
import Text from "../Text";

interface BadgeContainerProps {
  size: BadgeSizes;
  color: BadgeColors;
  variant: BadgeVariants;
}

export const BadgeContainer = styled.View<BadgeContainerProps>`
  border-radius: 9999px;

  border-width: ${({ variant }) => (variant === "outline" ? "1.5px" : "1px")};

  padding: ${({ size, theme }) => getBadgePadding(size, theme)};
  border-style: solid;
  border-color: ${({ color, theme, variant }) =>
    getBadgeColors(color, theme, variant === "outline").border};
  background-color: ${({ color, variant, theme }) =>
    variant === "outline"
      ? "transparent"
      : getBadgeColors(color, theme).background};

  flex-direction: row;
  align-items: center;
  gap: ${({ size, theme }) => (size === 1 ? theme.spaces.micro : "6px")};
  align-self: flex-start;
`;

export const BadgeText = styled(Text)<{ badgeColor: BadgeColors }>`
  color: ${({ badgeColor, theme }) => getBadgeColors(badgeColor, theme).text};
`;
