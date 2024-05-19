import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Count from './Count';

const Counter = () => {
    const [counters, setCounters] = useState([uuidv4()]);

    const handleClick = () => {
        setCounters([...counters, uuidv4()]);
    }

    return (
        <div className="p-[2rem] w-full h-auto min-h-[100vh] font-jersey15 bg-[#222831]">
            <p className="mx-auto text-[1.6rem] text-[#fff] max-w-[1420px]">Counter: {counters.length}</p>
            <div className="mx-auto py-[1rem] w-full h-auto grid grid-cols-6 items-start gap-[1rem] max-w-[1420px]">
                {counters.map((item) => {
                    return <Count key={item} id={item} counters={counters} setCounters={setCounters}/>
                })}
                <div onClick={handleClick} className="h-[140px] w-full flex items-center justify-center cursor-pointer bg-[transparent] border-[2px] border-dashed border-[#333942] rounded-lg" title="add counter">
                    <button className="h-[4rem] w-[4rem] flex items-center justify-center text-[3rem] text-[#aaa] font-bold rounded-full bg-[#333942]">+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;