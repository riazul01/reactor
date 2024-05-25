import React, { useState, useEffect } from "react";

const AgeCalculator = () => {
  const [dob, setDOB] = useState("");
  const [ageAtDate, setAgeAtDate] = useState("");
  const [ageByYears, setAgeByYears] = useState("");
  const [ageByMonths, setAgeByMonths] = useState("");
  const [ageByWeeks, setAgeByWeeks] = useState("");
  const [ageByDays, setAgeByDays] = useState("");
  const [ageByHours, setAgeByHours] = useState("");
  const [ageByMinutes, setAgeByMinutes] = useState("");
  const [ageBySeconds, setAgeBySeconds] = useState("");

  const dayConst = 86400;

  useEffect(() => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = currentDate.getDate();
    day = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${month}-${day}`;
    setAgeAtDate(formattedDate);
  }, []);

  const handleInputChange = (e, type) => {
    if (type === "dob") {
      setDOB(e.target.value);
    } else {
      setAgeAtDate(e.target.value);
    }
  };

  const calculateByYears = (totalSeconds) => {
    const years = Math.floor(totalSeconds / (dayConst * 365));
    totalSeconds = totalSeconds % (dayConst * 365);

    const months = Math.floor(totalSeconds / (dayConst * 30.44));
    totalSeconds = totalSeconds % (dayConst * 30.44);

    const days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    setAgeByYears(`${years} years, ${months} months, ${days} days`);
  };

  const calculateByMonths = (totalSeconds) => {
    const months = Math.floor(totalSeconds / (dayConst * 30.44));
    totalSeconds = totalSeconds % (dayConst * 30.44);

    const days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    setAgeByMonths(`${months} months, ${days} days`);
  };

  const calculateByWeeks = (totalSeconds) => {
    const weeks = Math.floor(totalSeconds / (dayConst * 7));
    totalSeconds = totalSeconds % (dayConst * 7);

    const days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    setAgeByWeeks(`${weeks} weeks, ${days} days`);
  };

  const calculateByDays = (totalSeconds) => {
    const days = Math.floor(totalSeconds / dayConst);
    setAgeByDays(`${days} days`);
  };

  const calculateByHours = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / (60 * 60));
    setAgeByHours(`${hours} hours`);
  };

  const calculateByMinutes = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    setAgeByMinutes(`${minutes} minutes`);
  };

  const handleCalculateAge = (e) => {
    e.preventDefault();
    const dobDate = new Date(dob);
    const ageAtDateDate = new Date(ageAtDate);

    if (!isNaN(dobDate.getTime()) && !isNaN(ageAtDateDate.getTime())) {
      const diffTime = Math.abs(ageAtDateDate - dobDate);
      const totalSeconds = Math.ceil(diffTime / 1000);
      setAgeBySeconds(`${totalSeconds} Seconds`);

      calculateByYears(totalSeconds);
      calculateByMonths(totalSeconds);
      calculateByWeeks(totalSeconds);
      calculateByDays(totalSeconds);
      calculateByHours(totalSeconds);
      calculateByMinutes(totalSeconds);
    } else {
      alert("Please enter valid dates!");
    }
  };

  return (
    <div className="h-auto min-h-screen w-full overflow-x-hidden bg-age-calc bg-cover bg-fixed bg-center px-2 py-6 font-quicksand sm:py-12">
      <div className="mx-auto w-full max-w-[700px]">
        <form
          onSubmit={handleCalculateAge}
          className="flex h-auto w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-0"
        >
          <div className="flex w-full flex-col gap-[0.4rem] sm:w-[40%]">
            <label
              htmlFor="birth-date"
              className="text-lg font-medium text-neutral-400"
            >
              Date of Birth
            </label>
            <input
              value={dob}
              onChange={(e) => handleInputChange(e, "dob")}
              id="birth-date"
              type="date"
              className="w-full rounded-s-md border-r-2 border-neutral-600 bg-[#212121] px-3 py-[0.425rem] text-lg text-white outline-none"
            />
          </div>
          <div className="flex w-full flex-col gap-[0.4rem] sm:w-[40%]">
            <label
              htmlFor="age-at-the-date"
              className="text-lg font-medium text-neutral-400"
            >
              Age at the date of
            </label>
            <input
              value={ageAtDate}
              onChange={(e) => handleInputChange(e, "ageAt")}
              id="age-at-the-date"
              type="date"
              className="w-full border-none bg-[#212121] px-3 py-[0.425rem] text-lg text-white outline-none"
            />
          </div>
          <button className="h-11 w-[120px] rounded-e-md border-none bg-[seagreen] px-3 text-lg font-medium text-white outline-none sm:w-[20%]">
            Calculate
          </button>
        </form>

        {ageByYears && (
          <div className="mt-6">
            <p className="text-xl font-medium text-neutral-400 underline">
              Result
            </p>
            <p className="mt-4 text-xl text-white">{ageByYears}</p>
            <p className="mt-4 text-xl text-white">or, {ageByMonths}</p>
            <p className="mt-4 text-xl text-white">or, {ageByWeeks}</p>
            <p className="mt-4 text-xl text-white">or, {ageByDays}</p>
            <p className="mt-4 text-xl text-white">or, {ageByHours}</p>
            <p className="mt-4 text-xl text-white">or, {ageByMinutes}</p>
            <p className="mt-4 text-xl text-white">or, {ageBySeconds}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
