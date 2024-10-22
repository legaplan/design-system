import styled from "styled-components/native";
import Text from "../../../Text";
import { BadgeColors } from "../../types";
import { getBadgeColors } from "../../Colors";

export const StyledBadgeText = styled(Text)<{ badgeColor: BadgeColors }>`
  color: ${({ badgeColor, theme }) => getBadgeColors(badgeColor, theme).text};
`;
