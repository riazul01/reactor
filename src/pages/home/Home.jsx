import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Project List</h1>
            <Link to="/clock" className="projectLink">01. Clock</Link>
            <Link to="/stopwatch" className="projectLink">02. Stopwatch</Link>
            <Link to="/recursive-partitioning" className="projectLink">03. Recursive Partitioning</Link>
            <p className="footer">Created by <a href="https://github.com/riazul01" className="gitHubLink" target="_blank" rel="noreferrer">riazul01</a></p>
        </div>
    );
}

export default Home;