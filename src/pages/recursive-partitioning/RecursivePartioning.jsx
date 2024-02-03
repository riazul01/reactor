import React, { useState } from 'react';
import Screens from '../../components/screens/Screens';
import Screen from '../../components/screen/Screen';
import './recursive-partitioning.css';

const RecursivePartioning = () => {
    const [activeScreens, setActiveScreens] = useState({v: false, h: false});

    return (
        <div className="recursivePartition">
            {!(activeScreens.v || activeScreens.h) ? <Screen activeRemoveBtn={false} setActiveScreens={setActiveScreens}/>
            : <Screens v={activeScreens.v} h={activeScreens.h}/>}
        </div>
    );
}

export default RecursivePartioning;