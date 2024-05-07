"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BackArrow_1 = __importDefault(require("../BackArrow"));
const TimelineComponent = ({ setStep, selectedTime }) => {
    return (react_1.default.createElement("div", { className: "widget-cont" },
        react_1.default.createElement("div", { className: "components-header" },
            react_1.default.createElement(BackArrow_1.default, { className: "back-button", onClick: () => setStep((prev) => prev - 1) }),
            react_1.default.createElement("div", null, selectedTime.timeLine)),
        react_1.default.createElement("div", { className: "timelines-cont" },
            react_1.default.createElement("div", null,
                "Time: ",
                selectedTime.time),
            react_1.default.createElement("div", null,
                "Value: ",
                selectedTime.value))));
};
exports.default = TimelineComponent;
//# sourceMappingURL=TimelineComponent.js.map