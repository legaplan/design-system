"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLineHeightInPixel = void 0;
const mapRawToPixel_1 = require("../utils/mapRawToPixel");
const createLineHeightInPixel = (lineHeightRaw) => {
    return (0, mapRawToPixel_1.mapRawValuesToPixel)(lineHeightRaw);
};
exports.createLineHeightInPixel = createLineHeightInPixel;
