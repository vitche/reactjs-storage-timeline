"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ConnectDB_1 = __importDefault(require("./ConnectDB"));
const SchemaComponent_1 = __importDefault(require("./SchemaComponent"));
const TimelinesComponent_1 = __importDefault(require("./TimelinesComponent"));
const TimelineComponent_1 = __importDefault(require("./TimelineComponent"));
require("./index.css");
const StorageTimelineWidget = ({ className }) => {
    const [step, setStep] = (0, react_1.useState)(0);
    const [urlDb, setUrlDb] = (0, react_1.useState)("");
    const [schemas, setSchemas] = (0, react_1.useState)([]);
    const [currentSchema, setCurrentSchema] = (0, react_1.useState)("");
    const [timeLines, setTimeLines] = (0, react_1.useState)([]);
    const [selectedTime, setSelectedTime] = (0, react_1.useState)({ time: '', timeLine: "", value: "" });
    const getSchema = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!urlDb)
            return;
        try {
            const req = yield fetch(urlDb, {
                method: "GET",
            });
            const res = yield req.json();
            setSchemas(res);
            setStep(1);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
    const getListTimeLines = (schema) => __awaiter(void 0, void 0, void 0, function* () {
        if (!urlDb || !schema)
            return;
        setCurrentSchema(schema);
        try {
            const req = yield fetch(`${urlDb}?schema=${schema}/`, {
                method: "GET",
            });
            const res = yield req.json();
            setTimeLines(res);
            setStep(2);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
    const getTimeLine = (timeLine_1, ...args_1) => __awaiter(void 0, [timeLine_1, ...args_1], void 0, function* (timeLine, format = "string") {
        if (!urlDb || !currentSchema || !timeLine)
            return;
        try {
            console.log(currentSchema);
            console.log(timeLine);
            const req = yield fetch(`${urlDb}?schema=${currentSchema}&timeLine=${timeLine}&format=${format}`, {
                method: "GET",
            });
            const res = yield req.json();
            setSelectedTime(Object.assign({ timeLine }, res[0]));
            setStep(3);
            console.log(res);
        }
        catch (error) {
            console.log(error);
        }
    });
    return (react_1.default.createElement("div", { className: `main-widget ${className}` },
        step === 0 && react_1.default.createElement(ConnectDB_1.default, { urlDb: urlDb, setUrlDb: setUrlDb, getSchema: getSchema }),
        step === 1 && react_1.default.createElement(SchemaComponent_1.default, { schemas: schemas, setStep: setStep, getListTimeLines: getListTimeLines }),
        step === 2 && react_1.default.createElement(TimelinesComponent_1.default, { setStep: setStep, timeLines: timeLines, getTimeLine: getTimeLine }),
        step === 3 && react_1.default.createElement(TimelineComponent_1.default, { setStep: setStep, selectedTime: selectedTime })));
};
exports.default = StorageTimelineWidget;
//# sourceMappingURL=ConnectWidget.js.map