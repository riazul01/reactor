import React from 'react';
import useCounter from './useCounter';

const Count = ({id, counters, setCounters}) => {
    const { count, increment, decrement } = useCounter();

    const handleClose = (id) => {
        setCounters([...counters.filter((countId) => countId !== id)]);
    }

    return (
        <div className={`relative h-[140px] w-full flex flex-col items-center justify-center bg-[#111] bg-opacity-50 rounded-lg`}>
            <h1 className="text-[#fff] text-[3rem] text-center">{count}</h1>
            <div className="mb-[1.5rem] flex items-center justify-center gap-[1rem]">
                <button onClick={decrement} className="px-[0.8rem] py-0 text-[#fff] text-[1.3rem] font-bold bg-[#111] border-[1px] border-solid border-[#333] rounded-md">-</button>
                <button onClick={increment} className="px-[0.8rem] py-0 text-[#fff] text-[1.3rem] font-bold bg-[#111] border-[1px] border-solid border-[#333] rounded-md">+</button>
            </div>
            <button onClick={() => handleClose(id)} className="absolute top-[-0.35rem] right-[-0.35rem] px-[0.8rem] py-0 text-[#fff] text-[1.3rem] font-bold bg-[#111] hover:bg-[red] transition-all duration-300 border-[4px] border-solid border-[#222831] rounded-lg" title="delete counter">X</button>
        </div>
    );
}

export default Count;