import { createContext, useState } from 'react';
import { type TodoContextType, type TodoType } from '../types/todo.ts';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: TodoType) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const editTodo = (todo: TodoType) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  const removeTodo = (id: TodoType['id']) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: TodoType['id']) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, removeTodo, toggleTodo }}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
