import React from 'react';
import Header from '../components/Header';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="projects"></div>
        </div>
    );
}

export default Home;