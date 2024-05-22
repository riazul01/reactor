import React, { useState, useEffect } from "react";

const Todo = () => {
  const [show, setShow] = useState("all");
  const [task, setTask] = useState({ task: "", status: "active" });
  const [edit, setEdit] = useState({ status: false, index: null });
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (show === "active") {
      const newTodo = todo.filter((task) => task.status !== "completed");
      setFilteredTodo([...newTodo]);
    } else if (show === "completed") {
      const newTodo = todo.filter((task) => task.status !== "active");
      setFilteredTodo([...newTodo]);
    } else {
      setFilteredTodo([...todo]);
    }
  }, [show, edit, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.task === "") {
      alert("Please enter your task!");
      return;
    }
    if (edit.status) {
      todo[edit.index] = task;
      setTodo(todo);
      setEdit({ status: false, index: null });
      setTask({ task: "", status: "active" });
      return;
    }
    setTodo([...todo, task]);
    setTask({ task: "", status: "active" });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleEdit = (elem, index) => {
    setTask(elem);
    setEdit({ status: true, index });
  };

  const handleRemove = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  return (
    <div className="px-2 py-32 text-white font-wix w-full h-auto min-h-screen bg-todo bg-cover bg-fixed">
      <div className="mx-auto w-full max-w-[500px]">
        <form
          onSubmit={handleSubmit}
          className="h-10 w-full flex items-center justify-between"
        >
          <input
            value={task.task}
            onChange={handleChange}
            name="task"
            type="text"
            placeholder="Enter task"
            className="px-3 text-lg h-full w-1/2 border-none outline-none bg-black bg-opacity-60 rounded-s-lg"
          />
          <select
            value={task.status}
            onChange={handleChange}
            name="status"
            className="px-3 text-lg h-full w-[30%] border-l border-neutral-800 outline-none bg-black"
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <button
            type="submit"
            className="px-4 text-lg h-full w-[20%] bg-green-800 border-none outline-none rounded-e-lg"
          >
            {edit.status ? "Update" : "Submit"}
          </button>
        </form>

        <div className="mt-4 h-10 flex items-center">
          <button
            onClick={() => setShow("all")}
            className={`px-3 text-lg h-full ${
              show === "all"
                ? "bg-green-800 hover:bg-green-800"
                : "bg-[#000] bg-opacity-60 hover:bg-opacity-100"
            } transition-all ease-in-out duration-300 rounded-s-lg`}
          >
            All
          </button>
          <button
            onClick={() => setShow("active")}
            className={`px-3 text-lg h-full border-x border-neutral-800 ${
              show === "active"
                ? "bg-green-800 hover:bg-green-800 border-green-800"
                : "bg-black bg-opacity-60 hover:bg-opacity-100"
            } ${
              show === "all" ? "border-l-green-800" : "border-r-green-800"
            } transition-all ease-in-out duration-300`}
          >
            Active
          </button>
          <button
            onClick={() => setShow("completed")}
            className={`px-3 text-lg h-full ${
              show === "completed"
                ? "bg-green-800 hover:bg-green-800"
                : "bg-black bg-opacity-60 hover:bg-opacity-100"
            } transition-all ease-in-out duration-300 rounded-e-lg`}
          >
            Completed
          </button>
        </div>

        <div className="mt-4">
          <div className="w-full flex items-center">
            <strong className="w-1/2 text-lg underline">Task</strong>
            <strong className="w-[24%] text-lg underline">Status</strong>
            <strong className="w-[26%] text-lg underline">Actions</strong>
          </div>

          {!filteredTodo.length && (
            <p className="py-3 text-lg">Add some task!</p>
          )}

          {filteredTodo.length !== 0 &&
            filteredTodo.map((elem, index) => {
              return (
                <div key={index} className="pt-4 w-full flex items-start">
                  <span className="w-1/2 text-lg">{elem.task}</span>
                  <span
                    className={`w-[24%] text-lg ${
                      elem.status === "active"
                        ? "text-yellow-400"
                        : "text-green-500"
                    }`}
                  >
                    {elem.status}
                  </span>
                  <span className="w-[26%] flex items-center justify-end gap-2.5">
                    <button
                      onClick={() => handleEdit(elem, index)}
                      className="px-2.5 py-1 text-base border-none outline-none rounded-md bg-sky-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="px-2.5 py-1 text-base border-none outline-none rounded-md bg-red-700"
                    >
                      Delete
                    </button>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
