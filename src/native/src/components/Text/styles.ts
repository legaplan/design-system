import styled from "styled-components/native";
import { getCustomTextSyles } from "./variants.styles";
import { CustomTextProps, CustomTextSizes } from "./types";

const getTextLineHeight = (textSize: keyof CustomTextSizes) => {
  const lineHeights = {
    xs: "1.5em",
    sm: "1.42em",
    md: "1.5em",
    lg: "1.55em",
    xl: "1.5em",
    default: "1.42em",
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
