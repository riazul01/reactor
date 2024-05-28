import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const Header = ({ projects }) => {
  const [toggle, setToggle] = useState(false);
  const [activeRightNav, setActiveRightNav] = useState(false);
  const [listCategory, setListCategory] = useState("react");

  useEffect(() => {
    const body = document.querySelector("body");
    body.onclick = () => {
      setToggle(false);
      setTimeout(() => {
        setActiveRightNav(false);
      }, 400);
    };
  });

  const handleNavToggle = (e) => {
    e.stopPropagation();
    setToggle(!toggle);
    setTimeout(() => {
      setActiveRightNav(false);
    }, 400);
  };

  const handleGoToRightNav = (category) => {
    setActiveRightNav(true);
    setListCategory(category);
  };

  const handleBackToLeftNav = () => {
    setActiveRightNav(false);
  };

  return (
    <div className="relative flex h-[100px] w-full flex-row items-center justify-between">
      {/* logo */}
      <Link
        to="/"
        className="relative ml-[0.4rem] text-[2.4rem] font-bold uppercase text-white no-underline text-stroke-2 before:absolute before:left-0 before:top-0 before:z-[-1] before:scale-x-110 before:scale-y-[1.15] before:transform before:bg-logo before:text-transparent before:content-['REACTOR'] before:text-clipped"
      >
        REACTOR
      </Link>

      {/* toggle bar */}
      <div
        onClick={handleNavToggle}
        className="grid h-[46px] w-[54px] cursor-pointer place-items-center rounded-lg"
      >
        <span
          className={`toggle-bar ${toggle ? "rotate-[40deg] bg-transparent active" : "rotate-0 bg-white"} relative h-[3px] w-8 transform transition-all duration-300 ease-in-out before:absolute before:-top-[0.7rem] before:left-0 before:h-[3px] before:w-8 before:bg-white before:content-[''] after:absolute after:left-0 after:top-[0.7rem] after:h-[3px] after:w-8 after:bg-white after:content-['']`}
        ></span>
      </div>

      {/* navigation */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${toggle ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"} absolute right-0 top-20 z-[99999] flex h-auto w-[260px] items-start justify-start overflow-hidden rounded-[1.2rem] transition-all duration-300 ease-in-out`}
        style={
          toggle
            ? { transform: "translateX(0)" }
            : { transform: "translateX(2rem)" }
        }
      >
        {/* left nav */}
        <ul
          className={`${activeRightNav ? "pointer-events-none" : "pointer-events-auto"} h-auto max-h-[400px] min-w-[260px] list-none overflow-y-auto rounded-[1.2rem] border border-black bg-[#222] transition-all duration-300 ease-in-out`}
          style={
            activeRightNav
              ? { transform: "translateX(-100%)" }
              : { transform: "translateX(0)" }
          }
        >
          <li
            onClick={() => handleGoToRightNav("react")}
            className="flex h-[46px] cursor-pointer items-center justify-between ps-[0.8rem] transition-all duration-300 ease-in-out hover:bg-[#333]"
          >
            <span className="text-[1.2rem] font-medium">React Projects</span>
            <RiArrowDropRightLine className="text-[2rem]" />
          </li>
          <a
            href="https://macroos.vercel.app/"
            className="flex h-[46px] cursor-pointer items-center justify-between border-t border-black ps-[0.8rem] transition-all duration-300 ease-in-out hover:bg-[#333]"
          >
            <span className="text-[1.2rem] font-medium">
              JavaScript Projects
            </span>
            <RiArrowDropRightLine className="text-[2rem]" />
          </a>
          <a
            href="https://macroos.vercel.app/"
            className="flex h-[46px] cursor-pointer items-center justify-between border-t border-black ps-[0.8rem] transition-all duration-300 ease-in-out hover:bg-[#333]"
          >
            <span className="text-[1.2rem] font-medium">CSS Projects</span>
            <RiArrowDropRightLine className="text-[2rem]" />
          </a>
        </ul>

        {/* right nav */}
        <div
          className={`${activeRightNav ? "pointer-events-auto" : "pointer-events-none"} max-h-[400px] min-w-[260px] overflow-y-auto rounded-[1.2rem] border border-black bg-[#222] transition-all duration-300 ease-in-out`}
          style={
            activeRightNav
              ? { transform: "translateX(-100%)" }
              : { transform: "translateX(0)" }
          }
        >
          {/* react projects */}
          <ul className={listCategory === "react" ? "block" : "hidden"}>
            <li
              onClick={handleBackToLeftNav}
              className="flex h-[46px] cursor-pointer items-center justify-start border-b border-black bg-[#333]"
            >
              <RiArrowDropLeftLine className="text-[2rem]" />
              <span className="text-[1.2rem] font-medium">back</span>
            </li>

            {projects.map((project) => {
              return (
                <Link key={project.id} to={project.link}>
                  <li className="flex h-[46px] w-full items-center justify-start ps-[0.8rem] text-[1.2rem] font-medium transition-all duration-300 ease-in-out hover:bg-[#333]">
                    {project.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
