// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";

// Placeholder for your reducers; add them here as you create them
const store = configureStore({
  reducer: {
    // Add your reducers here, e.g.,
    // someFeature: someReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
