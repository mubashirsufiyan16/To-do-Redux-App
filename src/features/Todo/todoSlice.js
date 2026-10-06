import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log("action", action);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        console.log(todo);
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) =>
        todo.id === action.payload.id
      );
      if(todo){
       todo.text=action.payload.newTodo
       
      }
    },
  },
});
export const { addTodo, removeTodo, toggleTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
