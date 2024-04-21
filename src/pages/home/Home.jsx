import React from 'react';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';

import ClockImage from '../../assets/images/clock.png';

const projectData = [
    {
        id: '1',
        name: 'Digital Clock',
        image: ClockImage,
        tags: ['react', 'tailwind-css'],
        link: '/clock'
    }
]

const Home = () => {
    return (
        <div className="mx-auto px-[0.8rem] text-[#fff] h-auto w-full max-w-[1300px] min-h-[100vh] overflow-x-hidden">
            <Header/>
            <div className="py-[2rem] grid grid-cols-3">
                {projectData.map((project) => {
                    return <ProjectCard data={project}/>
                })}
            </div>
            {/* <Link to="/clock" className="projectLink">01. Clock</Link><br/>
            <Link to="/stopwatch" className="projectLink">02. Stopwatch</Link><br/>
            <Link to="/recursive-partitioning" className="projectLink">03. Recursive Partitioning</Link><br/> */}
            <p className="footer">Created by <a href="https://github.com/riazul01" className="gitHubLink" target="_blank" rel="noreferrer">riazul01</a></p>
        </div>
    );
}

export default Home;