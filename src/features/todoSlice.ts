import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface ITodo {
  id?:number
  title: string;
  content: string;
}

interface todoState {
  todos:ITodo[]
}
const initialState: todoState ={
  todos: []
}


export const fetchTodos = createAsyncThunk('todos/fetch', async(thunkAPI )=>{

    const response = await axios.get<ITodo[]>(' http://localhost:3000/posts')
    return response.data;

//   const response = await fetch(' http://localhost:3000/posts')
// const data= response.json();
//   return data;


})


export const saveTodos = createAsyncThunk('todos/save', async(payload:ITodo, thunkAPI )=>{

  const response = await axios.post<ITodo>(' http://localhost:3000/posts', payload)
  return response.data;

//   const response = await fetch(' http://localhost:3000/posts')
// const data= response.json();
//   return data;


})





export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action:PayloadAction<ITodo>) => {
      state.todos.push({
        title:action.payload.title,
        content:action.payload.content
      })
    },

    // deleteTodo: (state: ITodo[], action) => {
    //   const Index = state.findIndex(
    //     (item: ITodo) => item.id === action.payload.id
    //   );
    //
    //   state = state.splice(Index, 1);
    // },
  },
  extraReducers:(builder)=> {
    builder.addCase(fetchTodos.fulfilled, (state, action)=> {
      state.todos =action.payload
    });
    builder.addCase(saveTodos.fulfilled, (state, action)=> {
      state.todos.push(action.payload)
    })
  }
});

// this is for dispatch
export const { addTodo } = TodoSlice.actions;

// this is for configureStore
export default TodoSlice.reducer;