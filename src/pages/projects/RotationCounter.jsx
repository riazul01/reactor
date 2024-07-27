import React, { useState, useEffect } from "react";

const RotationCounter = () => {
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [count, setCount] = useState(0);

  const speedIntervals = [null, 1000, 750, 500, 250, 100];

  useEffect(() => {
    let intervalId = null;

    if (start && speed > 0) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, speedIntervals[speed]);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [start, speed]);

  const handleRotationStart = () => {
    if (start) {
      setStart(false);
      setSpeed(0);
    } else {
      setStart(true);
      setSpeed(3);
    }
  };

  return (
    <div className="h-screen w-full bg-neutral-950 px-[0.4rem] pt-16 font-ace">
      <div className="relative mx-auto h-[400px] w-[400px]">
        <div
          className={`relative h-full w-full ${speed === 1 ? "animate-spin-slower" : speed === 2 ? "animate-spin-slow" : speed === 3 ? "animate-spin-medium" : speed === 4 ? "animate-spin-fast" : speed === 5 ? "animate-spin-faster" : null}`}
        >
          <div className="absolute left-[50%] top-[50%] z-0 h-full w-[40px] translate-x-[-50%] translate-y-[-50%] rotate-45 transform rounded-br-3xl rounded-tl-3xl bg-green-800"></div>
          <div className="absolute left-[50%] top-[50%] z-10 h-[80px] w-[80px] translate-x-[-50%] translate-y-[-50%] transform bg-green-800"></div>
          <div className="absolute left-[50%] top-[50%] z-0 h-full w-[40px] translate-x-[-50%] translate-y-[-50%] -rotate-45 transform rounded-br-3xl rounded-tl-3xl bg-green-800"></div>
        </div>
        <div className="absolute -right-16 bottom-0 flex flex-col gap-4">
          <button
            onClick={() => setSpeed(5)}
            className={`rounded-sm ${speed === 5 ? "bg-green-800" : "bg-neutral-900"} px-2.5 py-1 text-base text-white clip-hexagon`}
            disabled={start ? false : true}
          >
            5
          </button>
          <button
            onClick={() => setSpeed(4)}
            className={`rounded-sm ${speed >= 4 ? "bg-green-800" : "bg-neutral-900"} px-2.5 py-1 text-base text-white clip-hexagon`}
            disabled={start ? false : true}
          >
            4
          </button>
          <button
            onClick={() => setSpeed(3)}
            className={`rounded-sm ${speed >= 3 ? "bg-green-800" : "bg-neutral-900"} px-2.5 py-1 text-base text-white clip-hexagon`}
            disabled={start ? false : true}
          >
            3
          </button>
          <button
            onClick={() => setSpeed(2)}
            className={`rounded-sm ${speed >= 2 ? "bg-green-800" : "bg-neutral-900"} px-2.5 py-1 text-base text-white clip-hexagon`}
            disabled={start ? false : true}
          >
            2
          </button>
          <button
            onClick={() => setSpeed(1)}
            className={`rounded-sm ${speed >= 1 ? "bg-green-800" : "bg-neutral-900"} px-2.5 py-1 text-base text-white clip-hexagon`}
            disabled={start ? false : true}
          >
            1
          </button>
        </div>
      </div>
      <button
        onClick={handleRotationStart}
        className={`fixed bottom-24 left-[50%] w-28 translate-x-[-50%] rounded-sm ${start ? "bg-red-800" : "bg-green-800"} py-3 text-base font-medium uppercase text-white`}
      >
        {start ? "Stop" : "Start"}
      </button>
      <p className="fixed bottom-8 left-8 text-xl text-white">Count: {count}</p>
    </div>
  );
};

export default RotationCounter;
