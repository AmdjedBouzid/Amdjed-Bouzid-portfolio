import React from "react";
import Image from "next/image";
import { assets } from "@/public/assets/assets";
import SkillsItem from "./SkillsItem"; // Ensure correct import
import TechnologyItem from "./TechnologyItem"; // Fixed naming

function AboutMe() {
  const skillsItems = [
    {
      iconDark: assets.code_icon_dark,
      iconLight: assets.code_icon,
      title: "Languages",
      description:
        "HTML, CSS, JavaScript, React.js, Next.js, Express, MongoDB, MySQL",
    },
    {
      iconDark: assets.edu_icon_dark,
      iconLight: assets.edu_icon,
      title: "Education",
      description:
        "Computer Science Engineering Student (AI) and Full Stack Web Developer",
    },
    {
      iconDark: assets.project_icon_dark,
      iconLight: assets.project_icon,
      title: "Projects",
      description: "Build complete web applications with MERN stack",
    },
  ];

  const technologyImages = [
    assets.vscode,
    assets.jsIcon,
    assets.tailwindIcon,
    assets.reactIcon,
    assets.expressEcon,
    assets.mySqlIcon,
    assets.mongoDbIcon,
  ];

  return (
    <div className="h-full w-full flex flex-col items-center pt-36">
      <div className="h-[150px] w-[260px] flex flex-col items-center">
        <p className="font-Ovo text-[24px] leading-[27px]">Introduction</p>
        <h1 className="font-Ovo text-[40px]">About Me</h1>
      </div>
      <div className="h-full -300 w-full px-48 max-sm:px-2 flex gap-20 items-start">
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="h-5/6 w-[400px] rounded-[20px] max-sm:hidden"
        />
        <div className="h-full w-full flex flex-col max-sm:items-center items-start">
          <p className="font-Ovo text-[20px] w-[80%] max-sm:w-full">
            I am a seasoned Full Stack Web Developer specializing in the MERN
            stack, with over a decade of experience building scalable,
            high-performance web applications. Passionate about delivering
            seamless, secure, and innovative solutions, I excel at transforming
            complex ideas into impactful digital experiences.
          </p>
          <div className="h-auto w-3/4 max-sm:w-full flex flex-wrap gap-3 max-sm:gap-0 max-sm:justify-between mt-12">
            {skillsItems.map((item, index) => (
              <SkillsItem
                key={item.title} // Use a unique identifier
                icon={item.iconLight}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="h-[75px] max-sm:w-full w-3/4 mt-14 flex gap-3 flex-wrap">
            {technologyImages.map((item, index) => (
              <TechnologyItem key={item} image={item} /> // Use a unique identifier
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
