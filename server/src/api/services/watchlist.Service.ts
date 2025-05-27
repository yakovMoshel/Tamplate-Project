import { getCryptosFromDB } from "../repositories/cryptoRepository";
import { CoinWatchlistFromDB, createCoinToWatchlistDB, deleteCoinFromWatchlistDB, getWatchListFromDB } from "../repositories/watchListRepository";
import { IWatchedCoin } from "../types/IWatchedCoin";

export const getAllWatchedCoins = async (): Promise<IWatchedCoin[]> => {
  try {
    const watchedCoins = await getWatchListFromDB();
    return watchedCoins;
  } catch (error) {
    console.error('Failed to get watched coins:', error);
    throw error;
  }
};

export const addCoinToWatchlist = async (coinId: string): Promise<IWatchedCoin> => {
  const existingCoin = CoinWatchlistFromDB(coinId);
  if (existingCoin) return existingCoin;

  const allCoins = await getCryptosFromDB();
  const coin = allCoins.find((coin) => coin.id === coinId);
  if (!coin) {
    const error = new Error('Coin not found');
    (error as any).status = 404;
    throw error;
  }
  const coinToSave: IWatchedCoin = {
    id: coin!.id,
    name: coin!.name,
    symbol: coin!.symbol,
    image: coin!.image,
    current_price: coin!.current_price,
    addedAt: new Date()
  };
  const newCoin = createCoinToWatchlistDB(coinToSave);
  return newCoin;
};

export const removeFromWatchList = async (coinId: string) => {
  const existing = CoinWatchlistFromDB(coinId);
  if (!existing) {
    return;
  }
  deleteCoinFromWatchlistDB(coinId);
}