import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            {/* https://googlefonts.github.io/noto-emoji-animation/ */}
            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f6a9/512.gif" alt="🚩" width="42" height="42"/>
            <h1>Project List</h1>
            <Link to="/clock" className="projectLink">01. Clock</Link><br/>
            <Link to="/stopwatch" className="projectLink">02. Stopwatch</Link><br/>
            <Link to="/recursive-partitioning" className="projectLink">03. Recursive Partitioning</Link><br/>
            <p className="footer">Created by <a href="https://github.com/riazul01" className="gitHubLink" target="_blank" rel="noreferrer">riazul01</a></p>
        </div>
    );
}

export default Home;