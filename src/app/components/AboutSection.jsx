"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++</li>
        <li>Java</li>
        <li>Python</li>
        <li>HTML/CSS</li>
        <li>MySQL</li>
        <li>JavaScript</li>
        <li>PHP</li>
        <li>React</li>
        <li>Verilog</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>Github</li>
        <li>Figma</li>
        <li>Bootstrap</li>
        <li>Linux</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Flask</li>
        <li>Node.js</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aesthetic-about.jpeg" width={500} height={500} alt="alternate"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Greetings! My name is Karla Vasquez, and I'm a rising senior 
            at USC studying Computer Engineering and Computer Science (CECS).
            If so my major was chosen when freshman Karla did not have much clue 
            about the difference between CE and CS, my journey with this major 
            exposed me to two remarkable disciplines. Naturally leaning towards my 
            more creative side, I want to allow my curiousity to explore full stack web development. 
            With patience, commitment, and optimism, I am looking to work towards creating 
            interactive and responsive web applications through diverse tools at my disposal!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
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
