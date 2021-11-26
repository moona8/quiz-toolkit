import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/reducer";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
