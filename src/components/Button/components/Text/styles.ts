import { BaseText } from "@/components/BaseText";
import styled from "styled-components/native";
import { ButtonSize } from "../..";

export const StyledButtonText = styled(BaseText)<{
  textColor: string;
  buttonSize: ButtonSize;
}>`
  color: ${({ textColor }) => textColor};
  font-size: ${({ buttonSize, theme }) =>
    buttonSize === 3 ? theme.fontSize[4] : theme.fontSize[3]};
`;
