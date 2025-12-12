import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "@/Features/Card/CardSlice";
import { loadCard, saveCard } from "@/persist/cardPersist";

const preloadedState = loadCard();

export const store = configureStore({
  reducer: {
    card: CardReducer,
  },
  preloadedState: preloadedState ? {card:preloadedState} : undefined
})

store.subscribe(()=>{
  saveCard(store.getState().card)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;