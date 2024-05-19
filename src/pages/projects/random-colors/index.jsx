import React, { useState } from 'react';
import { colors } from './colors';

const RandomColors = () => {
    const [colorData, setColorData] = useState(colors[0]);

    const handleRandomColor = () => {
        setColorData(colors[parseInt(Math.random() * colors.length)]);
    }

    const handlePrevColor = (id) => {
        if (id === 1) {
            setColorData(colors[colors.length - 1]);
        } else {
            setColorData(colors[id - 2]);
        }
    }

    const handleNextColor = (id) => {
        if (id === colors.length) {
            setColorData(colors[0]);
        } else {
            setColorData(colors[id]);
        }
    }

    return (
        <div className="px-[0.4rem] pt-[7rem] w-full h-[100vh] font-marcellus overflow-hidden bg-[#000]">
            <div className="mx-auto h-auto w-full max-w-[640px]">
                <h1 className="pb-[3rem] text-[1.3rem] text-center font-[600] uppercase cursor-default underline" style={{color: colorData.color}}>Random colors</h1>
                
                <div className="flex items-center justify-start gap-[2rem]">
                    <div className={`h-[280px] w-[280px] rounded-full`} style={{background: colorData.color}}></div>
                    <div>
                        <p className="mt-[1rem] pb-[0.4rem] text-[1.2rem] text-[#fff] flex items-center justify-start">
                            <strong className="w-[120px] cursor-default" style={{color: colorData.color}}>Color</strong>
                            <span className="">{colorData.color}</span>
                        </p>
                        <p className="mt-[0.4rem] pb-[0.4rem] text-[1.2rem] text-[#fff] flex items-center justify-start">
                            <strong className="w-[120px] cursor-default" style={{color: colorData.color}}>HEX</strong>
                            <span className="">{colorData.hex}</span>
                        </p>
                        <p className="mt-[0.4rem] pb-[0.4rem] text-[1.2rem] text-[#fff] flex items-center justify-start">
                            <strong className="w-[120px] cursor-default" style={{color: colorData.color}}>rgb</strong>
                            <span className="">{colorData.rgb}</span>
                        </p>
                        <div className="flex items-center gap-[0.8rem]">
                            <button onClick={handleRandomColor} className="mt-[1rem] px-[0.8rem] py-[0.4rem] text-[#fff] font-[600] border-none outline-none bg-[#222]">Random Color</button>
                            <button onClick={() => handlePrevColor(colorData.id)} className="mt-[1rem] px-[0.8rem] py-[0.4rem] text-[1rem] text-[#fff] font-[600] border-none outline-none bg-[#222]">Prev</button>
                            <button onClick={() => handleNextColor(colorData.id)} className="mt-[1rem] px-[0.8rem] py-[0.4rem] text-[1rem] text-[#fff] font-[600] border-none outline-none bg-[#222]">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandomColors;