import {Crypto,CryptoDetail } from "../models/crypto"
  const fetchCryptos = async () : Promise<Crypto[]> => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch cryptocurrencies: ${res.status}`);
  }

  return res.json();
};

 const fetchCryptoById =  async (id: string): Promise<CryptoDetail> => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch crypto by ID ${id}: ${res.status}`);
  }

  return res.json();
};


export { fetchCryptos, fetchCryptoById };