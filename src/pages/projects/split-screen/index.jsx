import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Screens from './Screens';
import Screen from './Screen';

const SplitScreen = () => {
    const [activeScreens, setActiveScreens] = useState({v: false, h: false});

    return (
        <div className="p-[0.2rem] w-full h-[100vh] flex items-center justify-center">
            {!(activeScreens.v || activeScreens.h) ? <Screen activeRemoveBtn={false} setActiveScreens={setActiveScreens}/>
            : <Screens v={activeScreens.v} h={activeScreens.h}/>}
            <Link to="/" className="fixed bottom-[3rem] left-[5%] text-[#555] text-[1.2rem] font-[500] underline">Home</Link>
        </div>
    );
}

export default SplitScreen;