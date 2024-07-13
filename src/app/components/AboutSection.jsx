"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming Languages [JavaScript, Python] </li>
        <li>Databases [SQLite, MongoDB] </li>
        <li>
          Libraries and Frameworks [React, Node js, Express.js, Next.js,
          Tailwind CSS, Vue]
        </li>
        <li>Version Control [Git,GitHub] </li>
        <li>
          Design Tools [Figma, Adobe Creative Suite: Photoshop, Illustrator,
          InDesign, Lightroom, After Effects, Premiere Pro]{" "}
        </li>
        <li>
          {" "}
          and other [Agile methodologies, DevOps Fundamentals, Web&Data Security
          Fundamentals, BSM, CAD/BIM Coordination, 3D Renderings]
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Generation Org. (Junior Software Developer, Full-time Bootcamp)</li>
        <li>Kazama Family under Tojo Clan</li>
        <li>Kazama Family under Tojo Clan</li>
        <li>Kazama Family under Tojo Clan</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Engineer: Codecademy (On Progress)</li>
        <li>Junior Software Developer: Generation Org</li>
        <li>
          Python: Language Basics and Fundamental Data Processing: Chulalongkorn
          University
        </li>
        <li>Intro to UI and UX Design: Codecademy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src=//"/images/about-image.gif"
        "/images/projects/placeholder2.jpg"
         width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            My name is Suthassa Thammayootsakul. I have experience in web
            and software development, particularly with JavaScript, 
            and Python, as well as frameworks like React and Next.js.
            Additionally, I have a solid foundation in both frontend and backend
            web development, and database management with SQLite and MongoDb.
            In my previous roles, I worked as an architect and interior
            designer, and I had the opportunity to found and manage my own
            company. This experience allowed me to develop skills in project
            management, marketing, and solving technical problems. My strengths
            include working effectively in Agile environments, teamwork, and
            solving complex problems. I am also proficient in graphic design
            using tools like Figma and the Adobe Creative Suite.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
