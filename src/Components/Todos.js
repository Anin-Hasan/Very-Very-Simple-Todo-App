import React from "react";

import Todo from "./Todo";

const Toods = (props) => {
  return (
    <section>
      {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={props.onRemoveTodo}
        />
      ))}
    </section>
  );
};
export default Toods;
