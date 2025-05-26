import { configureStore } from "@reduxjs/toolkit";
import { watchlistSlice } from "./watchlistSlice";
export const store = configureStore({
    reducer: {
        watchlist: watchlistSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
