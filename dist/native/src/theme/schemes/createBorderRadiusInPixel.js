"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBorderRadiusInPixel = void 0;
const mapRawToPixel_1 = require("../utils/mapRawToPixel");
const createBorderRadiusInPixel = (borderRadiusRaw) => {
    return (0, mapRawToPixel_1.mapRawValuesToPixel)(borderRadiusRaw);
};
exports.createBorderRadiusInPixel = createBorderRadiusInPixel;
