import React from 'react';

// components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card from '../../components/card/Card';

// images
import ClockThumb from '../../assets/images/clock_thumb.png';
import StopwatchThumb from '../../assets/images/stopwatch_thumb.png';

import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="projects">
                <Card thumb={ClockThumb} title={"Digital Clock"} path={"/clock"}/>
                <Card thumb={StopwatchThumb} title={"Stopwatch"} path={"/stopwatch"}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;