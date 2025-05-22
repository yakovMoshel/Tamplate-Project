"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConnectToMongo_1 = require("./api/utils/ConnectToMongo");
const cryptoRoutes_1 = __importDefault(require("./routes/cryptoRoutes"));
const watchListRoutes_1 = __importDefault(require("./routes/watchListRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(cryptoRoutes_1.default);
app.use('/api', watchListRoutes_1.default);
app.use((err, req, res, next) => {
    console.error('❌ Express error:', err);
    res.status(500).json({ error: 'Something went wrong on the server' });
    next();
});
(0, ConnectToMongo_1.connectToMongoDB)().then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000"));
});
