import React from 'react';
import useCounter from './useCounter';

const Count = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div className="h-[140px] w-full flex flex-col items-center justify-center bg-[#111] rounded-lg">
            <h1 className="text-[#fff] text-[3rem] text-center">{count}</h1>
            <div className="mb-[1.5rem] flex items-center justify-center gap-[1rem]">
                <button onClick={increment} className="h-[2rem] w-[2rem] text-[#fff] text-[1.3rem] font-bold bg-[#333] rounded-md">+</button>
                <button onClick={decrement} className="h-[2rem] w-[2rem] text-[#fff] text-[1.3rem] font-bold bg-[#333] rounded-md">-</button>
            </div>
        </div>
    );
}

export default Count;