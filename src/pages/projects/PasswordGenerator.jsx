import React, { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import useCheckPasswordStrength from "./useCheckPasswordStrength";

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
    <div
      className="w-full h-[100vh] flex items-center justify-center bg-[#000]"
      style={{ fontFamily: '"Nanum Gothic Coding", monospace' }}
    >
      <div className="mx-auto h-auto w-full max-w-[560px] border-[3px] border-green-900 rounded-xl overflow-hidden">
        <h1 className="px-[1rem] pt-[0.3rem] pb-[1.2rem] text-[1.2rem] text-[#fff] uppercase bg-green-900">
          Random Password Generator
        </h1>
        <div className="-mt-3 p-[1rem] bg-[#000] rounded-t-lg rounded-b-xl">
          <div className="flex items-center justify-between gap-[0.6rem]">
            <div className="flex items-center w-[130px] h-[42px] outline-none rounded-lg overflow-hidden">
              <label
                htmlFor="password-size"
                className="px-[0.8rem] flex items-center justify-center h-full w-[45%] text-[1.1rem] text-[#fff] font-[500] bg-[#111]"
              >
                Size
              </label>
              <select
                id="password-size"
                value={digit}
                onChange={(e) => setDigit(parseInt(e.target.value))}
                name="digit"
                className="px-[0.6rem] h-full w-[55%] text-[#fff] text-[1.1rem] bg-[#000] border-[2px] border-[#111] rounded-r-lg outline-none"
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="h-[42px] w-[calc(100%-130px)] flex items-center justify-between bg-[#111] rounded-md overflow-hidden">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="px-[0.8rem] h-full w-full text-[1rem] text-[#fff] border-none outline-none bg-transparent"
                placeholder="Your password"
                disabled={editMode ? false : true}
              />
              <button
                onClick={handleCopyToClipboard}
                className="h-full w-[3rem] flex items-center justify-center bg-transparent border-l-[1px] border-[#222]"
                title="copy"
              >
                <MdOutlineContentCopy className="text-[#fff] text-[1.4rem]" />
              </button>
            </div>
          </div>

          <div className="mt-[1rem] flex items-center justify-between">
            <div className="flex items-center justify-start gap-[0.6rem]">
              <button
                onClick={handleGeneratePassword}
                className="px-[0.6rem] py-[0.2rem] text-[1.1rem] text-[#fff] bg-green-900 rounded-md"
              >
                Generate
              </button>
              <button
                onClick={() => setEditMode(!editMode)}
                className={`px-[0.6rem] py-[0.2rem] text-[1.1rem] text-[#fff] ${
                  editMode ? "bg-zinc-800" : "bg-red-900"
                } rounded-md`}
              >
                {editMode ? "Disable edit" : "Enable Edit"}
              </button>
            </div>

            <div className="flex items-center justify-end gap-[0.6rem]">
              <p className={`px-[0.6rem] py-[0.2rem] ${passwordStrength >= 5 ? 'text-green-500' : passwordStrength >= 3 ? 'text-yellow-400' : 'text-red-500'} font-[500]`}>
                {passwordStrength >= 5 ? 'Strong' : passwordStrength >= 3 ? 'Medium' : 'Weak'}
              </p>
              <div
                className={`h-[1rem] w-[1rem] ${
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
                className={`h-[1rem] w-[1rem] ${
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
                className={`h-[1rem] w-[1rem] ${
                  passwordStrength >= 5
                    ? "bg-green-700"
                    : passwordStrength >= 3
                    ? "bg-yellow-600"
                    : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-[1rem] w-[1rem] ${
                  passwordStrength >= 5
                    ? "bg-green-700"
                    : passwordStrength === 4
                    ? "bg-yellow-600"
                    : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-[1rem] w-[1rem] ${
                  passwordStrength >= 5 ? "bg-green-700" : "bg-[#444]"
                } rounded-full`}
              ></div>
              <div
                className={`h-[1rem] w-[1rem] ${
                  passwordStrength === 6 ? "bg-green-700" : "bg-[#444]"
                } rounded-full`}
              ></div>
            </div>
          </div>

          <div className="mt-[1rem] w-full flex items-center justify-center gap-[0.4rem]">
            <p
              className={`${
                instructions.uppercase ? "text-green-500" : "text-[#444]"
              } text-[1rem] font-[500]`}
            >
              1 Uppercase
            </p>
            <div className="h-[0.4rem] w-[0.4rem] bg-[#333] rounded-full"></div>
            <p
              className={`${
                instructions.lowercase ? "text-green-500" : "text-[#444]"
              } text-[1rem] font-[500]`}
            >
              1 Lowercase
            </p>
            <div className="h-[0.4rem] w-[0.4rem] bg-[#333] rounded-full"></div>
            <p
              className={`${
                instructions.digit ? "text-green-500" : "text-[#444]"
              } text-[1rem] font-[500]`}
            >
              1 Digit
            </p>
            <div className="h-[0.4rem] w-[0.4rem] bg-[#333] rounded-full"></div>
            <p
              className={`${
                instructions.specialChar ? "text-green-500" : "text-[#444]"
              } text-[1rem] font-[500]`}
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
