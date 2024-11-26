import { BaseText } from "../../../../components/BaseText";
import styled from "styled-components/native";
export const StyledButtonText = styled(BaseText) `
  color: ${({ textColor }) => textColor};
  font-size: ${({ buttonSize, theme }) => buttonSize === 3 ? theme.fontSize[4] : theme.fontSize[3]};
`;
