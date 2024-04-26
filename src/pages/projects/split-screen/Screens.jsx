import React, { useState } from 'react';
import Screen from './Screen';

const Screens = ({v, h}) => {
    const [activeScreens1, setActiveScreens1] = useState({v: false, h: false});
    const [activeScreens2, setActiveScreens2] = useState({v: false, h: false});

    return (
        <div className={`w-full h-full flex ${h ? 'flex-col' : 'flex-row'} items-center justify-center gap-[0.2rem]`}>
            {(activeScreens1.v || activeScreens1.h) ? <Screens v={activeScreens1.v} h={activeScreens1.h}/> : <Screen activeRemoveBtn={true} setActiveScreens={setActiveScreens1}/>}
            {(activeScreens2.v || activeScreens2.h) ? <Screens v={activeScreens2.v} h={activeScreens2.h}/> : <Screen activeRemoveBtn={true} setActiveScreens={setActiveScreens2}/>}
        </div>
    );
}

export default Screens;