import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  data: Array<any>;
}

const initialState: IState = {
  data: [],
};

const admin = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    testDispatch: (state: any, action): void => {
      state.data.push(action.payload);
    },
  },
});

export const { testDispatch } = admin.actions;

export default admin.reducer;
