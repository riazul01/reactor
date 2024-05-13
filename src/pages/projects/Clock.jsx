import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState('00:00:00 XM');
    const [date, setDate] = useState('day, month 00, 0000');

    useEffect(() => {
        let timer = setInterval(() => {

            const dt = new Date();

            const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            // Time
            let hour = dt.getHours();
            let minute = dt.getMinutes();
            let second = dt.getSeconds();

            let xm = (hour >= 12) ? 'PM' : 'AM';

            hour = (hour > 12) ? hour - 12 : hour;
            hour = (hour === 0) ? hour = 12 : hour;
            hour = (hour < 10) ? '0' + hour : hour;
            minute = (minute < 10) ? '0' + minute : minute;
            second = (second < 10) ? '0' + second : second;

            let newTime = `${hour}:${minute}:${second} ${xm}`;
            setTime(newTime);

            // Date
            let dayIndex = dt.getDay();
            let dayName = dayNames[dayIndex];

            let monthIndex = dt.getMonth();
            let monthName = monthNames[monthIndex];

            let today = dt.getDate();
            let year = dt.getFullYear();

            today = (today < 10) ? '0' + today : today;

            let newDate = `${dayName}, ${monthName} ${today}, ${year}`;
            setDate(newDate);

        }, 1000);

        return () => clearInterval(timer);

    }, [time, date]);

    return (
        <div className="mx-auto font-mono flex flex-col items-center justify-center gap-[1rem] h-[100vh] w-full clock-bg bg-cover bg-fixed">
            <h1 className="text-[#fff] text-[5rem] text-center font-[300] drop-shadow-lg">{time}</h1>
            <p className="text-[#fff] text-[2.4rem] font-[300] text-center drop-shadow-lg">{date}</p>
        </div>
    );
}

export default Clock;