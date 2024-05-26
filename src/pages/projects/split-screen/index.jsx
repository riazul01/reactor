import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Screens from './Screens';
import Screen from './Screen';

const SplitScreen = () => {
    const [activeScreens, setActiveScreens] = useState({v: false, h: false});

    return (
        <div className="p-[0.2rem] w-full h-[100vh] flex items-center justify-center font-poppins">
            {!(activeScreens.v || activeScreens.h) ? <Screen activeRemoveBtn={false} setActiveScreens={setActiveScreens}/>
            : <Screens v={activeScreens.v} h={activeScreens.h}/>}
        </div>
    );
}

export default SplitScreen;