import React from 'react';
import './screen.css';

const Screen = ({ setActiveScreens }) => {
    const handleVClick = () => {
        setActiveScreens({v: true, h: false});
    };

    const handleHClick = () => {
        setActiveScreens({v: false, h: true});
    };

    return (
        <div className="screen">
            <button onClick={handleVClick}>V</button>
            <button onClick={handleHClick}>H</button>
        </div>
    );
}

export default Screen;