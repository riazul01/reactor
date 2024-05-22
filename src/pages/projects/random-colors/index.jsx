import React, { useState } from "react";
import { colors } from "./colors";

const RandomColors = () => {
  const [colorData, setColorData] = useState(colors[0]);

  const handleRandomColor = () => {
    setColorData(colors[parseInt(Math.random() * colors.length)]);
  };

  const handlePrevColor = (id) => {
    if (id === 1) {
      setColorData(colors[colors.length - 1]);
    } else {
      setColorData(colors[id - 2]);
    }
  };

  const handleNextColor = (id) => {
    if (id === colors.length) {
      setColorData(colors[0]);
    } else {
      setColorData(colors[id]);
    }
  };

  return (
    <div className="h-auto min-h-screen w-full overflow-x-hidden bg-black px-2 pt-6 font-marcellus md:h-screen md:pt-28">
      <div className="mx-auto h-auto w-full max-w-[720px]">
        <h1
          className="cursor-default pb-12 text-center text-2xl font-semibold uppercase underline"
          style={{ color: colorData.color }}
        >
          Random colors
        </h1>

        <div className="flex flex-col items-center justify-start gap-8 md:flex-row">
          <div
            className="h-72 w-72 rounded-full"
            style={{ background: colorData.color }}
          ></div>
          <div>
            <p className="mt-4 flex items-center justify-start pb-2 text-xl text-white md:text-2xl">
              <strong
                className="w-32 cursor-default"
                style={{ color: colorData.color }}
              >
                Color
              </strong>
              <span className="">{colorData.color}</span>
            </p>
            <p className="mt-2 flex items-center justify-start pb-2 text-xl text-white md:text-2xl">
              <strong
                className="w-32 cursor-default"
                style={{ color: colorData.color }}
              >
                HEX
              </strong>
              <span className="">{colorData.hex}</span>
            </p>
            <p className="mt-2 flex items-center justify-start pb-2 text-xl text-white md:text-2xl">
              <strong
                className="w-32 cursor-default"
                style={{ color: colorData.color }}
              >
                rgb
              </strong>
              <span className="">{colorData.rgb}</span>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleRandomColor}
                className="mt-4 border-none bg-neutral-800 px-3 py-2 text-xl font-medium text-white outline-none"
              >
                Random Color
              </button>
              <button
                onClick={() => handlePrevColor(colorData.id)}
                className="mt-4 border-none bg-neutral-800 px-3 py-2 text-xl font-medium text-white outline-none"
              >
                Prev
              </button>
              <button
                onClick={() => handleNextColor(colorData.id)}
                className="mt-4 border-none bg-neutral-800 px-3 py-2 text-xl font-medium text-white outline-none"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomColors;
