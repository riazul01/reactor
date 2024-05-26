import React from 'react';

const RotationCounter = () => {
    return (
        <div className="px-[0.4rem] font-ace w-full h-[100vh] flex flex-col items-center justify-center gap-[2rem] bg-[#222]">
            <div className="relative h-[400px] w-[400px]">
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] rotate-45 h-full w-[40px] bg-[red] rounded-3xl"></div>
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] h-[100px] w-[100px] bg-[red] rounded-full"></div>
                <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] -rotate-45 h-full w-[40px] bg-[red] rounded-3xl"></div>
                <div className="absolute bottom-0 -right-[4rem] flex flex-col gap-[1rem]">
                    <button>5</button>
                    <button>4</button>
                    <button>3</button>
                    <button>2</button>
                    <button>1</button>
                </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
                <p className="text-[#fff] text-[1.2rem]">Count: {12340}</p>
                <button className="px-[0.6rem] py-[0.2rem] bg-green-900 text-white text-[1rem] font-medium uppercase">Start</button>
            </div>
        </div>
    );
}

export default RotationCounter;