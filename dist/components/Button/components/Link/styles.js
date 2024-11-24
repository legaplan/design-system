import styled, { css } from "styled-components/native";
const getGapStyles = (size, theme) => {
    const sizes = {
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
    return css `
    gap: ${gap};
  `;
};
export const ButtonLinkContainer = styled.TouchableOpacity `
  /* Gap */
  ${({ size, theme }) => getGapStyles(size, theme)}
`;
