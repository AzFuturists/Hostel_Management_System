import { createSlice } from "@reduxjs/toolkit";

export const createBookingSlice = createSlice({
  name: "createBooking",
  initialState: {
    showCreateBookingModal: false,
  },
  reducers: {
    setShowCreateBookingModal: (state) => {
      state.showCreateBookingModal = true;
    },
    closeCreateBookingModal: (state) => {
      state.showCreateBookingModal = false;
    },
  },
});

export const { setShowCreateBookingModal, closeCreateBookingModal } =
  createBookingSlice.actions;
export default createBookingSlice.reducer;
