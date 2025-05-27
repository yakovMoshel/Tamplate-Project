import watchlistSchema from "../models/watchlistSchema";
import { IWatchedCoin } from "../types/IWatchedCoin";

export async function getWatchListFromDB() {
    const WatchListConis = await watchlistSchema.find({});

    return WatchListConis;
}

export async function CoinWatchlistFromDB(coinId: string) {
    const coin = await watchlistSchema.findOne({ id: coinId });
    return coin;
}

export async function createCoinToWatchlistDB(coin: IWatchedCoin) {
  const newCoin = new watchlistSchema(coin);
  await newCoin.save();
  return newCoin;
}

export async function deleteCoinFromWatchlistDB(coinId: string) {
    await watchlistSchema.deleteOne({ id: coinId });
} 