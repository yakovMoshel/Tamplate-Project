import { IWatchedCoin } from "../models/crypto";
import watchlistSchema from "../models/watchlistSchema";

export const getAllWatchedCoins = async (): Promise<IWatchedCoin[]> => {
  try {
    const coins = await watchlistSchema.find({});

    return coins;
  } catch (error) {
    console.error('Failed to get watched coins:', error);
    throw error;
  }
};

export const addCoinToWatchlist = async (coinId: string) => {
  const existing = await watchlistSchema.findOne({ id: coinId });
  if (existing) return existing;

  const newCoin = new watchlistSchema({  id:coinId });
  await newCoin.save();
  return newCoin;
};

export const removeFromWatchList = async (coinId: string) => {
  const existing = await watchlistSchema.findOne({ id:coinId });
  if (!existing) {
    return;
  } 
    await watchlistSchema.deleteOne({id: coinId });
}