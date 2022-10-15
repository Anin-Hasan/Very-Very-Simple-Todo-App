import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mt-8 mx-10">
        <label htmlFor="title" className="font-bold font-Poppins">
          Title:{" "}
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="ml-3 md:ml-14 rounded-md w-4/5 outline-none px-3"
        />
      </div>
      <div className="mx-10 mt-4">
        <label htmlFor="desc" className="font-Poppins font-bold ">
          Desc:{" "}
        </label>
        <textarea
          type="text"
          name="desc"
          value={desc}
          onChange={handleChange}
          className="rounded-md w-4/5 ml-2 md:ml-12 px-3 mt-2 outline-none h-6"
        />
      </div>
      <button
        className="bg-green-600 w-24 h-10 mt-6 shadow-md focus:drop-shadow-xl hover:drop-shadow-xl hover:duration-500  focus:duration-300 self-center rounded-md font-Poppins font-bold text-2xl outline-none"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};
export default NewTodo;
