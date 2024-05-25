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
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-stopwatch bg-cover bg-fixed font-rethink">
      <div className="mx-2.5 flex h-auto w-auto flex-col items-center justify-center gap-10 rounded-3xl bg-black bg-opacity-30 px-2.5 pb-11 pt-10 backdrop-blur">
        <div className="flex flex-wrap items-center justify-center">
          <p className="m-1 w-32 rounded text-center text-5xl font-medium text-white">
            {String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(
              2,
              "0",
            )}
            <span className="ml-2 text-xl">hh</span>
          </p>
          <p className="m-1 w-32 rounded text-center text-5xl font-medium text-white">
            {String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(
              2,
              "0",
            )}
            <span className="ml-2 text-xl">mm</span>
          </p>
          <p className="m-1 w-32 rounded text-center text-5xl font-medium text-white">
            {String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0")}
            <span className="ml-2 text-xl">ss</span>
          </p>
          <p className="m-1 w-32 rounded text-center text-5xl font-medium text-white">
            {String(Math.floor(elapsedTime % 1000)).padStart(3, "0")}
            <span className="ml-2 text-xl">ms</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={startTimer}
            disabled={controls.start}
            className={`rounded border-none px-4 py-2 text-xl font-semibold uppercase outline-none transition-all duration-300 ease-in-out ${
              controls.start
                ? "cursor-default opacity-40"
                : "cursor-pointer opacity-100"
            } bg-[seagreen]`}
          >
            Start
          </button>
          <button
            onClick={pauseTimer}
            disabled={controls.pause}
            className={`rounded border-none px-4 py-2 text-xl font-semibold uppercase outline-none transition-all duration-300 ease-in-out ${
              controls.pause
                ? "cursor-default opacity-40"
                : "cursor-pointer opacity-100"
            } bg-[crimson]`}
          >
            Pause
          </button>
          <button
            onClick={resetTimer}
            disabled={controls.reset}
            className={`rounded border-none px-4 py-2 text-xl font-semibold uppercase outline-none transition-all duration-300 ease-in-out ${
              controls.reset
                ? "cursor-default opacity-40"
                : "cursor-pointer opacity-100"
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
