"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { assets } from "../../../public/assets/assets";

const projects = [
  {
    id: 1,
    title: "Real-time Chat Application",
    description: " application with real-time messaging capabilities",
    image: assets.chatLogo,
  },
  {
    id: 2,
    title: "Raqeeb Application",
    description: "Abcenses heigt schoul managment system",
    image: assets.raqeebImage8,
  },
  {
    id: 3,
    title: "Ai day registration ",
    description: "landing page and registration forms for Ai Day event",
    image: assets.AiDay5,
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="font-ovo text-[17px] font-thin text-gray-800 dark:text-gray-200 transition-colors duration-300">
            My Work
          </h4>
          <h2 className="font-ovo text-[35px] mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-[15px] text-center font-thin font-ovo max-w-[600px] mx-auto text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Explore my latest projects and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 "
            >
              <div className="relative h-48 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-ovo font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/projectdetailles/${project.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                >
                  View Details
                  <Image
                    src="/assets/right-arrow-white.png"
                    alt="arrow"
                    width={16}
                    height={16}
                    className="dark:invert"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
