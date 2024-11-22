import { BaseText } from "@/components/BaseText";
import styled from "styled-components/native";

export const StyledButtonText = styled(BaseText)<{ textColor: string }>`
  color: ${({ textColor }) => textColor};
`;
