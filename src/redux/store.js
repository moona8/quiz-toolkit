import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../redux/reducer";

export default configureStore({
  reducer: {
    quiz: quizReducer,
  },
});
