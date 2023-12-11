import React, { useState } from "react";
import { TodoProps, TodoFormProps } from "./Interfaces";

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState<string>("");
  const [category, setCategory] = useState<string>("Work");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      const newTodo: TodoProps = {
        id: new Date().getTime(),
        text,
        category,
        completed: false,
      };
      onAddTodo(newTodo);
      setText("");
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new todo" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
      </select>
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
