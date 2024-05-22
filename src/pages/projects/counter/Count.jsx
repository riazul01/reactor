import React from "react";
import useCounter from "./useCounter";

const Count = ({ id, counters, setCounters }) => {
  const { count, increment, decrement } = useCounter();

  const handleClose = (id) => {
    setCounters([...counters.filter((countId) => countId !== id)]);
  };

  return (
    <div className="relative flex h-36 w-full flex-col items-center justify-center gap-3 rounded-lg bg-neutral-950 bg-opacity-50">
      <h1 className="text-center text-5xl text-white">{count}</h1>
      <div className="mb-3 flex items-center justify-center gap-4">
        <button
          onClick={decrement}
          className="rounded-md border border-solid border-neutral-800 bg-neutral-950 px-3 py-0 text-2xl font-bold text-white"
        >
          -
        </button>
        <button
          onClick={increment}
          className="rounded-md border border-solid border-neutral-800 bg-neutral-950 px-3 py-0 text-2xl font-bold text-white"
        >
          +
        </button>
      </div>
      <button
        onClick={() => handleClose(id)}
        className="absolute -right-1.5 -top-1.5 rounded-lg border-4 border-solid border-[#222832] bg-neutral-950 px-3 py-0 text-2xl font-bold text-white transition-all duration-300 hover:bg-red-700"
        title="delete counter"
      >
        X
      </button>
    </div>
  );
};

export default Count;
