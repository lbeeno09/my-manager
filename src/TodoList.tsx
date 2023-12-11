import React from "react";
import { TodoListProps } from "./Interfaces";

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDeleteTodo }) => (
  <ul>
    {todos.map((todo) => (
      <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />
        <span>{todo.text} - {todo.category}</span>
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
