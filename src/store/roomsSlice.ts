import { createSlice } from "@reduxjs/toolkit";

export const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    total: 160,
    filled: 153,
  },
  reducers: {
    calculateProgress: (state, action) => {
      console.log(state.total);
      console.log(`Payload: ${action.payload}`);
    },
  },
});

export const { calculateProgress } = roomsSlice.actions;
export default roomsSlice.reducer;
