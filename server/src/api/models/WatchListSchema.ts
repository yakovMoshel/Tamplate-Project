import mongoose, { Schema } from 'mongoose';
import { IWatchedCoin } from '../types/IWatchedCoin';


const WatchlistSchema = new Schema<IWatchedCoin>({
  id:
  {
    type: String,
    required: true
  },
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  image: { type: String, required: true },
  current_price: {
    type: Number,
    required: true
  },

  addedAt: { type: Date, default: Date.now }
});

export default mongoose.models.Watchlist ||
  mongoose.model<IWatchedCoin>('Watchlist', WatchlistSchema);
