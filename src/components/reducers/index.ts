import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./reducer";
import {TodoSlice} from "../../features/todoSlice";

const rootReducer = combineReducers({
  todos:TodoSlice.reducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;