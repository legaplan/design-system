import styled from "styled-components/native";
import { DEFAULT_THEME } from "../../constants/theme";

const sizes = {
  1: {
    width: DEFAULT_THEME.spaces[2],
    height: DEFAULT_THEME.spaces[2],
  },
  2: {
    width: "20px",
    height: "20px",
  },
  3: {
    width: DEFAULT_THEME.spaces[3],
    height: DEFAULT_THEME.spaces[3],
  },
};

export const IconContainer = styled.View<{ size: keyof typeof sizes }>`
  width: ${({ size }) => sizes[size].width};
  height: ${({ size }) => sizes[size].height};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
`;
