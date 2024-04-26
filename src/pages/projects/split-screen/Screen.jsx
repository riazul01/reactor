import React from 'react';

const Screen = ({ setActiveScreens }) => {
    const handleVClick = () => {
        setActiveScreens({v: true, h: false});
    };

    const handleHClick = () => {
        setActiveScreens({v: false, h: true});
    };

    return (
        <div className="w-full h-full flex items-center justify-center bg-[#28282c] rounded-[0.4rem]">
            <button onClick={handleVClick} className="px-[0.65rem] py-[0.25rem] text-[#fff] text-[1rem] border-[1px] border-[#444] outline-none cursor-pointer bg-[#222] rounded-l-[0.3rem] border-r-0">V</button>
            <button onClick={handleHClick} className="px-[0.65rem] py-[0.25rem] text-[#fff] text-[1rem] border-[1px] border-[#444] outline-none cursor-pointer bg-[#222] rounded-r-[0.3rem]">H</button>
        </div>
    );
}

export default Screen;