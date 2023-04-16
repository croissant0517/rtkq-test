import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";

import { pokemonApi } from "./service/pokemon";
import { meetupApi } from "./service/meetupApi";

import counterSlice from "./slices/counterSlice";
import modalSlice from "./slices/modalSlice";

const middlewares = [pokemonApi.middleware, meetupApi.middleware];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterSlice,
      modal: modalSlice,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
      [meetupApi.reducerPath]: meetupApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });

const store = makeStore();

setupListeners(store.dispatch);

export const wrapper = createWrapper(makeStore, { debug: true });
