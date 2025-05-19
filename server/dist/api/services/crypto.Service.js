"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCryptoById = exports.fetchCryptos = void 0;
const fetchCryptos = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch cryptocurrencies: ${res.status}`);
    }
    return res.json();
};
exports.fetchCryptos = fetchCryptos;
const fetchCryptoById = async (id, days = 7) => {
    const detailUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
    const historyUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
    const [detailRes, historyRes] = await Promise.all([
        fetch(detailUrl),
        fetch(historyUrl)
    ]);
    if (!detailRes.ok || !historyRes.ok) {
        throw new Error("Failed to fetch data");
    }
    const detail = await detailRes.json();
    const history = await historyRes.json();
    return {
        detail,
        history: history.prices
    };
};
exports.fetchCryptoById = fetchCryptoById;
