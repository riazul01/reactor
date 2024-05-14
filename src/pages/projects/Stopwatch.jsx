import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [controls, setControls] = useState({start: false, pause: true, reset: true});
    const startTimeRef = useRef(null);
    const timerId = useRef(null);
    
    useEffect(() => {
        if (controls.start) {
            timerId.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => clearInterval(timerId.current);
    }, [controls.start]);

    const startTimer = () => {
        setControls({start: true, pause: false, reset: false});
        startTimeRef.current = Date.now() - elapsedTime;
    }

    const pauseTimer = () => {
        setControls({pause: true, start: false, reset: false});
    }

    const resetTimer = () => {
        setControls({reset: true, pause: true, start: false});
        setElapsedTime(0);
    }

    return (
        <div className="h-[100vh] w-full font-sans flex items-center justify-center stopwatch-bg bg-cover bg-fixed">
            <div className="mx-[0.6rem] my-0 p-[1rem] w-auto h-auto flex flex-col items-center justify-center bg-[#000] bg-opacity-30 backdrop-blur rounded-[2rem]">
                <div className="px-0 py-[1.2rem] flex flex-wrap items-center justify-center">
                    <p className="m-[0.2rem] w-[120px] text-[#fff] text-[3rem] text-center font-[500] rounded-[0.2rem]">
                        {String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0')}
                        <span className="ml-[0.4rem] text-[1.3rem]">hh</span>
                    </p>
                    <p className="m-[0.2rem] w-[120px] text-[#fff] text-[3rem] text-center font-[500] rounded-[0.2rem]">
                        {String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, '0')}
                        <span className="ml-[0.4rem] text-[1.3rem]">mm</span>
                    </p>
                    <p className="m-[0.2rem] w-[120px] text-[#fff] text-[3rem] text-center font-[500] rounded-[0.2rem]">
                        {String(Math.floor(elapsedTime / 1000 % 60)).padStart(2, '0')}
                        <span className="ml-[0.4rem] text-[1.3rem]">ss</span>
                    </p>
                    <p className="m-[0.2rem] w-[120px] text-[#fff] text-[3rem] text-center font-[500] rounded-[0.2rem]">
                        {String(Math.floor(elapsedTime % 1000)).padStart(3, '0')}
                        <span className="ml-[0.4rem] text-[1.3rem]">ms</span>
                    </p>
                </div>
                <div className="pt-[0.6rem] pb-[1rem] flex flex-wrap items-center justify-center">
                    <button onClick={startTimer} disabled={controls.start} className={`m-[0.4rem] px-[1rem] py-[0.4rem] text-[1.2rem] font-[600] font-sans uppercase border-none outline-none cursor-pointer rounded-[0.2rem] transition-all ease-in-out duration-300 ${controls.start ? 'opacity-40' : 'opacity-100'} bg-[seagreen]`}>Start</button>
                    <button onClick={pauseTimer} disabled={controls.pause} className={`m-[0.4rem] px-[1rem] py-[0.4rem] text-[1.2rem] font-[600] font-sans uppercase border-none outline-none cursor-pointer rounded-[0.2rem] transition-all ease-in-out duration-300 ${controls.pause ? 'opacity-40' : 'opacity-100'} bg-[crimson]`}>Pause</button>
                    <button onClick={resetTimer} disabled={controls.reset} className={`m-[0.4rem] px-[1rem] py-[0.4rem] text-[1.2rem] font-[600] font-sans uppercase border-none outline-none cursor-pointer rounded-[0.2rem] transition-all ease-in-out duration-300 ${controls.reset ? 'opacity-40' : 'opacity-100'} bg-[steelblue]`}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;