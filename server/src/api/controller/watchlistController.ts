import { Request, Response } from 'express';
import { addCoinToWatchlist, getAllWatchedCoins, removeFromWatchList } from "../services/watchlist.Service";

export const getWatchlistHandler = async (req: Request, res: Response,) => {
    const watchlist = await getAllWatchedCoins();
    res.status(200).json(watchlist);
};


export const addCoin = async (req: Request, res: Response): Promise<void> => {
    const { coinId } = req.body;
    const result = await addCoinToWatchlist(coinId);
    res.status(201).json(result);
 
};
export const deleteCoinHander = async (req: Request, res: Response) => {
    const { coinId } = req.body;
    const deletedCoin = await removeFromWatchList(coinId);
    res.status(200).json(deletedCoin);
}