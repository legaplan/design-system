import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonBaseProps } from "../../styles";
import { ButtonSize } from "../..";

const getGapStyles = (size: ButtonSize, theme: DefaultTheme) => {
  const sizes: Record<ButtonSize, { gap: string }> = {
    1: {
      gap: theme.space[1],
    },
    2: {
      gap: theme.space[1],
    },
    3: {
      gap: theme.space[1.5],
    },
  };

  const { gap } = sizes[size];

  return css`
    gap: ${gap};
  `;
};

export const ButtonLinkContainer = styled.TouchableOpacity<{
  size: ButtonSize;
  theme: DefaultTheme;
}>`
  /* Gap */
  ${({ size, theme }) => getGapStyles(size, theme)}
`;
