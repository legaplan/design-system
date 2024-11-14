import styled from "styled-components/native";
import { getCustomTextSyles } from "./variants.styles";
const getTextLineHeight = (textSize) => {
    const lineHeights = {
        xs: "18px",
        sm: "20px",
        md: "24px",
        lg: "28px",
        xl: "30px",
        default: "20px",
    };
    return lineHeights[textSize];
};
export const StyledBaseText = styled.Text `
  color: ${({ theme, color }) => getCustomTextSyles(theme).color[color ?? "default"]};
  font-size: ${({ theme, size }) => getCustomTextSyles(theme).size[size ?? "default"]};
  font-weight: ${({ theme, weight }) => getCustomTextSyles(theme).weight[weight ?? "default"]};
  line-height: ${({ size }) => getTextLineHeight(size || "default")};
`;
