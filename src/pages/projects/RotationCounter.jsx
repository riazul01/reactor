import React from 'react';

const RotationCounter = () => {
    return (
        <div className="px-[0.4rem] font-ace w-full h-[100vh] flex flex-col items-center justify-center gap-[2rem] bg-[#111]">
            <div className="relative h-[400px] w-[400px]">
                <div className="relative h-full w-full">
                    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rotate-45 h-full w-[40px] bg-green-800 z-0 rounded-tl-3xl rounded-br-3xl"></div>
                    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-[80px] w-[80px] z-10 bg-green-800"></div>
                    <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] -rotate-45 h-full w-[40px] bg-green-800 z-0 rounded-tl-3xl rounded-br-3xl"></div>
                </div>
                <div className="absolute bottom-0 -right-[4rem] flex flex-col gap-[1rem]">
                    <button className="text-base text-white bg-green-800 px-2.5 py-1 rounded-sm clip-hexagon">5</button>
                    <button className="text-base text-white bg-green-800 px-2.5 py-1 rounded-sm clip-hexagon">4</button>
                    <button className="text-base text-white bg-green-800 px-2.5 py-1 rounded-sm clip-hexagon">3</button>
                    <button className="text-base text-white bg-green-800 px-2.5 py-1 rounded-sm clip-hexagon">2</button>
                    <button className="text-base text-white bg-green-800 px-2.5 py-1 rounded-sm clip-hexagon">1</button>
                </div>
            </div>
            <button className="px-7 py-3 bg-green-800 rounded-sm text-white text-[1rem] font-medium uppercase">Start</button>
            {/* <div className="flex flex-col gap-[1rem]"> */}
                <p className="fixed bottom-8 left-8 text-[#fff] text-[1.2rem]">Count: {12340}</p>
            {/* </div> */}
        </div>
    );
}

export default RotationCounter;