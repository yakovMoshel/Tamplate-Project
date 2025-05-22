import { Request, Response } from 'express';
import { getAllWatchedCoins, removeFromWatchList } from "../services/watchlist.Service";
import { fetchAndStoreCryptos } from '../services/crypto.Service';
import watchlistSchema from '../models/watchlistSchema';

export const getWatchlistHandler = async (req: Request, res: Response,) => {
  try {
    const watchlist = await getAllWatchedCoins();

    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get watchlist' });
  }
};


export const addCoin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { coinId } = req.body;

    if (!coinId) {
      res.status(400).json({ message: 'coinId is required' });
      return;
    }
    // נשלוף את כל המטבעות ונחפש את המטבע לפי ה-ID
    const allCoins = await fetchAndStoreCryptos();
    const coin = allCoins.find((c: any) => c.id === coinId);
    if (!coin) {
      res.status(404).json({ message: 'Coin not found' });
      return;
    }
    // נבדוק אם כבר קיים ברשימת המעקב
    const alreadyExists = await watchlistSchema.findOne({ coinId });
    if (alreadyExists) {
      res.status(400).json({ message: 'Coin already in watchlist' });
      return;
    }
    // ניצור את הרשומה החדשה
    const newWatch = await watchlistSchema.create({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      market_cap_rank: coin.market_cap_rank,
      total_volume: coin.total_volume,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      addedAt: new Date()
    });

    res.status(201).json(newWatch);
  } catch (err) {
    console.error("Error adding coin to watchlist:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteCoinHander = async (req: Request, res: Response) => {
  try {
    const { coinId } = req.body;
    const deletedCoin = await removeFromWatchList(coinId);
    res.status(200).json(deletedCoin);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete coin' });
  }
}