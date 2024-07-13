import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: "[Next.Js, TailwindCss], Responsive and Animations.",
    image: "/images/projects/placeholder1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather Forecast Web App",
    description: " [HTML,CSS, Javascripts], Real time data from the API., Auto Visual changing",
    image: "/images/projects/placeholder1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Web Application",
    description: "[MongoDb, ExpressJs, React, NodeJs] A Full-stack web app group project with CRUD operation.",
    image: "/images/projects/placeholder1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  //   {
  //     id: 4,
  //     title: "Food Ordering Application",
  //     description: "Project 4 description",
  //     image: "/images/projects/4.gif",
  //     tag: ["All", "Mobile"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
  //   {
  //     id: 5,
  //     title: "React Firebase Template",
  //     description: "Authentication and CRUD operations",
  //     image: "/images/projects/5.gif",
  //     tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
  //   {
  //     id: 6,
  //     title: "Full-stack Roadmap",
  //     description: "Project 5 description",
  //     image: "/images/projects/6.gif",
  //     tag: ["All", "Web"],
  //     gitUrl: "/",
  //     previewUrl: "/",
  //   },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
