import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// icons
import { RiArrowDropRightLine } from 'react-icons/ri';
import { RiArrowDropLeftLine } from 'react-icons/ri';

import './header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [activeRightNav, setActiveRightNav] = useState(false);
    const [listCategory, setListCategory] = useState('react');

    useEffect(() => {
        const body = document.querySelector('body');
        body.onclick = () => {
            setToggle(false);
            setTimeout(() => {
                setActiveRightNav(false);
            }, 400);
        }
    });

    const handleToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
        setTimeout(() => {
            setActiveRightNav(false);
        }, 400);
    }

    const handleGoToRightNav = (category) => {
        setActiveRightNav(true);
        setListCategory(category);
    }

    const handleBackToLeftNav = () => {
        setActiveRightNav(false);
    }

    return (
        <div className="header">
            <h1>React Ripples</h1>
            <div className={`toggler ${toggle ? 'active' : null}`} onClick={handleToggle}>
                <span className="toggleBar"></span>
            </div>

            <div className={`navBox ${toggle ? 'activeNav' : null}`} onClick={(e) => e.stopPropagation()}>
                <ul className={`navLeft ${activeRightNav ? 'activeRight' : null}`}>
                    <li onClick={() => handleGoToRightNav('react')}>
                        <span>React Projects</span>
                        <RiArrowDropRightLine style={{fontSize: '2rem'}} />
                    </li>
                    <a href="https://nano-sites.vercel.app/">
                        <span>JavaScript Projects</span>
                        <RiArrowDropRightLine style={{fontSize: '2rem'}} />
                    </a>
                    <a href="https://nano-sites.vercel.app/">
                        <span>CSS Projects</span>
                        <RiArrowDropRightLine style={{fontSize: '2rem'}} />
                    </a>
                </ul>

                <div className={`navRight ${activeRightNav ? 'activeRight' : null}`}>
                    <ul className={(listCategory === 'react') ? 'activeList' : null}>
                        <li style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '0.4rem 0'}} onClick={handleBackToLeftNav}>
                            <RiArrowDropLeftLine style={{fontSize: '2rem'}} />
                            <span>back</span>
                        </li>
                        <li>
                            <Link to="/clock" target="_blank">Digital Clock</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;