export interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
}
export interface CryptoMarketHistory {
  prices: [number, number][];
}

export interface CryptoInfo {
  id: string;
  symbol: string;
  name: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
      [key: string]: number;
    };
    market_cap: {
      usd: number;
      [key: string]: number;
    };
    price_change_percentage_24h: number;
  };
}

export interface CryptoDetail {
  detail: CryptoInfo;
  history: [number, number][];
}
