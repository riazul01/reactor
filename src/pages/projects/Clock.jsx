import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="mx-auto flex items-center justify-center h-[100vh] w-full bg-[#494278] clock-bg bg-cover bg-fixed" style={{fontFamily: 'IBM Plex Mono, monospace'}}>
            <div className="p-[1rem]">
                <h1 className="text-[#fff] text-[5rem] text-center font-[300] drop-shadow-lg">{time}</h1>
                <p className="mt-[1rem] text-[#fff] text-[2.4rem] font-[300] text-center drop-shadow-lg">{date}</p>
            </div>
            <Link to="/" className="fixed bottom-[3rem] left-[5%] text-[#ccc] text-[1.2rem] font-[400] underline">Home</Link>
        </div>
    );
}

export default Clock;