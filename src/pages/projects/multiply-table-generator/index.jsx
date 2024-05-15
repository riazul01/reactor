import React from 'react';
import MultiplyTable from './MultiplyTable';

const MultiplyTableGenerator = () => {
    return (
        <div className="px-[0.4rem] py-[3rem] font-albert w-full h-auto min-h-[100vh] bg-slate-950">
            <div className="mx-auto w-full max-w-[1420px]">
                <div className="flex items-center outline-none rounded-lg overflow-hidden">
                    <p className="px-[1.2rem] text-[#fff] text-[1.2rem] flex items-center justify-center h-[44px] font-[500] bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">Range</p>
                    <input name="limit" className="px-[0.6rem] h-[44px] w-[160px] text-[#fff] text-[1.2rem] bg-[#000] border-[2px] border-emerald-500 rounded-r-lg outline-none"/>
                </div>

                <div className="mt-[2rem] grid grid-cols-5 gap-[1rem]">
                    <MultiplyTable tableNo={1}/>
                    <MultiplyTable tableNo={2}/>
                    <MultiplyTable tableNo={3}/>
                    <MultiplyTable tableNo={4}/>
                    <MultiplyTable tableNo={5}/>
                    <MultiplyTable tableNo={6}/>
                    <MultiplyTable tableNo={7}/>
                    <MultiplyTable tableNo={8}/>
                    <MultiplyTable tableNo={9}/>
                    <MultiplyTable tableNo={10}/>
                    <MultiplyTable tableNo={11}/>
                </div>
            </div>
        </div>
    );
}

export default MultiplyTableGenerator;