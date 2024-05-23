import React, { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";

const PxToREM = () => {
  const [px, setPx] = useState("");
  const [rem, setRem] = useState("");
  const [pxToRem, setPxToRem] = useState(true);

  const handleChange = (e, type) => {
    if (type === "px") {
      const pxValue = e.target.value;
      setPx(pxValue);
      if (pxValue !== "") {
        const remVlaue = parseFloat(pxValue) / 16;
        setRem(remVlaue);
      } else {
        setRem("");
      }
    } else {
      const remValue = e.target.value;
      setRem(remValue);
      if (remValue !== "") {
        const pxValue = parseFloat(remValue) * 16;
        setPx(pxValue);
      } else {
        setPx("");
      }
    }
  };

  return (
    <div className="h-screen w-full overflow-x-hidden bg-slate-950 px-2 font-alegreya sm:px-0">
      <div className="mx-auto w-full max-w-[1000px] pt-24">
        <button
          onClick={() => setPxToRem(!pxToRem)}
          className="fixed left-0 top-8 cursor-pointer bg-slate-800 py-2 pe-12 ps-4 text-xl uppercase text-gray-400 sm:text-2xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        >
          {pxToRem ? "PX To REM" : "REM To PX"} Converter
        </button>
        <div
          className={`mt-20 flex w-full ${pxToRem ? "flex-col sm:flex-row" : "flex-col-reverse sm:flex-row-reverse"} items-center justify-center gap-4`}
        >
          <div className="relative w-full max-w-72">
            <input
              id="px"
              value={px}
              onChange={(e) => handleChange(e, "px")}
              type="number"
              placeholder="PX"
              className="box-border h-14 w-full border border-slate-800 bg-transparent ps-7 text-2xl text-white outline-none [appearance:textfield] placeholder:text-neutral-400 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              title="type or swipe"
            />
            <label
              htmlFor="px"
              className="absolute -left-5 top-1/2 w-14 -translate-y-1/2 -rotate-90 transform bg-slate-800 text-center text-sm text-gray-400"
            >
              Pixels
            </label>
          </div>
          <LuArrowLeftRight
            onClick={() => setPxToRem(!pxToRem)}
            className="rotate-90 transform cursor-pointer text-2xl text-neutral-400 sm:rotate-0"
          />
          <div className="relative w-full max-w-72">
            <input
              id="rem"
              value={rem}
              onChange={(e) => handleChange(e, "rem")}
              type="number"
              placeholder="REM"
              className="box-border h-14 w-full border border-slate-800 bg-transparent ps-7 text-2xl text-white outline-none [appearance:textfield] placeholder:text-neutral-400 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              title="type or swipe"
            />
            <label
              htmlFor="rem"
              className="absolute -left-5 top-1/2 w-14 -translate-y-1/2 -rotate-90 transform bg-slate-800 text-center text-sm text-gray-400"
            >
              REM
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PxToREM;
