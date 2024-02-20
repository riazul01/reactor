import React from 'react';
import './home.css';

// components
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';

// images
import ClockThumb from '../../assets/images/clock_thumb.png';
import StopwatchThumb from '../../assets/images/stopwatch_thumb.png';
import PasswordCheckerThumb from '../../assets/images/password-checker_thumb.png';
import FormValidatorThumb from '../../assets/images/form-validator_thumb.png';
import TextAnalyzerThumb from '../../assets/images/text-analyzer_thumb.png';
import RecursivePartitioningThumb from '../../assets/images/recursive-partitioning_thumb.png';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="projects">
                <Card thumb={ClockThumb} title={"#01. Digital Clock"} path={"/clock"}/>
                <Card thumb={StopwatchThumb} title={"#02. Stopwatch"} path={"/stopwatch"}/>
                <Card thumb={PasswordCheckerThumb} title={"#03. Password Strength Checker"} path={"/password-checker"}/>
                <Card thumb={FormValidatorThumb} title={"#04. Form Validator"} path={"/form-validator"}/>
                <Card thumb={TextAnalyzerThumb} title={"#05. Text Analyzer"} path={"/text-analyzer"}/>
                <Card thumb={RecursivePartitioningThumb} title={"#06. Recursive Partitioning"} path={"/recursive-partitioning"}/>
            </div>
        </div>
    );
}

export default Home;