import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chatSlice',
  initialState: [],
  reducers: {
    addMessage(state, action) {
      state.push(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
