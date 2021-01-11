import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const createStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  return store;
};

export default createStore;
