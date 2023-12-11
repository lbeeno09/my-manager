interface TodoProps {
  id: number;
  text: string;
  category: string;
  completed: boolean;
};

interface TodoFormProps {
  onAddTodo: (todo: TodoProps) => void;
};

interface TodoListProps {
  todos: TodoProps[];
  onToggleComplete: (index: number) => void;
  onDeleteTodo: (index: number) => void;
};

export {
  type TodoProps,
  type TodoFormProps,
  type TodoListProps,
}
