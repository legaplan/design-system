import styled, { css } from "styled-components/native";
const getGapStyles = (size, theme) => {
    const sizes = {
        1: {
            gap: theme.space[1.5],
        },
        2: {
            gap: theme.space[1.5],
        },
        3: {
            gap: theme.space[2],
        },
        4: {
            gap: theme.space[2],
        },
        5: {
            gap: theme.space[3],
        },
    };
    const { gap } = sizes[size];
    return css `
    gap: ${gap};
  `;
};
export const ButtonLinkContainer = styled.View `
  flex-direction: row;
  /* Gap */
  ${({ size, theme }) => getGapStyles(size, theme)}

  flex-direction: row;
  align-items: center;
`;
