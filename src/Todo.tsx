import { useState } from "react";
import { TodoProps } from "./Interfaces";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

function ToDo() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleAddTodo = (todo: TodoProps) => {
    setTodos([...todos, todo]);
  };

  const handleToggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== index));
  }

  return (
    /* TODO: Allow to connect with Notion (probably rust's work) */
    /* TODO: display the todo list with better styling */
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default ToDo;
