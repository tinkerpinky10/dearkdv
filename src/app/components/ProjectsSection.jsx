"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React.js - My personal portfolio showcasing my career projects and side hobbies",
    image: "/images/projects/1.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pawleeze Pet Adoption Site",
    description: "JavaScript | MySQL | CRUD Functionality - An online interface where users can put up their dogs for adoption, or find pets to adopt",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Find My Church API",
    description: "Python | Flask | Bootstrap | SQL - An API to reflect up-to-date churches in Monterey County",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "CherryPicker",
    description:  "A simple website presented for AthenaHacks, integrating FoodData API",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "MovieDB",
    description: "Practiced making API calls with help from AJAX, implementing in Bootstrap a movie search, with filtering capabilities",
    image: "/images/projects/5.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Amazon C++",
    description: "File IO and interacted with user requests by storing data optimally",
    image: "/images/projects/6.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Flappy Square",
    description:  "Verilog - Game imitating Flappy Bird using FPGA Board",
    image: "/images/projects/7.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Castaway Diva",
    description: "Web Design",
    image: "/images/projects/8.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Abstract for IFoRE 2023 Research Forum",
    description: "Abstract written during the ANRG Summer Research Academy, describing findings about ChatGPT 3.5's ability to solving word problems about systems of linear equations",
    image: "/images/projects/w1.jpeg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Writing"
          isSelected={tag === "Writing"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Videos"
          isSelected={tag === "Videos"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
