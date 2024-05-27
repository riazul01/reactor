import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import { projects } from "./projects";

const Home = () => {
  return (
    <div className="mx-auto h-auto min-h-screen w-full max-w-[1300px] overflow-x-hidden px-3 font-belanosima text-white">
      <Header projects={projects} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCard key={project.id} data={project} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
