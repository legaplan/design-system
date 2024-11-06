"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_THEME = void 0;
const borderRadius_1 = require("./borderRadius");
const fontSizes_1 = require("./fontSizes");
const lineHeight_1 = require("./lineHeight");
const primaryColors_1 = require("./primaryColors");
const secondaryColors_1 = require("./secondaryColors");
const spaces_1 = require("./spaces");
exports.BASE_THEME = {
    space: spaces_1.SPACE_RAW,
    borderRadius: borderRadius_1.BORDER_RADIUS_RAW,
    fontSize: fontSizes_1.FONT_SIZE_RAW,
    lineHeight: lineHeight_1.LINE_HEIGHT_RAW,
    colors: {
        primary: primaryColors_1.PRIMARY_COLORS,
        secondary: secondaryColors_1.SECONDARY_COLORS,
    },
};
