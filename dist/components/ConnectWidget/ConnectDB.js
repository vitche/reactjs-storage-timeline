"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ConnectDB = ({ urlDb, setUrlDb, getSchema }) => {
    return (react_1.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "20px" } },
        react_1.default.createElement("div", null, "Connect to your databese "),
        react_1.default.createElement("div", { style: { display: "flex", gap: "10px" } },
            react_1.default.createElement("input", { placeholder: "enter url address", type: "text", value: urlDb, onChange: (e) => setUrlDb(e.target.value) }),
            react_1.default.createElement("button", { onClick: getSchema }, "Connect"))));
};
exports.default = ConnectDB;
//# sourceMappingURL=ConnectDB.js.map