import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testReducer";
import roomsReducer from "./roomsSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    rooms: roomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
