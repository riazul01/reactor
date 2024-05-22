import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Count from "./Count";

const Counter = () => {
  const [counters, setCounters] = useState([uuidv4()]);

  const handleClick = () => {
    setCounters([...counters, uuidv4()]);
  };

  return (
    <div className="h-auto min-h-screen w-full overflow-x-hidden bg-[#222832] p-8 font-jersey15">
      <p className="mx-auto max-w-[1420px] text-3xl text-white">
        Counter: {counters.length}
      </p>
      <div className="mx-auto grid h-auto w-full max-w-[1420px] grid-cols-1 items-start gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {counters.map((item) => {
          return (
            <Count
              key={item}
              id={item}
              counters={counters}
              setCounters={setCounters}
            />
          );
        })}
        <div
          onClick={handleClick}
          className="flex h-36 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-[#333942] bg-transparent"
          title="add counter"
        >
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-[#333942] text-5xl font-bold text-slate-400">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
