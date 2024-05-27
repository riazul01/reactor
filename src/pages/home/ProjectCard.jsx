import React from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const tagsColor = {
  html: "#de5e02",
  css: "#11a9fb",
  javascript: "#d2ae10",
  react: "#25eef8",
  tailwindCSS: "#06b6d4",
};

const ProjectCard = ({ data }) => {
  return (
    <div className="flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-[1.2rem] border border-black bg-[#111]">
      <Link to={data.link} className="relative h-[80%] w-full overflow-hidden">
        <img
          className="h-full w-full transform object-cover transition-all duration-300 ease-in-out hover:scale-125"
          src={data.image}
          alt="thumb"
        />
        <div className="absolute bottom-3 left-4 flex items-center gap-1">
          {data.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className={`rounded-[1.2rem] px-[0.6rem] py-[0.2rem] text-[0.9rem] font-medium shadow-lg text-shadow`}
                style={{ background: tagsColor[tag] }}
              >
                {tag === "tailwindCSS" ? "tailwind-css" : tag}
              </span>
            );
          })}
        </div>
      </Link>
      <div className="relative flex h-[20%] w-full items-center">
        <Link
          to={data.link}
          className="project-title ps-4 text-[1.2rem]"
          target="_blank"
          rel="noreferrer"
          title="open link in a new tab"
        >{`#${data.id.toString().padStart(2, "0")}. ${data.name}`}</Link>
        <FaExternalLinkAlt className="icon-link pointer-events-none invisible absolute right-4 top-1/2 -translate-y-1/2 text-[1.1rem] opacity-0 transition-all duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default ProjectCard;
