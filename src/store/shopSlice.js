import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: [],
  reducers: {
    bakeryItem(state, action) {
      state.push(action.payload);
    },
    otherStuff(state, action) {},
  },
});
export const { bakeryItem } = shopSlice.actions;
export default shopSlice.reducer;
