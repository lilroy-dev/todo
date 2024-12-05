export type TodoType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type TodoContextType = {
  todos: TodoType[];
  addTodo: (todo: TodoType) => void;
  editTodo: (todo: TodoType) => void;
  removeTodo: (id: TodoType['id']) => void;
  toggleTodo: (id: TodoType['id']) => void;
};
