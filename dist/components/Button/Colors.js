import { css } from "styled-components/native";
export const getButtonState = (isPressed) => isPressed ? "hover" : "default";
const getDisabledStyles = ({ variant, theme, }) => {
    const styles = {
        primary: {
            background: theme.colors.background.disabled,
            border: theme.colors.border.disabled_subtle,
        },
        secondary: {
            background: theme.colors.background.primary,
            border: theme.colors.border.disabled_subtle,
        },
        "secondary-color": {
            background: theme.colors.background.primary,
            border: theme.colors.border.disabled_subtle,
        },
        tertiary: {
            background: theme.colors.primary.base.transparent,
            border: theme.colors.primary.base.transparent,
        },
        "tertiary-color": {
            background: theme.colors.primary.base.transparent,
            border: theme.colors.primary.base.transparent,
        },
    };
    return styles[variant];
};
export const getBorderStyles = ({ variant, theme, isPressed, disabled, }) => {
    const borderStyles = theme.colors.components.button[variant]?.border;
    if (!borderStyles)
        return "";
    const buttonState = getButtonState(isPressed);
    return css `
    border-width: 1px;
    border-style: solid;
    border-color: ${disabled
        ? getDisabledStyles({ theme, variant }).border
        : borderStyles[buttonState]};
  `;
};
export const getBackgroundStyles = ({ variant, theme, isPressed, disabled, }) => {
    const backgroundStyles = theme.colors.components.button[variant].background;
    const buttonState = getButtonState(isPressed);
    return css `
    background-color: ${disabled
        ? getDisabledStyles({ theme, variant }).background
        : backgroundStyles[buttonState]};
  `;
};
export const getShadowStyles = ({ variant }) => {
    if (variant === "tertiary" || variant === "tertiary-color")
        return;
    return css `
    shadow-color: rgba(16, 24, 40, 0.05);
    shadow-offset: 0px 1px;
    shadow-opacity: 1;
    shadow-radius: 2px;
    elevation: 2;
  `;
};
