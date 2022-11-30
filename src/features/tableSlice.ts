import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  pendingRequest,
  publishedRequest,
} from "../components/reducers/action";

interface IState {
  isLoading: boolean;
  data: IData[];
}
type IData = {
  id: number;
  author: string;
  title: string;
};

const initialState: IState = {
  isLoading: false,
  data: [],
};

export const tableSlice: any = createSlice({
  name: "tables",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(pendingRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      pendingRequest.fulfilled,
      (state, action: PayloadAction<IData[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(pendingRequest.rejected, (state: any, action) => {
      state.isLoading = false;
      state.data = [];
    });

    builder.addCase(publishedRequest.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      publishedRequest.fulfilled,
      (state, action: PayloadAction<IData[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(publishedRequest.rejected, (state: any, action) => {
      state.isLoading = false;
      state.data = [];
    });
  },
});

// this is for dispatch
// export const { addTodo, deleteTodo } = tableSlice.actions;

// this is for configureStore
export default tableSlice.reducer;
