import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Crypto } from "../domain/models/models";

// הוספת מטבע לרשימת המעקב
export const addCoinToWatchlist = createAsyncThunk(
  "watchlist/addCoin",
  async (coinId: string) => {
    const response = await axios.post("http://localhost:5000/api/watchlist/add",
      { coinId });
    return response.data;
  }
);

// הסרת מטבע מרשימת המעקב
export const removeCoinFromWatchlist = createAsyncThunk(
  "watchlist/removeCoin",
  async (coinId: string) => {
    const response = await axios.delete('http://localhost:5000/api/watchlist/remove',
      { data: { coinId } });
    return response.data;
  }
);

interface WatchlistState {
  coins: Crypto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WatchlistState = {
  coins: [],
  status: "idle",
  error: null
};


export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    // פעולה סינכרונית לעדכון רשימת המטבעות במלא
    setCoins(state, action) {
      state.coins = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // טיפול בהוספת מטבע
      .addCase(addCoinToWatchlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCoinToWatchlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins.push(action.payload); // הוספת המטבע החדש
      })
      .addCase(addCoinToWatchlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })

      // טיפול בהסרת מטבע
      .addCase(removeCoinFromWatchlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeCoinFromWatchlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins = state.coins.filter((coin) => coin.id !== action.meta.arg);
      })
      .addCase(removeCoinFromWatchlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
}); 
export const { setCoins } = watchlistSlice.actions;

export default watchlistSlice.reducer;
