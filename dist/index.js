"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config/config"));
const setup_app_1 = require("./setup-app");
const app = (0, express_1.default)();
(0, setup_app_1.setupApp)(app);
console.log('config', config_1.default);
const PORT = config_1.default.port || 5001;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
