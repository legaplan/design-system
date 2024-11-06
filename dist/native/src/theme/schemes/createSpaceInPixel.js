"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpaceInPixel = void 0;
const mapRawToPixel_1 = require("../utils/mapRawToPixel");
const createSpaceInPixel = (spaceRaw) => {
    return (0, mapRawToPixel_1.mapRawValuesToPixel)(spaceRaw);
};
exports.createSpaceInPixel = createSpaceInPixel;
