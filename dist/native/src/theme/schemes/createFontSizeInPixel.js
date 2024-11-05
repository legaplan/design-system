"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFontSizeInPixel = void 0;
const mapRawToPixel_1 = require("../utils/mapRawToPixel");
const createFontSizeInPixel = (fontSizesRaw) => {
    return (0, mapRawToPixel_1.mapRawValuesToPixel)(fontSizesRaw);
};
exports.createFontSizeInPixel = createFontSizeInPixel;
