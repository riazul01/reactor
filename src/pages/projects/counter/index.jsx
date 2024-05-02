import React, { useState } from 'react';
import Count from './Count';

const Counter = () => {
    const [counters, setCounters] = useState([0]);

    const handleClick = () => {
        setCounters([...counters, counters.length]);
    }

    return (
        <div className="w-full h-[100vh] bg-[#000]">
            <div className="p-[2rem] w-full h-auto grid grid-cols-6 items-start gap-[1rem]" style={{fontFamily: "'Jersey 15', sans-serif"}}>
                {counters.map((item) => {
                    return <Count key={item}/>
                })}
                <div onClick={handleClick} className="h-[140px] w-full flex items-center justify-center bg-[transparent] border-[2px] border-dashed border-[#888] rounded-lg" >
                    <button className="h-[4rem] w-[4rem] flex items-center justify-center text-[3rem] font-bold rounded-full bg-[#333]">+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;