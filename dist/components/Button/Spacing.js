import { css } from "styled-components/native";
export const getSpacingStyles = ({ size, theme, }) => {
    const sizes = {
        1: {
            height: theme.space[8],
            padding: theme.raw.space[3],
            gap: theme.space[1],
        },
        2: {
            height: theme.space[10],
            padding: theme.raw.space["3.5"],
            gap: theme.space[1],
        },
        3: {
            height: theme.space[11],
            padding: theme.raw.space[4],
            gap: theme.space[1.5],
        },
        4: {
            height: theme.space[12],
            padding: theme.raw.space[4.5],
            gap: theme.space[1.5],
        },
        5: {
            height: theme.space[14],
            padding: theme.raw.space[5.5],
            gap: theme.space[2.5],
        },
    };
    const { height, padding, gap } = sizes[size];
    return {
        container: css `
      height: ${height};
    `,
        content: css `
      padding: 0 ${padding - 2}px;
      gap: ${gap};
    `,
    };
};
