import React, { useState, useEffect } from 'react';
import MultiplyTable from './MultiplyTable';

const MultiplyTableGenerator = () => {
    const [rangeInput, setRangeInput] = useState('1-20');
    const [range, setRange] = useState([]);

    useEffect(() => {
        const tempArr = rangeInput.split('-').filter((ch) => {
            return !isNaN(parseInt(ch)) ? ch : null;
        });

        let min = parseInt(Math.min(...tempArr));
        let max = parseInt(Math.max(...tempArr));

        if (min !== max) {
            min = parseInt(Math.min(...tempArr).toString().slice(0, 4));
            max = parseInt(Math.max(...tempArr).toString().slice(0, 4));
        }

        if (min > max) {
            [min, max] = [max, min];
        }

        setRange([min, max]);
    }, [rangeInput]);

    const handleInputChange = (e) => {
        let value = e.target.value;

        setTimeout(() => {
            if (value === '') {
                setRangeInput('');
            }
            if (/^[0-9-]+$/.test(value)) {
                setRangeInput(value);
            }
        }, 1200);
    }

    return (
        <div className="px-[0.4rem] py-[3rem] font-albert w-full h-auto min-h-[100vh] bg-table bg-cover bg-fixed">
            <div className="mx-auto w-full max-w-[1420px]">
                <div className="width-full flex items-center justify-between">
                    <div className="flex items-center outline-none rounded-lg overflow-hidden">
                        <p className="px-[1.2rem] text-[#fff] text-[1.2rem] flex items-center justify-center h-[44px] font-[500] bg-sky-600">Range</p>
                        <input onChange={handleInputChange} name="limit" className="px-[0.6rem] h-[44px] w-[160px] text-[#fff] text-[1.2rem] bg-transparent border-[2px] border-sky-600 rounded-r-lg outline-none" placeholder={rangeInput === "1-20" ? "1-20" : "![range]"}/>
                    </div>
                    <p className="text-[#aaa] text-[1rem] italic">Multiplication table from {range[0]} to {range[1]}</p>
                </div>

                <div className="mt-[2rem] grid grid-cols-5 gap-[1rem]">
                    {Array.from({ length: range[1] - range[0] + 1 }, (_, i) => i + range[0]).map((tableNo, index) => {
                        return <MultiplyTable key={index} tableNo={tableNo}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default MultiplyTableGenerator;