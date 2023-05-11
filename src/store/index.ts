import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./testReducer";
import roomsReducer from "./roomsSlice";
import createBookingSlice from "./createBookingSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    rooms: roomsReducer,
    createBooking: createBookingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
