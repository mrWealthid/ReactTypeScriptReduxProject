import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./components/reducers";

import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch:()=>typeof store.dispatch= useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector