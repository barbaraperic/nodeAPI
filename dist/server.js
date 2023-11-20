"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    console.log("hello from express");
    res.status(200);
    res.json({ message: "hello" });
});
app.use("/api", router_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map