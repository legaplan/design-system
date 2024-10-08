import styled, { DefaultTheme } from "styled-components/native";
import { IconSizes } from ".";

const getIconSizes = (iconSize: IconSizes, theme: DefaultTheme) => {
  const sizes = {
    1: {
      width: theme.spaces[2],
      height: theme.spaces[2],
    },
    2: {
      width: "20px",
      height: "20px",
    },
    3: {
      width: theme.spaces[3],
      height: theme.spaces[3],
    },
  };

  return sizes[iconSize] || sizes[1];
};

export const IconContainer = styled.View<{ size: IconSizes }>`
  width: ${({ size, theme }) => getIconSizes(size, theme).width};
  height: ${({ size, theme }) => getIconSizes(size, theme).height};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
`;
