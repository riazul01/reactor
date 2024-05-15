import React, { useRef } from 'react';

const MultiplyTable = ({ tableNo }) => {
    const table = useRef([]);

    if (table.current.length !== 10) {
        for (let i = 1; i <= 10; i ++) {
            let line = `${tableNo} X ${i} = ${tableNo * i}`;
            table.current.push(line);
        }
    }

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <h1 className="px-[1rem] py-[0.3rem] text-[1.4rem] text-[#fff] font-bold width-full bg-blue-700">x{tableNo}</h1>
            <div className="px-[1rem] py-[0.4rem] border-[2px] border-t-0 border-blue-700 rounded-b-lg bg-transparent">
                {table.current.map((line, index) => {
                    return <p key={index} className="py-[0.2rem] text-[1.2rem] text-[#fff]">{line}</p>
                })}
            </div>
        </div>
    );
}

export default MultiplyTable;