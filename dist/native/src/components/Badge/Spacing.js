const PADDING = {
    1: (theme) => `${theme.space[0.5]} ${theme.space[2]}`,
    2: (theme) => `${theme.space[0.5]} ${theme.space[2.5]}`,
    3: (theme) => `${theme.space[1]} ${theme.space[3]}`,
};
export const getBadgePadding = (size, theme) => {
    return PADDING[size](theme);
};
