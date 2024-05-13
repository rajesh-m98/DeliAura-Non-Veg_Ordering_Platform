import { configureStore } from "@reduxjs/toolkit";
import otpSlice from "../Component/otpSlice";

const store = configureStore({
  reducer: {
    otp: otpSlice,
  },
});

export default store;
