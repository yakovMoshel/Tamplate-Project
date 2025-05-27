import express from 'express';
import { getWatchlistHandler, addCoin, deleteCoinHander } from '../api/controller/watchlistController';

const router = express.Router();

/**
 * @route GET /api/watchlist
 * @description Get the user's watchlist
 * @access Public
 */
router.get('/watchlist', getWatchlistHandler);

/**
 * @route POST /api/watchlist/add
 * @description Add a coin to the user's watchlist
 * @access Public
 */
router.post('/watchlist/add', addCoin);

/**
 * @route DELETE /api/watchlist/remove
 * @description Remove a coin from the user's watchlist
 * @access Public
 */
router.delete('/watchlist/remove', deleteCoinHander);

export default router;
