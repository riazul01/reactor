import React, { useState, useEffect } from "react";
import useCheckPasswordStrength from "./useCheckPasswordStrength";
import { MdOutlineContentCopy } from "react-icons/md";

const PasswordGenerator = () => {
  const [digit, setDigit] = useState(24);
  const [password, setPassword] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { passwordStrength, instructions } = useCheckPasswordStrength(password);

  useEffect(() => {
    handleGeneratePassword();
  }, [digit]);

  const handleGeneratePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < digit; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => alert("Password copied to clipboard!"))
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="flex h-screen w-full items-center justify-center overflow-x-hidden bg-black px-2 font-coding">
      <div className="mx-auto h-auto w-full max-w-[560px] overflow-hidden rounded-xl border-[3px] border-green-900">
        <h1 className="bg-green-900 px-4 pb-5 pt-2 text-xl uppercase text-white">
          Random Password Generator
        </h1>
        <div className="-mt-3 rounded-b-xl rounded-t-lg bg-black p-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-3">
            <div className="flex h-11 w-36 items-center overflow-hidden rounded-lg outline-none">
              <label
                htmlFor="password-size"
                className="flex h-full w-[45%] items-center justify-center bg-[#111] px-3 text-lg font-medium text-white"
              >
                Size
              </label>
              <select
                id="password-size"
                value={digit}
                onChange={(e) => setDigit(parseInt(e.target.value))}
                name="digit"
                className="h-full w-[55%] rounded-r-lg border-2 border-[#111] bg-black px-3 text-lg text-white outline-none"
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="flex h-11 w-full items-center justify-between overflow-hidden rounded-md bg-[#111] sm:w-[calc(100%-144px)]">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="h-full w-full border-none bg-transparent px-3 text-base text-white outline-none"
                placeholder="Your password"
                disabled={editMode ? false : true}
              />
              <button
                onClick={handleCopyToClipboard}
                className="flex h-full w-12 items-center justify-center border-l border-[#222] bg-transparent"
                title="copy"
              >
                <MdOutlineContentCopy className="text-xl text-white" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0">
            <div className="flex items-center justify-start gap-3">
              <button
                onClick={handleGeneratePassword}
                className="rounded-md bg-green-900 px-3 py-1 text-lg text-white"
              >
                Generate
              </button>
              <button
                onClick={() => setEditMode(!editMode)}
                className={`px-3 py-1 text-lg text-white ${
                  editMode ? "bg-zinc-800" : "bg-red-900"
                } rounded-md`}
              >
                {editMode ? "Disable edit" : "Enable Edit"}
              </button>
            </div>

            <div className="flex items-center justify-end gap-3">
              <p
                className={`py-1 ${passwordStrength >= 5 ? "text-green-500" : passwordStrength >= 3 ? "text-yellow-400" : "text-red-500"} font-medium`}
              >
                {passwordStrength >= 5
                  ? "Strong"
                  : passwordStrength >= 3
                    ? "Medium"
                    : "Weak"}
              </p>
              <div
                className={`h-4 w-4 ${
                  passwordStrength >= 5
                    ? "bg-green-700"
                    : passwordStrength >= 3
                      ? "bg-yellow-600"
                      : passwordStrength >= 1
                        ? "bg-red-700"
                        : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-4 w-4 ${
                  passwordStrength >= 5
                    ? "bg-green-700"
                    : passwordStrength >= 3
                      ? "bg-yellow-600"
                      : passwordStrength === 2
                        ? "bg-red-700"
                        : "bg-[#444]"
                }
                  rounded-full`}
              ></div>
              <div
                className={`h-4 w-4 ${
                  passwordStrength >= 5
                    ? "bg-green-700"
                    : passwordStrength >= 3
                      ? "bg-yellow-600"
                      : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-4 w-4 ${
                  passwordStrength >= 5
                    ? "bg-green-700"
                    : passwordStrength === 4
                      ? "bg-yellow-600"
                      : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-4 w-4 ${
                  passwordStrength >= 5 ? "bg-green-700" : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-4 w-4 ${
                  passwordStrength === 6 ? "bg-green-700" : "bg-[#444]"
                } rounded-full`}
              ></div>
            </div>
          </div>

          <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2">
            <p
              className={`${
                instructions.uppercase ? "text-green-500" : "text-[#444]"
              } text-base font-medium`}
            >
              1 Uppercase
            </p>
            <div className="h-[0.4rem] w-[0.4rem] rounded-full bg-[#333]"></div>
            <p
              className={`${
                instructions.lowercase ? "text-green-500" : "text-[#444]"
              } text-base font-medium`}
            >
              1 Lowercase
            </p>
            <div className="h-[0.4rem] w-[0.4rem] rounded-full bg-[#333]"></div>
            <p
              className={`${
                instructions.digit ? "text-green-500" : "text-[#444]"
              } text-base font-medium`}
            >
              1 Digit
            </p>
            <div className="h-[0.4rem] w-[0.4rem] rounded-full bg-[#333]"></div>
            <p
              className={`${
                instructions.specialChar ? "text-green-500" : "text-[#444]"
              } text-base font-medium`}
            >
              1 Sepcial Character
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
