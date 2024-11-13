import { jsx as _jsx } from "react/jsx-runtime";
import styles from "./Button.module.scss";
import variants from "./Variants.module.scss";
import sizes from "./Sizes.module.scss";
import { concatStyles } from "../../utils/concatStyles";
export const Button = ({ size = 3, variant = "default", className = "", ...props }) => {
    const buttonStyles = concatStyles([
        styles.button,
        sizes[`size-${size}`],
        variants[`variant-${variant}`],
        className,
    ]);
    return _jsx("button", { className: buttonStyles, ...props });
};
