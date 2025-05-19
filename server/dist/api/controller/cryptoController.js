"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoDetails = exports.getCryptos = void 0;
const crypto_Service_1 = require("../services/crypto.Service");
const getCryptos = async (req, res) => {
    try {
        const data = await (0, crypto_Service_1.fetchCryptos)();
        res.json(data);
    }
    catch (err) {
        console.error('Error in getCryptos:', err);
        res.status(500).json({ message: 'Error fetching cryptocurrency data' });
    }
};
exports.getCryptos = getCryptos;
const getCryptoDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await (0, crypto_Service_1.fetchCryptoById)(id);
        res.json(data);
    }
    catch (err) {
        console.error('Error in getCryptoDetails:', err);
        res.status(500).json({ message: 'Error fetching crypto detail' });
    }
};
exports.getCryptoDetails = getCryptoDetails;
