import React, { useState, useEffect } from "react";
import MultiplyTable from "./MultiplyTable";

const MultiplyTableGenerator = () => {
  const [rangeInput, setRangeInput] = useState("1-20");
  const [range, setRange] = useState([]);

  useEffect(() => {
    const tempArr = rangeInput.split("-").filter((ch) => {
      return !isNaN(parseInt(ch)) ? ch : null;
    });

    let min = parseInt(Math.min(...tempArr));
    let max = parseInt(Math.max(...tempArr));

    if (min !== max) {
      min = parseInt(
        Math.min(...tempArr)
          .toString()
          .slice(0, 4),
      );
      max = parseInt(
        Math.max(...tempArr)
          .toString()
          .slice(0, 4),
      );
    }

    if (min > max) {
      [min, max] = [max, min];
    }

    setRange([min, max]);
  }, [rangeInput]);

  const handleInputChange = (e) => {
    let value = e.target.value;

    setTimeout(() => {
      if (value === "") {
        setRangeInput("");
      }
      if (/^[0-9-]+$/.test(value)) {
        setRangeInput(value);
      }
    }, 1200);
  };

  return (
    <div className="bg-table h-auto min-h-screen w-full overflow-x-hidden bg-cover bg-fixed px-2 py-12 font-albert">
      <div className="mx-auto w-full max-w-[1420px]">
        <div className="width-full flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center overflow-hidden rounded-lg outline-none">
            <p className="flex h-11 items-center justify-center bg-sky-600 px-5 text-xl font-medium text-white">
              Range
            </p>
            <input
              onChange={handleInputChange}
              name="limit"
              className="h-11 w-40 rounded-r-lg border-2 border-sky-600 bg-transparent px-3 text-xl text-white outline-none"
              placeholder={rangeInput === "1-20" ? "1-20" : "![range]"}
            />
          </div>
          <p className="text-base italic text-neutral-400">
            Multiplication table from {range[0]} to {range[1]}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from(
            { length: range[1] - range[0] + 1 },
            (_, i) => i + range[0],
          ).map((tableNo, index) => {
            return <MultiplyTable key={index} tableNo={tableNo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MultiplyTableGenerator;
