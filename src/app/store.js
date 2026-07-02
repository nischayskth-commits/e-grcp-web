import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import storageModule from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";

// Fix for Vite ESM/CommonJS interop
const storage =
  storageModule.default || storageModule;

const persistConfig = {
  key: "root",
  storage,

  whitelist: [
    "auth",
    "theme",
    "notification",
    "ui",
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: import.meta.env.DEV,
});

export const persistor = persistStore(store);