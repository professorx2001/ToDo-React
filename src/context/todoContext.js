import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [],
    addTodo : (todos) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {},
    updateTodo : (id, todo) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
};

export default useTodo;