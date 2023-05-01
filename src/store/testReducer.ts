import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'test',
  initialState: {
    value: 'Vugar',
  },
  reducers: {
    print: (state) => {
      alert(state.value);
    }
  },
})

// Action creators are generated for each case reducer function
export const { print } = counterSlice.actions

export default counterSlice.reducer