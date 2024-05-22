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
    <div className="bg-todo h-auto min-h-screen w-full overflow-y-auto overflow-x-hidden bg-cover bg-fixed px-2 py-8 font-wix text-white lg:py-32">
      <div className="mx-auto w-full max-w-[540px]">
        <form
          onSubmit={handleSubmit}
          className="flex h-auto w-full flex-wrap items-center justify-start sm:justify-between"
        >
          <input
            value={task.task}
            onChange={handleChange}
            name="task"
            type="text"
            placeholder="Enter task"
            className="mb-4 h-10 w-full rounded-s-lg border-none bg-black bg-opacity-60 px-3 text-lg outline-none sm:mb-0 sm:w-1/2"
          />
          <select
            value={task.status}
            onChange={handleChange}
            name="status"
            className="h-10 w-32 border-l border-neutral-800 bg-black px-3 text-lg outline-none sm:w-[30%]"
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
          <button
            type="submit"
            className="h-10 w-28 rounded-e-lg border-none bg-green-800 px-4 text-lg outline-none sm:w-[20%]"
          >
            {edit.status ? "Update" : "Submit"}
          </button>
        </form>

        <div className="mt-4 flex h-10 items-center sm:mt-6">
          <button
            onClick={() => setShow("all")}
            className={`h-full px-3 text-lg ${
              show === "all"
                ? "bg-green-800 hover:bg-green-800"
                : "bg-[#000] bg-opacity-60 hover:bg-opacity-100"
            } rounded-s-lg transition-all duration-300 ease-in-out`}
          >
            All
          </button>
          <button
            onClick={() => setShow("active")}
            className={`h-full border-x border-neutral-800 px-3 text-lg ${
              show === "active"
                ? "border-green-800 bg-green-800 hover:bg-green-800"
                : "bg-black bg-opacity-60 hover:bg-opacity-100"
            } ${
              show === "all" ? "border-l-green-800" : "border-r-green-800"
            } transition-all duration-300 ease-in-out`}
          >
            Active
          </button>
          <button
            onClick={() => setShow("completed")}
            className={`h-full px-3 text-lg ${
              show === "completed"
                ? "bg-green-800 hover:bg-green-800"
                : "bg-black bg-opacity-60 hover:bg-opacity-100"
            } rounded-e-lg transition-all duration-300 ease-in-out`}
          >
            Completed
          </button>
        </div>

        <div className="mt-4 sm:mt-6">
          <div className="flex w-full items-center">
            <strong className="w-3/5 text-lg underline sm:w-1/2">Task</strong>
            <strong className="w-2/5 text-lg underline sm:w-[24%]">
              Status
            </strong>
            <strong className="hidden text-lg underline sm:block sm:w-[26%]">
              Actions
            </strong>
          </div>

          {!filteredTodo.length && (
            <p className="py-3 text-lg">Add some task!</p>
          )}

          {filteredTodo.length !== 0 &&
            filteredTodo.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-wrap items-start pt-4"
                >
                  <span className="w-3/5 text-lg text-white drop-shadow-2xl sm:w-1/2">
                    {elem.task}
                  </span>
                  <span
                    className={`w-2/5 text-lg sm:w-[24%] ${
                      elem.status === "active"
                        ? "text-yellow-400"
                        : "text-green-500"
                    }`}
                  >
                    {elem.status}
                  </span>
                  <span className="mt-2 flex w-full items-center justify-start gap-2.5 sm:mt-0 sm:w-[26%] sm:justify-between sm:gap-2">
                    <button
                      onClick={() => handleEdit(elem, index)}
                      className="rounded-md border-none bg-sky-700 px-4 py-1 text-base text-white outline-none"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="rounded-md border-none bg-red-700 px-2.5 py-1 text-base text-white outline-none"
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
