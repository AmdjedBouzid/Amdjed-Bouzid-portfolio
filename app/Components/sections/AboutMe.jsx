"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../../public/assets/assets";
import SkillsItem from "../SkillsItem";
import TechnologyItem from "../TechnologyItem";

function AboutMe() {
  const skillsItems = [
    {
      iconDark: assets.code_icon_dark,
      iconLight: assets.code_icon,
      title: "Languages",
      description:
        "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Nest.js, Express, MongoDB, MySQL",
    },
    {
      iconDark: assets.edu_icon_dark,
      iconLight: assets.edu_icon,
      title: "Education",
      description: "Computer Science Engineering Student (AI) ",
    },
    {
      iconDark: assets.project_icon_dark,
      iconLight: assets.project_icon,
      title: "Projects",
      description: "Build complete web applications ",
    },
  ];

  const technologyImages = [
    {
      src: assets.reactIcon,
      alt: "React",
    },
    {
      src: assets.nextJsIcon,
      alt: "Next.js",
    },

    {
      src: assets.nestJsIcon,
      alt: "Nest.js",
    },
    {
      src: assets.expressIcon,
      alt: "Express.js",
    },
    {
      src: assets.laravelIcon,
      alt: "Laravel",
    },

    {
      src: assets.mysqlIcon2,
      alt: "MySQL",
    },
    {
      src: assets.postegressQlIcon,
      alt: "PostgreSQL",
    },
    {
      src: assets.mongodb,
      alt: "MongoDB",
    },

    {
      src: assets.git,
      alt: "Git",
    },
    {
      src: assets.githubIcon,
      alt: "GitHub",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="font-ovo text-[17px] font-thin text-gray-800 dark:text-gray-200 transition-colors duration-300">
            Who I Am
          </h4>
          <h2 className="font-ovo text-[35px] mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            About Me
          </h2>
          <p className="text-[15px] text-center font-thin font-ovo max-w-[600px] mx-auto text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-square max-w-[500px] mx-auto"
          >
            <Image
              src={assets.about_img}
              alt="About me image"
              layout="fill"
              objectFit="cover"
              priority
              className="rounded-2xl shadow-xl dark:shadow-gray-800/20 transition-all duration-300"
            />
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg dark:shadow-gray-900/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                3+
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                complete projects
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-ovo text-gray-900 dark:text-white transition-colors duration-300">
              A dedicated Full-stack Developer based in Algeria 📍
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-[15px] transition-colors duration-300">
              As a Full-Stack Developer, I possess a strong skill set in HTML,
              CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
              Nest.js, Express.js, Laravel, MongoDB, MySQL, and PostgreSQL. I
              specialize in designing and maintaining responsive, user-friendly
              websites that deliver seamless user experiences. My strengths
              include building dynamic and engaging interfaces, writing clean
              and optimized code, and leveraging modern development tools and
              best practices to create high-quality web applications
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-[15px] transition-colors duration-300">
              I am also a team player who thrives in collaborating with
              cross-functional teams to produce outstanding web applications.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            >
              {skillsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <SkillsItem {...item} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              className="flex gap-6 flex-wrap mt-8 justify-center md:justify-start"
            >
              {technologyImages.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechnologyItem {...tech} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
