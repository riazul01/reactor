import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
    const [dob, setDOB] = useState('');
    const [ageAtDate, setAgeAtDate] = useState('');
    const [ageByYears, setAgeByYears] = useState('');
    const [ageByMonths, setAgeByMonths] = useState('');
    const [ageByWeeks, setAgeByWeeks] = useState('');
    const [ageByDays, setAgeByDays] = useState('');
    const [ageByHours, setAgeByHours] = useState('');
    const [ageByMinutes, setAgeByMinutes] = useState('');
    const [ageBySeconds, setAgeBySeconds] = useState('');
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
        if (type === 'dob') {
            setDOB(e.target.value);
        } else {
            setAgeAtDate(e.target.value);
        }
    }

    const calculateByYears = (totalSeconds) => {
        const years = Math.floor(totalSeconds / (dayConst * 365));
        totalSeconds = totalSeconds % (dayConst * 365);

        const months = Math.floor(totalSeconds / (dayConst * 30.44));
        totalSeconds = totalSeconds % (dayConst * 30.44);

        const days = Math.floor(totalSeconds / dayConst);
        totalSeconds = totalSeconds % dayConst;

        setAgeByYears(`${years} years, ${months} months, ${days} days`);
    }

    const calculateByMonths = (totalSeconds) => {
        const months = Math.floor(totalSeconds / (dayConst * 30.44));
        totalSeconds = totalSeconds % (dayConst * 30.44);

        const days = Math.floor(totalSeconds / dayConst);
        totalSeconds = totalSeconds % dayConst;

        setAgeByMonths(`${months} months, ${days} days`);
    }

    const calculateByWeeks = (totalSeconds) => {
        const weeks = Math.floor(totalSeconds / (dayConst * 7));
        totalSeconds = totalSeconds % (dayConst * 7);

        const days = Math.floor(totalSeconds / dayConst);
        totalSeconds = totalSeconds % dayConst;

        setAgeByWeeks(`${weeks} weeks, ${days} days`);
    }

    const calculateByDays = (totalSeconds) => {
        const days = Math.floor(totalSeconds / dayConst);
        setAgeByDays(`${days} days`);
    }

    const calculateByHours = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / (60 * 60));
        setAgeByHours(`${hours} hours`);
    }

    const calculateByMinutes = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        setAgeByMinutes(`${minutes} minutes`);
    }

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
            alert('Please enter valid dates!');
        }
    };

    return (
        <div className="px-[0.4rem] py-[3rem] w-full h-auto min-h-[100vh] bg-[#151515]" style={{fontFamily: '"DM Mono", monospace'}}>
            <div className="mx-auto w-full max-w-[700px]">
                <form onSubmit={handleCalculateAge} className="h-[100px] flex flex-row items-end justify-start gap-[0.6rem]">
                    <div className="flex flex-col gap-[0.4rem]">
                        <label htmlFor="birth-date" className="text-[#aaa] text-[1.2rem] font-[500]">Date of Birth:</label>
                        <input value={dob} onChange={(e) => handleInputChange(e, 'dob')} id="birth-date" type="date" className="text-[#fff] text-[1.1rem] bg-[#212121] px-[0.8rem] py-[0.4rem] w-[280px] border-none outline-none rounded-md"/>
                    </div>
                    <div className="flex flex-col gap-[0.4rem]">
                        <label htmlFor="age-at-the-date" className="text-[#aaa] text-[1.2rem] font-[500]">Age at the date of:</label>
                        <input value={ageAtDate} onChange={(e) => handleInputChange(e, 'ageAt')} id="age-at-the-date" type="date" className="text-[#fff] text-[1.1rem] bg-[#212121] px-[0.8rem] py-[0.4rem] w-[280px] border-none outline-none rounded-md"/>
                    </div>
                    <button className="px-[0.8rem] text-[#fff] text-[1.1rem] font-[500] h-[42px] bg-[seagreen] rounded-md">Calculate</button>
                </form>

                <div className="mt-[2rem]">
                    <p className="text-[#aaa] text-[1.2rem] font-[500]">Result:</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageByYears}</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageByMonths}</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageByWeeks}</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageByDays}</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageByHours}</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageByMinutes}</p>
                    <p className="mt-[1rem] text-[#fff] text-[1.2rem]">{ageBySeconds}</p>
                </div>
            </div>
        </div>
    );
}

export default AgeCalculator;