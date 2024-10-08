import styled from "styled-components/native";
import { getCustomTextSyles } from "./variants.styles";
import { CustomTextProps, CustomTextSizes } from "./types";

const getTextLineHeight = (textSize: keyof CustomTextSizes) => {
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

export const BaseText = styled.Text<CustomTextProps>`
  color: ${({ theme, color }) =>
    getCustomTextSyles(theme).color[color ?? "default"]};
  font-size: ${({ theme, size }) =>
    getCustomTextSyles(theme).size[size ?? "default"]};
  font-weight: ${({ theme, weight }) =>
    getCustomTextSyles(theme).weight[weight ?? "default"]};
  line-height: ${({ size }) => getTextLineHeight(size || "default")};
`;
