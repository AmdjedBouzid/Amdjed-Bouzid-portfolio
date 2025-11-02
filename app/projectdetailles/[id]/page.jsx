"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../public/assets/assets";

const projectsData = [
  {
    id: 0,
    title: "E-Commerce Web Application",
    description: `A modern e-commerce platform built with React and Next.js on the frontend, and NestJS on the backend. The system connects sellers and customers with full management of products, categories, and orders.

Key features include:
- User and admin authentication
- Product and category management
- Order tracking and status updates
- Admin dashboard with full control
- Seller interface for product listing
- Secure APIs and database integration
`,
    team: [
      "Amdjed Bouzid - Full Stack Developer",
      "Mrah Amdjed - Backend Developer",
    ],
    technologies: [
      "React.js - Frontend development",
      "Next.js - SSR and routing",
      "NestJS - Backend framework",
      "TypeORM - ORM for database access",
      "MySQL - Relational database",
      "JWT - Authentication",
      "Tailwind CSS - UI styling",
      "Axios - API communication",
      "Socket.IO - Real-time updates (if used)",
    ],
    links: [
      {
        name: "WebSit Link (admin profile email:admin@gmai.com password:amdjed2004)",
        url: "https://ecommerce-tau-brown.vercel.app", // Replace with actual repo if different
      },
      {
        name: "GitHub Repository (Backend)",
        url: "https://github.com/AmdjedBouzid/ecommerce-backend", // Replace with actual repo if different
      },
      {
        name: "GitHub Repository (frontend)",
        url: "https://github.com/AmdjedBouzid/ecommerce", // Replace with actual repo if different
      },
    ],
    images: [
      "/assets/ecommerce/ecommerce1.jpg",
      "/assets/ecommerce/ecommerce2.jpg",
      "/assets/ecommerce/ecommerce3.jpg",
      "/assets/ecommerce/ecommerce4.jpg",
      "/assets/ecommerce/ecommerce5.jpg",
      "/assets/ecommerce/ecommerce6.jpg",
    ],
  },
  {
    id: 1,
    title: "Real-time Chat Application",
    description: `chat application built with React Native for the mobile interface and Express.js for the backend. This real-time messaging platform leverages Socket.IO for instant communication and implements RESTful APIs for data management.

The application offers a seamless messaging experience with features like:
- Real-time message delivery 
- File and image sharing capabilities
- Push notifications for new messages
- User authentication and profile management
- search functionality
`,
    team: ["Amdjed Bouzid - Full Stack Developer"],
    technologies: [
      "React Native - Mobile app development",
      "Express.js - Backend server",
      "Socket.IO - Real-time communication",
      "RESTful API - Data management",
      "Mysql - Database",
      "JWT - Authentication",
      "Axios - HTTP requests",
      "React Navigation - Navigation",
      "Expo - Development environment",

      "Storing files on the server ",
    ],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/AmdjedBouzid/chat-app-react-native-",
      },
    ],
    images: [
      "/assets/photo_2025-06-06_19-21-04.jpg",
      "/assets/photo_2025-06-06_19-21-05.jpg",
      "/assets/photo_2025-06-06_19-21-06.jpg",
      "/assets/photo_2025-06-06_19-21-04 (2).jpg",
    ],
  },
  {
    id: 2,
    title: "Raqeeb (Absences Management System)",
    description: `The Absences Management System is a comprehensive high school application built to manage and monitor student attendance and school operations efficiently.

This platform includes role-based access for administrators, supervisors, and students. It provides full control over school entities such as students, majors, and sections, while offering reliable tools to track and manage absences.

Core functionalities include:
- Admin authentication and creation
- Supervisor assignment to students
- Full CRUD operations for students, majors, and sections
- Absences tracking and reporting
- Role-specific profile views for admin, supervisor, and students

Built with performance and structure in mind, this system enhances academic management and ensures seamless administrative control.`,
    team: ["Amdjed Bouzid - Full Stack Developer"],
    technologies: [
      "React - Admin dashboard frontend",
      "Flutter - Mobile application (not my role)",
      "Laravel - Backend framework",
      "Sanctum - Authentication",
      "MySQL - Database",
      "Form Request - Backend validation",
      "Resources - API response formatting",
      "Migrations - Database structure management",
    ],
    links: [
      {
        name: "GitHub Backend Repository",
        url: "https://github.com/AmdjedBouzid/high-school",
      },
      {
        name: "GitHub Frontend Repository",
        url: "https://github.com/AmdjedBouzid/heigh-school-administration",
      },
    ],
    images: [
      assets.raqeebImage1,
      assets.raqeebImage2,
      assets.raqeebImage3,
      assets.raqeebImage4,
      assets.raqeebImage5,
      assets.raqeebImage6,
      assets.raqeebImage7,
      assets.raqeebImage8,
    ],
  },
  {
    id: 3,
    title: "Aiday Project – Landing Page & Registration System",
    description: `Aiday is a lightweight and responsive landing page project designed to facilitate user registrations for events or services. Built entirely with pure HTML, CSS, and JavaScript, it offers a fast and accessible front-end experience.

This project includes a registration form system that seamlessly integrates with Google Forms, allowing user submissions to be collected and stored directly in Google Sheets without the need for a custom backend.

Key features include:
- Clean and modern landing page UI
- Responsive design for all screen sizes
- Registration form with real-time input validation
- Google Forms integration for data collection

Aiday is ideal for events, surveys, or quick deployment situations where simplicity and effectiveness are priorities.`,
    team: ["Amdjed Bouzid - Full Stack Developer", 'Amdjed Mrah - Backend Developer'],
    technologies: [
      "HTML - Markup structure",
      "CSS - Styling and responsive layout",
      "JavaScript - Form handling and validation",
      "Google Forms - Data submission endpoint",
      "Google Sheets - Data storage",
    ],
    links: [
      {
        name: "GitHub Repository",
        url: "https://github.com/TechGeeks-Club/AI24",
      },
    ],
    images: [
      assets.AiDay1,
      assets.AiDay2,
      assets.AiDay3,
      assets.AiDay4,
      assets.AiDay5,
    ],
  },
  {
    id: 5,
    title: "Royal Drive VTC – Booking System & Admin Panel",
    description: `Royal Drive VTC is a complete Laravel web application for private driver bookings with professional features.

The platform allows clients to book drivers, manage reservations, and make payments via Stripe with webhook support. It includes multilingual support (French/English) and a polished landing page with dark/light mode.

The admin panel, built with Filament, gives administrators full control over the system, including:
- Reservation management with detailed views
- Cancellation rules with hour-based refunds
- Payment tracking and details
- Messaging system with client interactions
- Pricing per km and adjustable by time of day
- Client feedback management
- Admin CRUD functionalities

Royal Drive VTC combines a professional online presence with robust administrative capabilities for efficient transportation services.`,
    team: ["Amdjed Bouzid - Fullstack Developer"],
    technologies: [
      "Laravel - Backend framework",
      "PHP - Server-side scripting",
      "HTML - Markup structure",
      "CSS & Tailwind - Styling and responsive layout",
      "JavaScript - Interactivity",
      "MySQL - Database management",
      "Stripe - Payment processing",
      "Filament - Admin panel management",
    ],
    links: [
      {
        name: "Website Link",
        url: "https://demoroyaldrivevtc.infodz.net/", // replace with your website
      },
      {
        name: "website Admin Link (email:a@a.com) ( password:12345678 )",
        url: "https://demoroyaldrivevtc.infodz.net/royaldrive-secure-access-92fj4kq7", // replace with your website
      },
    ],
    images: [
      assets.royalDrive,
      assets.royalDrive2,
      assets.royalDrive3,
      assets.royalDrive4,
      assets.royalDrive5,
    ],
  },
  {
    id: 6,
    title: "E-Commerce Website – Dynamic Store & Admin Panel",
    description: `This E-Commerce Website is a complete Laravel application that delivers a professional online store with dynamic content management and advanced administration tools.

The platform allows clients to browse products, view detailed descriptions, and place orders seamlessly. It supports multiple languages (Arabic/French), along with light and dark modes for an enhanced user experience.

The admin panel offers full control over the system, including:
- CRUD operations for products and categories
- Order management with status updates
- Integration with delivery companies for automatic order posting
- Local messaging system for communication
- Role and privilege management for all admin resources
- User management with role assignment
- Customizable website parameters (text, images, and design)
- Dashboard with real-time statistics

This project ensures a robust, customizable, and multilingual shopping experience with complete administrative flexibility.`,
    team: ["Amdjed Bouzid - Fullstack Developer", " Mrah Amdjed - Backend Developer"],
    technologies: [
      "Laravel - Backend framework",
      "PHP - Server-side scripting",
      "HTML - Markup structure",
      "CSS & Tailwind - Styling and responsive layout",
      "JavaScript - Interactivity",
      "MySQL - Database management",
      "Filament - Admin panel management",
      "RESTful APIs - For delivery company integration",],
    links: [
      {
        name: "Website Link",
        url: "https://shop.izdtech.net", // replace with your actual website
      },
    ],
    images: [
      assets.ecommerce,
      assets.ecommerce2,
      assets.ecommerce3,
      assets.ecommerce4,
      assets.ecommerce5,
      assets.ecommerce6,
      assets.ecommerce7,
    ],
  }


];

export default function ProjectDetails({ params }) {
  const { id } = params;
  const project = projectsData.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e) => {
    if (selectedImage === null) return;

    if (e.key === "ArrowLeft") {
      handlePrevImage();
    } else if (e.key === "ArrowRight") {
      handleNextImage();
    } else if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  return (
    <main
      className="min-h-screen pt-24 pb-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-8 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            ← Back to Projects
          </Link>

          <h1 className="text-4xl font-ovo font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-ovo font-semibold text-gray-900 dark:text-white mb-4">
                Project Description
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.description.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-600 dark:text-gray-300 mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Team */}
              <div>
                <h2 className="text-2xl font-ovo font-semibold text-gray-900 dark:text-white mb-4">
                  Team
                </h2>
                <ul className="space-y-2">
                  {project.team.map((member, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-2xl font-ovo font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h2>
                <ul className="space-y-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      • {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div>
                <h2 className="text-2xl font-ovo font-semibold text-gray-900 dark:text-white mb-4">
                  Project Links
                </h2>
                <div className="space-y-3">
                  {project.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Main image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={project.images[selectedImage]}
                  alt={`${project.title} screenshot ${selectedImage + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className={`transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"
                    }`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                {selectedImage + 1} / {project.images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
