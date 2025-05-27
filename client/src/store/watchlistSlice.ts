import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Crypto } from "../domain/models/models";
import api from "../utils/api";

/**
 * Async thunk - Adds a coin to the user's watchlist on the server.
 *
 * @async
 * @function addCoinToWatchlist
 * @param {string} coinId - The ID of the coin to be added
 * @returns {Promise<Crypto>} - The newly added coin
 */
export const addCoinToWatchlist = createAsyncThunk(
  'watchlist/addCoin',
  async (coinId: string) => {
    const response = await api.post('/watchlist/add', { coinId });
    return response.data;
  }
);

/**
 * Async thunk - Removes a coin from the user's watchlist on the server.
 *
 * @async
 * @function removeCoinFromWatchlist
 * @param {string} coinId - The ID of the coin to be removed
 * @returns {Promise<string>} - The ID of the removed coin
 */
export const removeCoinFromWatchlist = createAsyncThunk(
  'watchlist/removeCoin',
  async (coinId: string) => {
    const response = await api.delete('/watchlist/remove', {
      data: { coinId },
    });
    return response.data;
  }
);

/**
 * State type for the watchlist slice
 * @typedef {Object} WatchlistState
 * @property {Crypto[]} coins - The array of tracked coins
 * @property {'idle' | 'loading' | 'succeeded' | 'failed'} status - The current status of async operations
 * @property {string | null} error - Error message if any operation fails
 */
interface WatchlistState {
  coins: Crypto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: WatchlistState = {
  coins: [],
  status: "idle",
  error: null
};

/**
 * Redux slice to manage the crypto watchlist.
 * Handles adding/removing coins and setting the full list.
 */
export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    /**
     * Sync reducer to directly set the coin list.
     *
     * @function setCoins
     * @param {WatchlistState} state - Current state
     * @param {PayloadAction<Crypto[]>} action - Action containing the new coin list
     */
    setCoins(state, action) {
      state.coins = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle adding coin
      .addCase(addCoinToWatchlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCoinToWatchlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.coins.push(action.payload);
      })
      .addCase(addCoinToWatchlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })

      // Handle removing coin
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

// Export sync action
export const { setCoins } = watchlistSlice.actions;

// Export reducer
export default watchlistSlice.reducer;
