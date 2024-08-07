import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "NextJs Portfolio Website",
    description: "[Next.Js, TailwindCss], Responsive and Animations.",
    image: "https://i.ibb.co/SRr7crQ/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/noeysoftware/portfolio",
    previewUrl: "https://portfolio-qc4y.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Web Application",
    description:
      "[MongoDb, ExpressJs, React, NodeJs] A Full-stack web app group project with CRUD operation.",
    image: "https://i.ibb.co/tJh13Dg/Project.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jsd7-group1/group1_frontend",
    previewUrl: "https://potioncafe.vercel.app/",
  },
  {
    id: 3,
    title: "Weather Forecast Web App",
    description:
      " [HTML,CSS, Javascripts], Real time data from the API., Auto Visual changing",
    image: "https://i.ibb.co/xjscY0t/preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/noeysoftware/solarium",
    previewUrl: "https://solarium-topaz.vercel.app/",
  },
  {
    id: 4,
    title: "To-Do Lists Web Application",
    description:
      "[MongoDb, ExpressJs, React, NodeJs, Axios] To-Do Lists Web Application with support for users Login/Signup.",
    image: "https://i.ibb.co/34Wjc4Y/Todolist-preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/noeysoftware/TodoList-Frontend",
    previewUrl: "https://todo-list-frontend-alpha.vercel.app/",
  },
  //  {
  //    id: 5,
  //    title: "E-commerce Web Application",
  //    description:
  //      "[MongoDb, ExpressJs, React, NodeJs] A Full-stack web app group project with CRUD operation.",
  //    image: "https://i.ibb.co/tJh13Dg/Project.png",
  //    tag: ["All", "Web"],
  //    gitUrl: "https://github.com/jsd7-group1/group1_frontend",
  //    previewUrl: "https://potioncafe.vercel.app/",
  //  },
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
            webUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
