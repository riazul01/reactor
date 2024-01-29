import React, { useEffect, useRef, useState } from 'react';
import './stopwatch.css';

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [updateTime, setUpdateTime] = useState(null);
    const [pauseDiff, setPauseDiff] = useState(0);

    const [displayTimer, setDisplayTimer] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        miliSeconds: ''
    });

    const [controls, setControls] = useState({
        start: false,
        pause: false,
        reset: false
    });

    // display timer
    useEffect(() => {
        let total_ms = updateTime - startTime;

        let days = Math.floor(total_ms / 86400000);
        total_ms =  total_ms % 86400000;

        let hours = Math.floor(total_ms / 3600000);
        total_ms =  total_ms % 3600000;

        let minutes = Math.floor(total_ms / 60000);
        total_ms =  total_ms % 60000;

        let seconds = Math.floor(total_ms / 1000);
        total_ms = total_ms % 1000;

        if (days < 10) {
            days = '0' + days;
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (total_ms < 100) {
            total_ms = '0' + total_ms;
        }

        setDisplayTimer({days, hours, minutes, seconds, miliSeconds: total_ms});

    }, [startTime, pauseDiff, updateTime]);

    let timerId = useRef(null);

    const startTimer = () => {
        setControls({start: true, pause: false, reset: false});
        setStartTime(Date.now());
        timerId.current = setInterval(() => {
            setUpdateTime(Date.now() + pauseDiff);
        }, 10);
    }

    const pauseTimer = () => {
        clearInterval(timerId.current);
        setPauseDiff(updateTime - startTime);
        setControls({pause: true, start: false, reset: false});
    }

    const resetTimer = () => {
        setControls({reset: true, pause: true, start: false});
        clearInterval(timerId.current);
        setStartTime(null);
        setUpdateTime(null);
        setPauseDiff(0);
    }

    return (
        <div className="stopWatch">
            <div className="stopWatchContent">
                <div className="watchBox">
                    <p>{displayTimer.hours}</p>
                    <p>{displayTimer.minutes}</p>
                    <p>{displayTimer.seconds}</p>
                    <p>{displayTimer.miliSeconds}</p>
                </div>
                <div className="controls">
                    <button onClick={startTimer} disabled={controls.start} style={{background: 'seagreen'}}>Start</button>
                    <button onClick={pauseTimer} disabled={controls.pause} style={{background: 'crimson'}}>Pause</button>
                    <button onClick={resetTimer} disabled={controls.reset} style={{background: 'steelblue'}}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Stopwatch;