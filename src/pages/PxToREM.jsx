import React, { useState, useEffect } from 'react';
import { LuArrowLeftRight } from "react-icons/lu";

const PxToREM = () => {
    const [px, setPx] = useState('');
    const [rem, setRem] = useState('');

    // useEffect(() => {
    //     setRem((parseInt(px) / 16).toString());
    // }, [px]);

    // useEffect(() => {
    //     setPx((parseInt(rem) * 16).toString());
    // }, [rem]);

    const handleChange = (e, type) => {
        console.log(e.target.value);
        if (type === 'px') {
            setPx(e.target.value);
        } else {
            setRem(e.target.value);
        }
    }

    return (
        <div className="px-[0.4rem] h-[100vh] w-full">
            <div className="mx-auto pt-[6rem] w-full max-w-[1000px] box-border">
                <h1 className="text-[#aaa] text-[1.4rem] text-center">PX To REM Converter</h1>
                <div className="mt-[4rem] w-full flex items-center justify-center gap-[1rem]">
                    <div className="relative w-full max-w-[280px]">
                        {/* remove number type input arrows in tailwind */}
                        {/* [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none */}
                        <input value={px} onChange={(e) => handleChange(e, 'px')} id="px" type="text" placeholder="PX" className="ps-[0.8rem] text-[#fff] text-[1.2rem] h-[50px] w-full bg-transparent border-[1px] border-[#444] outline-none box-border"/>
                        <label htmlFor="px" className="absolute top-[-2rem] left-[50%] transform translate-x-[-50%] text-[#aaa] text-[1.3rem]">Pixels</label>
                    </div>
                    <LuArrowLeftRight className="text-[#999] text-[1.4rem] cursor-pointer"/>
                    <div className="relative w-full max-w-[280px]">
                        <input value={rem} onChange={(e) => handleChange(e, 'rem')} id="rem" type="text" placeholder="REM" className="ps-[0.8rem] text-[#fff] text-[1.2rem] h-[50px] w-full bg-transparent border-[1px] border-[#444] outline-none box-border"/>
                        <label htmlFor="rem" className="absolute top-[-2rem] left-[50%] transform translate-x-[-50%] text-[#aaa] text-[1.3rem]">REM</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PxToREM;