"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

function ContactSection() {
  const contacts = [
    {
      icon: <FaPhone size={24} />,
      title: "Phone",
      value: "07 93 79 80 95",
      link: "tel:+213793798095",
    },
        {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      value: "amdjedbouzid9@gmail.com",
      link: "mailto:amdjedbouzid6@gmail.com",
    },
    {
      icon: <FaLinkedin size={24} />,
      title: "LinkedIn",
      value: "Amdjed Bouzid",
      link: "https://www.linkedin.com/in/amdjed-bouzid-56ab822b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <FaGithub size={24} />,
      title: "GitHub",
      value: "AmdjedBouzid",
      link: "https://github.com/AmdjedBouzid",
    },
    {
      icon: <FaFacebook size={24} />,
      title: "Facebook",
      value: "Amdjed Bouzid",
      link: "https://www.facebook.com/share/1Qcq89JNML",
    },
    {
      icon: <FaInstagram size={24} />,
      title: "Instagram",
      value: "amdjed_bouzid21",
      link: "https://www.instagram.com/amdjed_bouzid21",
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="font-ovo text-[17px] font-thin dark:text-gray-300">
            Get In Touch
          </h4>
          <h2 className="font-ovo text-[35px] mb-4 dark:text-white">
            Contact Me
          </h2>
          <p className="text-[15px] text-center font-thin font-ovo max-w-[600px] mx-auto dark:text-gray-300">
            Feel free to reach out through any of these channels. I'm always
            open to discussing new projects and opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col gap-4"
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, x: 10 }}
              className="p-4 rounded-xl bg-gray-50 backdrop-blur-sm border border-gray-200 
              dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 
              transition-all duration-300 group"
            >
              <Link
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6"
              >
                <div className="text-gray-600 dark:text-gray-400 dark:group-hover:text-white transition-colors duration-300">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-ovo mb-1 text-gray-900 dark:text-gray-200 dark:group-hover:text-white transition-colors duration-300">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300 text-sm transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
