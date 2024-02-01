import React, { useEffect, useRef, useState } from 'react';
import './stopwatch.css';

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
        <div className="stopWatch">
            <div className="stopWatchContent">
                <div className="watchBox">
                    <p>{String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, '0')}</p>
                    <p>{String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, '0')}</p>
                    <p>{String(Math.floor(elapsedTime / 1000 % 60)).padStart(2, '0')}</p>
                    <p>{String(Math.floor(elapsedTime % 1000)).padStart(3, '0')}</p>
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