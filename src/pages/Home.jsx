import React from 'react';
import Header from '../sections/Header';
import ProjectCard from '../components/ProjectCard';
import ClockImage from '../assets/images/clock.png';

const projectItems = [
    {
        id: '1',
        name: 'Digital Clock',
        image: ClockImage,
        tags: ['react', 'tailwind-css'],
        link: '/clock'
    },
    {
        id: '2',
        name: 'StopWatch',
        image: ClockImage,
        tags: ['react', 'tailwind-css'],
        link: '/stopwatch'
    },
    {
        id: '3',
        name: 'Recursive Partitioning',
        image: ClockImage,
        tags: ['react', 'tailwind-css'],
        link: '/recursive-partitioning'
    }
];

const Home = () => {
    return (
        <div className="mx-auto px-[0.8rem] text-[#fff] h-auto w-full max-w-[1300px] min-h-[100vh] overflow-x-hidden" style={{fontFamily: 'Belanosima, sans-serif'}}>
            <Header projectItems={projectItems}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projectItems.map((project) => {
                    return <ProjectCard key={project.id} data={project}/>
                })}
            </div>
            <p className="footer">Created by <a href="https://github.com/riazul01" className="gitHubLink" target="_blank" rel="noreferrer">riazul01</a></p>
        </div>
    );
}

export default Home;