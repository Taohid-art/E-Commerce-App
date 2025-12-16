import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "@/Features/Card/CardSlice";
import { loadCard, saveCard } from "@/persist/cardPersist";

// load and normalize persisted cart to avoid stale totals
const loaded = loadCard();
const normalized = loaded
  ? {
      ...loaded,
      totalQuantity: Array.isArray(loaded.items)
        ? loaded.items.reduce((sum: number, i: any) => sum + (i?.quantity || 0), 0)
        : 0,
      totalPrice: Array.isArray(loaded.items)
        ? loaded.items.reduce(
            (sum: number, i: any) => sum + (i?.price || 0) * (i?.quantity || 0),
            0
          )
        : 0,
    }
  : undefined;

export const store = configureStore({
  reducer: {
    card: CardReducer,
  },
  preloadedState: normalized ? { card: normalized } : undefined,
});

store.subscribe(() => {
  saveCard(store.getState().card);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;