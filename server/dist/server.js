"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cryptoRoutes_1 = __importDefault(require("./routes/cryptoRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(cryptoRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ massage: 'Something went wrong!', error: err.message });
});
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
