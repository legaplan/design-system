import styled from "styled-components/native";
export const StyledBaseText = styled.Text `
  color: ${({ theme, color = "secondary" }) => theme.colors.text[color]};
  font-size: ${({ theme, size = "3" }) => theme.fontSize[size]};
  font-weight: ${({ weight = 400 }) => weight};
  line-height: ${({ size = "3" }) => getTextLineHeight(size)};
`;
const getTextLineHeight = (textSize) => {
    const lineHeights = {
        1: "18px",
        2: "18px",
        3: "20px",
        4: "24px",
        5: "28px",
        6: "30px",
        7: "32px",
        8: "38px",
        9: "44px",
        10: "60px",
        11: "72px",
        12: "90px",
    };
    return lineHeights[textSize];
};
