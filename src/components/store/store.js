import { combineReducers, configureStore } from '@reduxjs/toolkit';
import chatSlice from './chatSlice/chatSlice';

const rootReducer = combineReducers({
  chat: chatSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
