import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Redux/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
