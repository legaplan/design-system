import styled from "styled-components/native";
import { BaseText } from "../../../BaseText";
import { getBadgeColors } from "../../Colors";
export const StyledBadgeText = styled(BaseText) `
  color: ${({ badgeColor, theme }) => getBadgeColors(badgeColor, theme).text};
`;
