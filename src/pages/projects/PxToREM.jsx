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
        <div className="px-[0.4rem] h-[100vh] w-full font-alegreya bg-slate-950">
            <div className="mx-auto pt-[6rem] w-full max-w-[1000px]">
                <button onClick={() => setPxToRem(!pxToRem)} className="fixed top-[2rem] left-0 ps-[1rem] pe-[3rem] py-[0.4rem] text-[#bbb] text-[1.5rem] uppercase cursor-pointer bg-slate-800" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'}}>{pxToRem ? 'PX To REM' : 'REM To PX'} Converter</button>
                <div className={`mt-[5rem] w-full flex ${pxToRem ? 'flex-row' : 'flex-row-reverse'} items-center justify-center gap-[1rem]`}>
                    <div className="relative w-full max-w-[280px]">
                        <input id="px" value={px} onChange={(e) => handleChange(e, 'px')} type="number" placeholder="PX" className="ps-[1.8rem] text-[#fff] text-[1.3rem] placeholder:text-[#888] h-[50px] w-full bg-transparent border-[1px] border-slate-800 outline-none box-border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" title="type or swipe"/>
                        <label htmlFor="px" className="absolute top-[50%] -left-[1rem] transform translate-y-[-50%] -rotate-90 text-[#bbb] text-[0.8rem] text-center w-[50px] bg-slate-800">Pixels</label>
                    </div>
                    <LuArrowLeftRight onClick={() => setPxToRem(!pxToRem)} className="text-[#888] text-[1.4rem] cursor-pointer"/>
                    <div className="relative w-full max-w-[280px]">
                        <input id="rem" value={rem} onChange={(e) => handleChange(e, 'rem')} type="number" placeholder="REM" className="ps-[1.8rem] text-[#fff] text-[1.3rem] placeholder:text-[#888] h-[50px] w-full bg-transparent border-[1px] border-slate-800 outline-none box-border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" title="type or swipe"/>
                        <label htmlFor="rem" className="absolute top-[50%] -left-[1rem] transform translate-y-[-50%] -rotate-90 text-[#bbb] text-[0.8rem] text-center w-[50px] bg-slate-800">REM</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PxToREM;