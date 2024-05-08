"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BackArrow_1 = __importDefault(require("../BackArrow"));
const TimelinesComponent = ({ setStep, timeLines, getTimeLine }) => {
    return (react_1.default.createElement("div", { className: "widget-cont" },
        react_1.default.createElement("div", { className: "components-header" },
            react_1.default.createElement(BackArrow_1.default, { className: "back-button", onClick: () => setStep((prev) => prev - 1) }),
            react_1.default.createElement("div", null, "Time lines")),
        react_1.default.createElement("div", { className: "timelines-cont" }, timeLines.map((entry, key) => (react_1.default.createElement("div", { className: "schema-element", key: key, onClick: () => getTimeLine(entry) }, entry))))));
};
exports.default = TimelinesComponent;
//# sourceMappingURL=TimelinesComponent.js.map