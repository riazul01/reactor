import React from 'react';
import Header from '../components/Header';
import './home.css';
import Card from '../components/Card';
import Img from '../assets/images/nano-sites.png';

const Home = () => {
    return (
        <div className="home">
            <Header/>

            <div className="projects">
                <Card thumb={Img} title={"Project Title"} path={'/test'}/>
                <Card thumb={Img} title={"Project Title"} path={'/test'}/>
                <Card thumb={Img} title={"Project Title"} path={'/test'}/>
                <Card thumb={Img} title={"Project Title"} path={'/test'}/>
                <Card thumb={Img} title={"Project Title"} path={'/test'}/>
            </div>
        </div>
    );
}

export default Home;