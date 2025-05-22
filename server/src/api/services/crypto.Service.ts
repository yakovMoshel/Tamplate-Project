import { fetchCryptoData } from "../data/cryptoData";
import { Crypto, CryptoDetail, CryptoInfo, CryptoMarketHistory } from "../models/crypto"
import { cryptoSchema } from '../models/cryptoSchema'

const fetchAndStoreCryptos = async (): Promise<Crypto[]> => {
  const existing = await cryptoSchema.find().lean(); // הופך למסמכים רגילים

  if (existing.length > 0) {
    return existing ;
  }

  const data = await fetchCryptoData();
  await cryptoSchema.insertMany(data);

  return data;
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

export { fetchAndStoreCryptos, fetchCryptoById };