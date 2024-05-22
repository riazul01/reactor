import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [controls, setControls] = useState({
    start: false,
    pause: true,
    reset: true,
  });
  const startTimeRef = useRef(null);
  const timerId = useRef(null);

  useEffect(() => {
    if (controls.start) {
      timerId.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => clearInterval(timerId.current);
  }, [controls.start]);

  const startTimer = () => {
    setControls({ start: true, pause: false, reset: false });
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const pauseTimer = () => {
    setControls({ pause: true, start: false, reset: false });
  };

  const resetTimer = () => {
    setControls({ reset: true, pause: true, start: false });
    setElapsedTime(0);
  };

  return (
    <div className="h-screen w-full font-rethink flex items-center justify-center bg-stopwatch bg-cover bg-fixed">
      <div className="mx-2.5 my-0 p-4 w-auto h-auto flex flex-col items-center justify-center gap-4 bg-black bg-opacity-30 backdrop-blur rounded-3xl">
        <div className="px-0 py-5 flex flex-wrap items-center justify-center">
          <p className="m-1 w-32 text-white text-5xl text-center font-medium rounded">
            {String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(
              2,
              "0"
            )}
            <span className="ml-2 text-xl">hh</span>
          </p>
          <p className="m-1 w-32 text-white text-5xl text-center font-medium rounded">
            {String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(
              2,
              "0"
            )}
            <span className="ml-2 text-xl">mm</span>
          </p>
          <p className="m-1 w-32 text-white text-5xl text-center font-medium rounded">
            {String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0")}
            <span className="ml-2 text-xl">ss</span>
          </p>
          <p className="m-1 w-32 text-white text-5xl text-center font-medium rounded">
            {String(Math.floor(elapsedTime % 1000)).padStart(3, "0")}
            <span className="ml-2 text-xl">ms</span>
          </p>
        </div>
        <div className="pt-2.5 pb-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={startTimer}
            disabled={controls.start}
            className={`px-4 py-2 text-xl font-semibold uppercase border-none outline-none rounded transition-all ease-in-out duration-300 ${
              controls.start
                ? "opacity-40 cursor-default"
                : "opacity-100 cursor-pointer"
            } bg-[seagreen]`}
          >
            Start
          </button>
          <button
            onClick={pauseTimer}
            disabled={controls.pause}
            className={`px-4 py-2 text-xl font-semibold uppercase border-none outline-none rounded transition-all ease-in-out duration-300 ${
              controls.pause
                ? "opacity-40 cursor-default"
                : "opacity-100 cursor-pointer"
            } bg-[crimson]`}
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            disabled={controls.reset}
            className={`px-4 py-2 text-xl font-semibold uppercase border-none outline-none rounded transition-all ease-in-out duration-300 ${
              controls.reset
                ? "opacity-40 cursor-default"
                : "opacity-100 cursor-pointer"
            } bg-[steelblue]`}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
