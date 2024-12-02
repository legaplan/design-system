const PADDING = {
    1: (theme) => `${theme.space[0.5]} ${theme.space[2]}`,
    2: (theme) => `${theme.space[0.5]} ${theme.space[2.5]}`,
    3: (theme) => `${theme.space[1]} ${theme.space[3]}`,
};
const RADIUS = {
    1: (theme) => theme.borderRadius["1.5"],
    2: (theme) => theme.borderRadius["1.5"],
    3: (theme) => theme.borderRadius["2"],
};
export const getBadgePadding = (size, theme) => {
    return PADDING[size](theme);
};
export const getBadgeRadius = (type, size, theme) => {
    if (type === "default") {
        return RADIUS[size](theme);
    }
    return "99999px";
};
