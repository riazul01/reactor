import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ data }) => {
    return (
        <div className="h-[300px] w-full flex flex-col items-center justify-center bg-[#111] border-[1px] border-[#000] rounded-[1.2rem] overflow-hidden">
            <Link to={data.link} className="relative w-full h-[80%] overflow-hidden">
                <img className="h-full w-full object-cover transform hover:scale-125 transition-all duration-300 ease-in-out" src={data.image} alt="thumb"/>
                <div className="absolute bottom-[0.8rem] left-[1rem] flex items-center gap-[0.2rem] tags">
                    {data.tags.map((tag, index) => {
                        return <span key={index} className={`px-[0.6rem] py-[0.2rem] text-[0.9rem] font-[500] rounded-[1.2rem] ${tag}`}>{tag}</span>
                    })}
                </div>
            </Link>
            <div className="relative w-full h-[20%] flex items-center">
                <Link to={data.link} className="project-title ps-[0.85rem] text-[1.2rem]" target="_blank" rel="noreferrer">{`#${(data.id).toString().padStart(2, '0')}. ${data.name}`}</Link>
                <FaExternalLinkAlt className="icon-link text-[1.1rem] absolute top-[50%] right-[1rem] translate-y-[-50%] opacity-0 invisible pointer-events-none transition-all duration-300 ease-in-out"/>
            </div>
        </div>
    );
}

export default ProjectCard;