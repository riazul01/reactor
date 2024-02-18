import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ thumb, title, path }) => {
    return (
        <div className="card">
            <Link to={path}>
                <div className="thumb">
                    <img src={thumb} alt="project-thumb" />
                    <div className="tags">
                        <span className="react">react</span>
                        <span className="css">css</span>
                    </div>
                </div>
            </Link>
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Card;