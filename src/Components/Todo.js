import React from "react";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (key) => {
    props.onRemoveTodo(key);
  };
  return (
    <article className="flex justify-between mx-12">
      <div className="font-Poppins mt-8">
        <h3 className="font-bold">{title}</h3>
        <p>{desc}</p>
      </div>
      <button
        onClick={() => {
          handleClick(id);
        }}
      >
        <i className="fa fa-trash fa-2x mr-4 mt-8  text-red-600 "></i>
      </button>
    </article>
  );
};
export default Todo;
