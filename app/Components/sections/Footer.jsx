"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full py-8 px-4 border-t dark:border-gray-800">
      <div className="max-w-[800px] mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://github.com/amdjed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/amdjed"
              target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:amdjedbouzid9@gmail.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
          © 2024 Amdjed Bouzid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
