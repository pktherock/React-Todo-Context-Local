/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

const TodoContext = createContext({
  allTodo: [{ id: 1, todo: "Todo msg", complete: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

const useTodo = () => {
  return useContext(TodoContext);
};

const TodoProvider = TodoContext.Provider;

export { TodoContext, useTodo, TodoProvider };
