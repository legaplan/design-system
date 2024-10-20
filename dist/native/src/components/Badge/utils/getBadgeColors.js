"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBadgeColors = exports.badgeColors = void 0;
const getBorderColor = (theme, color, isOutline) => (isOutline ? theme.colors[color][600] : theme.colors[color][200]);
// TODO: Replace by utility colors
exports.badgeColors = {
    gray: (theme, isOutline) => ({
        text: theme.colors.gray[700],
        icon: isOutline ? theme.colors.gray[600] : theme.colors.gray[500],
        border: getBorderColor(theme, "gray", isOutline),
        background: theme.colors.gray[50],
    }),
    brand: (theme, isOutline) => ({
        text: theme.colors.brand[700],
        icon: isOutline ? theme.colors.brand[600] : theme.colors.brand[500],
        border: getBorderColor(theme, "brand", isOutline),
        background: theme.colors.brand[50],
    }),
    error: (theme, isOutline) => ({
        text: theme.colors.error[700],
        icon: isOutline ? theme.colors.error[600] : theme.colors.error[500],
        border: getBorderColor(theme, "error", isOutline),
        background: theme.colors.error[50],
    }),
    warning: (theme, isOutline) => ({
        text: theme.colors.warning[700],
        icon: isOutline ? theme.colors.warning[600] : theme.colors.warning[500],
        border: getBorderColor(theme, "warning", isOutline),
        background: theme.colors.warning[50],
    }),
    success: (theme, isOutline) => ({
        text: theme.colors.success[700],
        icon: isOutline ? theme.colors.success[600] : theme.colors.success[500],
        border: getBorderColor(theme, "success", isOutline),
        background: theme.colors.success[50],
    }),
    grayBlue: (theme, isOutline) => ({
        text: theme.colors.grayBlue[700],
        icon: theme.colors.grayBlue[500],
        border: getBorderColor(theme, "grayBlue", isOutline),
        background: theme.colors.grayBlue[50],
    }),
    blueLight: (theme, isOutline) => ({
        text: theme.colors.blueLight[700],
        icon: theme.colors.blueLight[500],
        border: getBorderColor(theme, "blueLight", isOutline),
        background: theme.colors.blueLight[50],
    }),
    blue: (theme, isOutline) => ({
        text: theme.colors.blue[700],
        icon: theme.colors.blue[500],
        border: getBorderColor(theme, "blue", isOutline),
        background: theme.colors.blue[50],
    }),
    indigo: (theme, isOutline) => ({
        text: theme.colors.indigo[700],
        icon: theme.colors.indigo[500],
        border: getBorderColor(theme, "indigo", isOutline),
        background: theme.colors.indigo[50],
    }),
    purple: (theme, isOutline) => ({
        text: theme.colors.purple[700],
        icon: theme.colors.purple[500],
        border: getBorderColor(theme, "purple", isOutline),
        background: theme.colors.purple[50],
    }),
    pink: (theme, isOutline) => ({
        text: theme.colors.pink[700],
        icon: theme.colors.pink[500],
        border: getBorderColor(theme, "pink", isOutline),
        background: theme.colors.pink[50],
    }),
    orange: (theme, isOutline) => ({
        text: theme.colors.orange[700],
        icon: theme.colors.orange[500],
        border: getBorderColor(theme, "orange", isOutline),
        background: theme.colors.orange[50],
    }),
};
const getBadgeColors = (color, theme, isOutline) => {
    return exports.badgeColors[color](theme, isOutline);
};
exports.getBadgeColors = getBadgeColors;
