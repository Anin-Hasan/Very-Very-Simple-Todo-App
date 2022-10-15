import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Tin from "./Tin";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTodo = (id) => {
    setTodos((prevTodo) => {
      const filteredTodo = prevTodo.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };
  return (
    <div className="bg-batman h-screen">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
};
export default Home;
