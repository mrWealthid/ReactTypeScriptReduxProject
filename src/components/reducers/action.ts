import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const pendingRequest = createAsyncThunk("table", async (id: number) => {
  try {
    const resp = await axios(`http://localhost:3000/published/${id}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
});

export const publishedRequest = createAsyncThunk(
  "table/publishedRequest",
  async (id) => {
    try {
      const resp = await axios(`http://localhost:3000/published/${id}`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const declinedRequest = createAsyncThunk(
  "table/publishedRequest",
  async () => {
    try {
      const resp = await axios(`http://localhost:3000/declined`);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  }
);
