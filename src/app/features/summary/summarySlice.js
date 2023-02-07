import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
  name: "summary",
  initialState: [],
  reducers: {
    addSummary: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addSummary } = summarySlice.actions;
export default summarySlice.reducer;
