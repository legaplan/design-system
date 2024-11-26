import { BaseText } from "../../../../components/BaseText";
import styled from "styled-components/native";
import { getTextSizeStyles } from "./Sizes";
export const StyledButtonText = styled(BaseText).attrs(({ buttonSize }) => ({
    size: getTextSizeStyles({ size: buttonSize }),
})) `
  color: ${({ textColor }) => textColor};
`;
