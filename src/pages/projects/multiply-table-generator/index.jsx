import React, { useState, useEffect } from 'react';
import MultiplyTable from './MultiplyTable';

const MultiplyTableGenerator = () => {
    const [rangeInput, setRangeInput] = useState('1-20');
    const [rangeArray, setRangeArray] = useState([]);

    useEffect(() => {
        const tempArr = rangeInput.split('-').filter((ch) => {
            return !isNaN(parseInt(ch)) ? ch : null;
        });

        const minVal = Math.min(...tempArr);
        const maxVal = Math.max(...tempArr);

        const newRangeArr = [];

        for (let i = minVal; i <= maxVal; i ++) {
            newRangeArr.push(i);
        }

        setRangeArray(newRangeArr);
    }, [rangeInput]);

    const handleInputChange = (e) => {
        setRangeInput(e.target.value);
    }

    return (
        <div className="px-[0.4rem] py-[3rem] font-albert w-full h-auto min-h-[100vh] bg-slate-950">
            <div className="mx-auto w-full max-w-[1420px]">
                <div className="flex items-center outline-none rounded-lg overflow-hidden">
                    <p className="px-[1.2rem] text-[#fff] text-[1.2rem] flex items-center justify-center h-[44px] font-[500] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">Range</p>
                    <input value={rangeInput} onChange={handleInputChange} name="limit" className="px-[0.6rem] h-[44px] w-[160px] text-[#fff] text-[1.2rem] bg-transparent border-[2px] border-emerald-500 rounded-r-lg outline-none"/>
                </div>

                <div className="mt-[2rem] grid grid-cols-5 gap-[1rem]">
                    {rangeArray.map((tableNo, index) => {
                        return <MultiplyTable key={index} tableNo={tableNo}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default MultiplyTableGenerator;