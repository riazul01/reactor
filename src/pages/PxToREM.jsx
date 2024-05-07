import React, { useState } from 'react';
import { LuArrowLeftRight } from "react-icons/lu";

const PxToREM = () => {
    const [px, setPx] = useState('');
    const [rem, setRem] = useState('');
    const [pxToRem, setPxToRem] = useState(true);

    const handleChange = (e, type) => {
        if (type === 'px') {
            const pxValue = e.target.value;
            setPx(pxValue);
            if (pxValue !== '') {
                const remVlaue = parseFloat(pxValue) / 16;
                setRem(remVlaue);
            } else {
                setRem('');
            }
        } else {
            const remValue = e.target.value;
            setRem(remValue);
            if (remValue !== '') {
                const pxValue = parseFloat(remValue) * 16;
                setPx(pxValue);
            } else {
                setPx('');
            }
        }
    }

    return (
        <div className="px-[0.4rem] h-[100vh] w-full bg-[#121212]">
            <div className="mx-auto pt-[6rem] w-full max-w-[1000px] box-border">
                <h1 className="text-[#bbb] text-[1.4rem] text-center">{pxToRem ? 'PX To REM' : 'REM To PX'} Converter</h1>
                <div className={`mt-[4rem] w-full flex ${pxToRem ? 'flex-row' : 'flex-row-reverse'} items-center justify-center gap-[1rem]`}>
                    <div className="relative w-full max-w-[280px]">
                        <input value={px} onChange={(e) => handleChange(e, 'px')} id="px" type="number" placeholder="PX" className="ps-[0.8rem] text-[#fff] text-[1.2rem] placeholder:text-[#888] h-[50px] w-full bg-transparent border-[1px] border-[#444] outline-none box-border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                        <label htmlFor="px" className="absolute top-[-2rem] left-[50%] transform translate-x-[-50%] text-[#bbb] text-[1.3rem]">Pixels</label>
                    </div>
                    <LuArrowLeftRight onClick={() => setPxToRem(!pxToRem)} className="text-[#888] text-[1.4rem] cursor-pointer"/>
                    <div className="relative w-full max-w-[280px]">
                        <input value={rem} onChange={(e) => handleChange(e, 'rem')} id="rem" type="number" placeholder="REM" className="ps-[0.8rem] text-[#fff] text-[1.2rem] placeholder:text-[#888] h-[50px] w-full bg-transparent border-[1px] border-[#444] outline-none box-border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                        <label htmlFor="rem" className="absolute top-[-2rem] left-[50%] transform translate-x-[-50%] text-[#bbb] text-[1.3rem]">REM</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PxToREM;