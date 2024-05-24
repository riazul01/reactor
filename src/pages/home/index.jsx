import React from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard';

import ClockImage from 'src/assets/images/thumbs/clock.png';
import StopwatchImage from 'src/assets/images/thumbs/stopwatch.png';
import SplitScreenImage from 'src/assets/images/thumbs/split-screen.png';
import TodoImage from 'src/assets/images/thumbs/todo.png';
import CounterImage from '/src/assets/images/thumbs/counter.png';
import RandomColorsImage from '/src/assets/images/thumbs/random-colors.png';
import PxToRemImage from '/src/assets/images/thumbs/px-to-rem.png';
import AgeCalculatorImage from '/src/assets/images/thumbs/age-calculator.png';
import PasswordGeneratorImage from '/src/assets/images/thumbs/password-generator.png';
import AlgorithmsImage from '/src/assets/images/thumbs/algorithms.png';
import RotationCounterImage from '/src/assets/images/thumbs/rotation-counter.png';
import MultiplicationTableImage from '/src/assets/images/thumbs/multiplication-table.png';
import Footer from './Footer';

const projectItems = [
    {
        id: 1,
        name: 'Digital Clock',
        image: ClockImage,
        tags: ['react', 'tailwindCSS'],
        link: '/clock'
    },
    {
        id: 2,
        name: 'StopWatch',
        image: StopwatchImage,
        tags: ['react', 'tailwindCSS'],
        link: '/stopwatch'
    },
    {
        id: 3,
        name: 'Todo App',
        image: TodoImage,
        tags: ['react', 'tailwindCSS'],
        link: '/todo'
    },
    {
        id: 4,
        name: 'Counter',
        image: CounterImage,
        tags: ['react', 'tailwindCSS'],
        link: '/counter'
    },
    {
        id: 5,
        name: 'Random Colors',
        image: RandomColorsImage,
        tags: ['react', 'tailwindCSS'],
        link: '/random-colors'
    },
    {
        id: 6,
        name: 'Px to REM Converter',
        image: PxToRemImage,
        tags: ['react', 'tailwindCSS'],
        link: '/px-to-rem'
    },
    {
        id: 7,
        name: 'Age Calculator',
        image: AgeCalculatorImage,
        tags: ['react', 'tailwindCSS'],
        link: '/age-calculator'
    },
    {
        id: 8,
        name: 'Random Password Generator',
        image: PasswordGeneratorImage,
        tags: ['react', 'tailwindCSS'],
        link: '/random-password-generator'
    },
    {
        id: 9,
        name: 'Algorithms',
        image: AlgorithmsImage,
        tags: ['react', 'tailwindCSS'],
        link: '/algorithms'
    },
    {
        id: 10,
        name: 'Rotation Counter',
        image: RotationCounterImage,
        tags: ['react', 'tailwindCSS'],
        link: '/rotation-counter'
    },
    {
        id: 11,
        name: 'Multiplication Table Generator',
        image: MultiplicationTableImage,
        tags: ['react', 'tailwindCSS'],
        link: '/multiplication-table-generator'
    },
    {
        id: 12,
        name: 'Split Screen',
        image: SplitScreenImage,
        tags: ['react', 'tailwindCSS'],
        link: '/split-screen'
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
            <Footer/>
        </div>
    );
}

export default Home;