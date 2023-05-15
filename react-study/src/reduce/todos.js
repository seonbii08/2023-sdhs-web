import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      const { payload } = action;
      state.todos = payload;
    },
    createTodoItem: (state, action) => {
      const { payload } = action;

      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },

  deleteTodo: (state, action) => {
    const { payload } = action;
    state.todos = state.todos.filter(todo => todo);
  },

  deleteSelectedTodos: (state, action) => {
    const { payload } = action;
    state.todos = state.todos.filter(todo => !payload);
  },
});

export const { setTodos, createTodoItem, deleteTodo, deleteSelectedTodos } = todosSlice.actions;
export default todosSlice.reducer;
