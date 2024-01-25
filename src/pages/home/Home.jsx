import React from 'react';

// components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="projects"></div>
            <Footer/>
        </div>
    );
}

export default Home;