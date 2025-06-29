"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaDesktop,
  FaMobile,
  FaTools,
} from "react-icons/fa";

function ServicesSection() {
  const services = [
    {
      icon: <FaCode size={24} />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks like Tailwind.",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5/CSS3",
      ],
    },
    {
      icon: <FaServer size={24} />,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Express, and handling RESTful APIs.",
      skills: [
        "Node.js",
        "Nest.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Server Management",
        "Laravel",
      ],
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Database Management",
      description:
        "Designing and managing both SQL and NoSQL databases for efficient data storage and retrieval.",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Database Design"],
    },
    {
      icon: <FaDesktop size={24} />,
      title: "Web Applications",
      description:
        "Developing full-stack web applications with focus on performance, security, and user experience.",
      skills: [
        "MERN Stack",
        "Full-Stack Development",
        "Performance Optimization",
      ],
    },
    {
      icon: <FaMobile size={24} />,
      title: "Responsive Design",
      description:
        "Creating websites that work seamlessly across all devices and screen sizes.",
      skills: [
        "Mobile-First Design",
        "Cross-Browser Compatibility",
        "Adaptive Layouts",
      ],
    },
    {
      icon: <FaTools size={24} />,
      title: "Development Tools",
      description:
        "Utilizing modern development tools and practices for efficient project management and deployment.",
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="services"
      className="w-full py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="font-ovo text-[17px] font-thin dark:text-gray-300">
            What I Offer
          </h4>
          <h2 className="font-ovo text-[35px] mb-4 dark:text-white">
            My Services
          </h2>
          <p className="text-[15px] text-center font-thin font-ovo max-w-[600px] mx-auto dark:text-gray-300">
            Comprehensive web development solutions tailored to your needs, from
            frontend design to backend implementation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gray-50 backdrop-blur-sm border border-gray-200 
              dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-all duration-300 group"
            >
              <div className="text-gray-600 dark:text-gray-400 dark:group-hover:text-white mb-4 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-ovo mb-3 text-gray-900 dark:text-gray-200 dark:group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300 mb-4 text-sm transition-colors duration-300">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700/70 
                    text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-200
                    group-hover:bg-gray-200 dark:group-hover:bg-gray-600/70 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
