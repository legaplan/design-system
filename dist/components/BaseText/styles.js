import styled from "styled-components/native";
export const StyledBaseText = styled.Text `
  color: ${({ theme, color = "secondary" }) => theme.colors.text[color]};
  font-size: ${({ theme, size = "3" }) => theme.fontSize[size]};
  font-weight: ${({ weight = 400 }) => weight};
  line-height: ${({ size = "3" }) => `${getTextLineHeight(size)}px`};
`;
export const getTextLineHeight = (textSize) => {
    const lineHeights = {
        1: 18,
        2: 18,
        3: 20,
        4: 24,
        5: 28,
        6: 30,
        7: 32,
        8: 38,
        9: 44,
        10: 60,
        11: 72,
        12: 90,
    };
    return lineHeights[textSize];
};
