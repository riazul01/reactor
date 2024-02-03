import React, { useState } from 'react';
import Screen from '../screen/Screen';
import './screens.css';

const Screens = ({v, h}) => {
    const [activeScreens1, setActiveScreens1] = useState({v: false, h: false});
    const [activeScreens2, setActiveScreens2] = useState({v: false, h: false});

    return (
        <div className="screens" style={h ? {flexDirection: 'column'} : {flexDirection: 'row'}}>
            {(activeScreens1.v || activeScreens1.h) ? <Screens v={activeScreens1.v} h={activeScreens1.h}/> : <Screen activeRemoveBtn={true} setActiveScreens={setActiveScreens1}/>}
            {(activeScreens2.v || activeScreens2.h) ? <Screens v={activeScreens2.v} h={activeScreens2.h}/> : <Screen activeRemoveBtn={true} setActiveScreens={setActiveScreens2}/>}
        </div>
    );
}

export default Screens;