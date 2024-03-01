import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import shopSlice from "./shopSlice";
import schoolSlice from "./schoolSlice";


const store = configureStore({
  reducer: {
    user: userSlice,
    shop: shopSlice,
    school: schoolSlice,
  },
});
export default store;
