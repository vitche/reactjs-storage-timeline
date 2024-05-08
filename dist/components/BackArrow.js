"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BackArrow = ({ className, stroke, onClick }) => {
    return (react_1.default.createElement("svg", { width: "30px", height: "30px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className, onClick: onClick },
        react_1.default.createElement("path", { d: "M11 6L5 12M5 12L11 18M5 12H19", stroke: "#000000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })));
};
exports.default = BackArrow;
//# sourceMappingURL=BackArrow.js.map