import React, { useRef } from "react";
import { colors, colorsShades } from "./colors";

const MultiplicationTable = ({ tableNo }) => {
  const table = useRef([]);

  const colorIndex = Math.floor(Math.random() * colors.length);
  const colorName = colors[colorIndex];
  const colorMain = colorsShades[colorName][700];
  const colorDark = colorsShades[colorName][800];
  const colorDarker = colorsShades[colorName][900];

  for (let i = 1; i <= 10; i++) {
    let line = `${tableNo} X ${i} = ${tableNo * i}`;
    table.current[i - 1] = line;
  }

  return (
    <div className="w-full overflow-hidden rounded-lg">
      <h1
        className="width-full px-4 py-2 text-2xl font-bold text-white"
        style={{ background: colorMain }}
      >
        x{tableNo}
      </h1>
      {table.current.map((line, index) => {
        return (
          <p
            key={index}
            className="px-4 py-2 text-xl text-white"
            style={{ background: index % 2 ? colorDark : colorDarker }}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
};

export default MultiplicationTable;
