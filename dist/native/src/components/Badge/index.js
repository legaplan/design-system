"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = void 0;
const BadgeContainer_1 = __importDefault(require("./components/BadgeContainer"));
const BadgeIcon_1 = __importDefault(require("./components/BadgeIcon"));
const BadgeText_1 = __importDefault(require("./components/BadgeText"));
exports.Badge = {
    Icon: BadgeIcon_1.default,
    Text: BadgeText_1.default,
    Container: BadgeContainer_1.default,
};
