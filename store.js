import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import logger from 'redux-logger'

import { pokemonApi } from './service/pokemon'

import counterSlice from './slices/counterSlice'

const middlewares = [pokemonApi.middleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middlewares),
})

setupListeners(store.dispatch)