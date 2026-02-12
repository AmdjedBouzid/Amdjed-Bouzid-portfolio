"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { assets } from "../../../public/assets/assets";

const projects = [
  {
    id: 0,
    title: "E-Commerce Web Application",
    description:
      "Full-stack app with authentication and product management for sellers and admins.",
    image: "/assets/ecommerce/ecommerce0.png",
    category: "Academic And Learning Projects",
  },
  {
    id: 3,
    title: "Ai Day Registration",
    description: "Landing page and registration forms for Ai Day event",
    image: assets.AiDay5,
    category: "Event Projects",
  },
  {
    id: 2,
    title: "Raqeeb Application",
    description: "Absences high school management system",
    image: assets.raqeebImage8,
    category: "Academic And Learning Projects",
  },
  {
    id: 1,
    title: "Real-time Chat Application",
    description: "Application with real-time messaging capabilities",
    image: assets.chatLogo,
    category: "Academic And Learning Projects",
  },
  {
    id: 4,
    title: "IZDTECH Website",
    description:
      "Official IZDTECH company website with dynamic landing page, fully customizable admin panel, user management, and media gallery.",
    image: assets.izd6,
    category: "Professional Projects",
  },
  {
    id: 5,
    title: "Royal Drive VTC",
    description:
      "Laravel VTC project with bookings, Stripe payments, multilingual support, admin panel, and professional landing page.",
    image: assets.royalDrive,
    category: "Professional Projects",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description:
      "Laravel e-commerce platform with dynamic content, multilingual support, admin panel, role management, and delivery integration.",
    image: assets.ecommerce2,
    category: "Professional Projects",
  },
  {
    id: 7,
    title: "Solve-It Competition",
    description:
      "Official university competition website with professional design, landing page, registration form linked to Google Forms, and deployment on Vercel.",
    image: assets.solve_it1,
    category: "Event Projects",
  },
];

const categories = [
  "Professional Projects",
  "Event Projects",
  "Academic And Learning Projects",
];

const categoryDescriptions = {
  "Professional Projects": "Real-world freelance projects or projects developed with companies.",
  "Learning Projects": "Academic projects, internships, and learning projects created for practicing and experimenting with new technologies.",
  "Event Projects": "Official university events and competition websites.",
};


function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Professional Projects"
  );

  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  );

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

        {/* Category filter buttons */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory((prev) => (prev === cat ? null : cat))
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${selectedCategory === cat
                ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900"
                : "bg-transparent text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {selectedCategory && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-[800px] mx-auto text-lg"
          >
            {categoryDescriptions[selectedCategory]}
          </motion.p>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
