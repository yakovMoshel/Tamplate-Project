import express from 'express';
import { getWatchlistHandler,addCoin, deleteCoinHander } from '../api/controller/watchlistController';

const router = express.Router();

router.get('/watchlist', getWatchlistHandler);
router.post('/watchlist/add', addCoin);
router.delete('/watchlist/remove',deleteCoinHander )

export default router;