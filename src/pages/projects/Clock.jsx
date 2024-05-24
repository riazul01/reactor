import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("00:00:00 XM");
  const [date, setDate] = useState("day, month 00, 0000");

  useEffect(() => {
    let timer = setInterval(() => {
      const dt = new Date();
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Time
      let hour = dt.getHours();
      let minute = dt.getMinutes();
      let second = dt.getSeconds();

      let xm = hour >= 12 ? "PM" : "AM";

      hour = hour > 12 ? hour - 12 : hour;
      hour = hour === 0 ? (hour = 12) : hour;

      let newTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}:${second.toString().padStart(2, "0")} ${xm}`;

      setTime(newTime);

      // Date
      let dayIndex = dt.getDay();
      let dayName = dayNames[dayIndex];

      let monthIndex = dt.getMonth();
      let monthName = monthNames[monthIndex];

      let today = dt.getDate();
      let year = dt.getFullYear();

      let newDate = `${dayName}, ${monthName} ${today
        .toString()
        .padStart(2, "0")}, ${year}`;

      setDate(newDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, date]);

  return (
    <div className="bg-clock mx-auto flex h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-cover bg-fixed font-mono">
      <h1 className="text-center text-[3rem] font-light text-white drop-shadow-lg md:text-[5rem]">
        {time}
      </h1>
      <p className="text-center text-[1.4rem] font-light text-white drop-shadow-lg md:text-[2.4rem]">
        {date}
      </p>
    </div>
  );
};

export default Clock;
