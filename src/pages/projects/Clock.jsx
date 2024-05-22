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
    <div className="mx-auto font-mono flex flex-col items-center justify-center gap-4 h-screen w-full bg-clock bg-cover bg-fixed">
      <h1 className="text-white text-[5rem] text-center font-light drop-shadow-lg">
        {time}
      </h1>
      <p className="text-white text-[2.4rem] text-center font-light drop-shadow-lg">
        {date}
      </p>
    </div>
  );
};

export default Clock;
