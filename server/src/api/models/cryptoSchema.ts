import mongoose from "mongoose";
import { Crypto } from "./crypto";

export const CryptoSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
  image: String,
  current_price: Number,
  market_cap: Number,
  market_cap_rank: Number,
  total_volume: Number,
  high_24h: Number,
  low_24h: Number,
});

export const cryptoSchema = mongoose.model<Crypto>("Crypto", CryptoSchema);
