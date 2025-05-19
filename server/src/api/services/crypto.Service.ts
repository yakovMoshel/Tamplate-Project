import {Crypto,CryptoDetail, CryptoInfo, CryptoMarketHistory } from "../models/crypto"
  const fetchCryptos = async () : Promise<Crypto[]> => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch cryptocurrencies: ${res.status}`);
  }

  return res.json();
};

const fetchCryptoById = async (id: string, days = 7): Promise<CryptoDetail> => {
  const detailUrl = `https://api.coingecko.com/api/v3/coins/${id}`;
  const historyUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  const [detailRes, historyRes] = await Promise.all([
    fetch(detailUrl),
    fetch(historyUrl)
  ]);

  if (!detailRes.ok || !historyRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const detail: CryptoInfo = await detailRes.json();
  const history: CryptoMarketHistory = await historyRes.json();

  return {
    detail,
    history: history.prices
  };
};

export { fetchCryptos, fetchCryptoById };