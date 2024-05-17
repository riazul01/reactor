import React, { useCallback, useEffect, useRef } from 'react';
import { tailwindColors, tailwindColorsShades } from './colors';

const MultiplyTable = ({ tableNo }) => {
    const table = useRef([]);

    const colorIndex = Math.floor(Math.random() * tailwindColors.length);
    const colorName = tailwindColors[colorIndex];
    const colorMain = tailwindColorsShades[colorName][700];
    const colorDark = tailwindColorsShades[colorName][800];
    const colorDarker = tailwindColorsShades[colorName][900];

    for (let i = 1; i <= 10; i ++) {
        let line = `${tableNo} X ${i} = ${tableNo * i}`;
        table.current[i - 1] = line;
    }

    return (
        <div className="w-full rounded-lg overflow-hidden">
            <h1 className="px-[1rem] py-[0.3rem] text-[1.4rem] text-[#fff] font-bold width-full" style={{background: colorMain}}>x{tableNo}</h1>
            {table.current.map((line, index) => {
                return <p key={index} className="px-[1rem] py-[0.4rem] text-[1.2rem] text-[#fff]" style={{background: (index % 2) ? colorDark : colorDarker}}>{line}</p>
            })}
        </div>
    );
}

export default MultiplyTable;