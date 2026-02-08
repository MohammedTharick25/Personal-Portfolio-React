import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ParticlesBackground from "../components/ParticlesBackground";

/* ================= PROJECT DATA ================= */

const projects = [
  {
    id: 1,
    title: "TaloSync (Job Portal)",
    shortDesc: "A job portal with real-time notifications and user management.",
    longDesc:
      "TaloSync is a full-stack job portal built with the MERN stack (MongoDB, Express, React, Node.js). It enables secure user authentication, job listing and search, and role-based features for job seekers and recruiters. Users can browse and apply for jobs, while recruiters can post and manage listings.",
    img: "/project-imgs/TaloSync.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    git: "https://github.com/MohammedTharick25/MERN-Stack-TaloSync-JobPortal-",
    demo: "https://talosync.onrender.com/",
  },
  {
    id: 2,
    title: "Facial Expression Recognition",
    shortDesc: "A CNN-based emotion classifier using Python and OpenCV.",
    longDesc:
      "This project implements a Deep Learning model using Convolutional Neural Networks (CNN) to detect human faces and classify emotions into seven categories: Angry, Disgust, Fear, Happy, Sad, Surprise, and Neutral. It features a real-time webcam interface and high accuracy on the FER2013 dataset.",
    img: "/project-imgs/FER-img.png",
    tags: ["Python", "TensorFlow", "OpenCV"],
    git: "https://github.com/MohammedTharick25/FER-Main-1",
    demo: "#",
  },
  {
    id: 3,
    title: "Solo Leveling System",
    shortDesc: "Gamified productivity app inspired by the famous Manhwa.",
    longDesc:
      "A complete life-gamification system. Users can set real-life 'Quests', gain XP, and level up their stats in Strength (Fitness), Intelligence (Learning), and Agility (Productivity). It uses LocalStorage for data persistence and features a stunning anime-inspired UI.",
    img: "/project-imgs/system-interface.png",
    tags: ["JavaScript", "HTML5", "CSS3"],
    git: "https://github.com/MohammedTharick25/Solo-Leveling-System",
    demo: "https://solo-leveling-system.netlify.app/",
  },
  {
    id: 4,
    title: "Weather App",
    shortDesc: "Real-time weather tracking with a sleek glassmorphism UI.",
    longDesc:
      "A high-performance weather dashboard that fetches data from OpenWeather API. It provides detailed forecasts, humidity levels, and wind speeds, all wrapped in a dynamic interface that changes background based on weather conditions.",
    img: "/project-imgs/weather-app-img.png",
    tags: ["React", "API Integration", "Tailwind"],
    git: "https://github.com/MohammedTharick25/Weather-App",
    demo: "https://weather-app-cloudapi.netlify.app/",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    shortDesc: "A responsive portfolio website showcasing projects and skills.",
    longDesc:
      "A modern, responsive portfolio website built with React and Tailwind CSS. It features a sleek design with smooth animations, dark/light mode toggle, and a contact form. The site is fully optimized for performance and accessibility.",
    img: "/project-imgs/React portfolio.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],

    git: "https://github.com/MohammedTharick25/Personal-Portfolio-React",
    demo: "https://mt-personal-portfolio-react.netlify.app/",
  },
  {
    id: 6,
    title: "Todo App",
    shortDesc:
      "A responsive and feature-rich todo application built with React and Tailwind CSS.",
    longDesc:
      "A modern, responsive todo application built with React and Tailwind CSS. It features a sleek design with smooth animations, dark/light mode toggle, and a clean UI. The app supports task creation, editing, deletion, and filtering.",
    img: "/project-imgs/mern todo app.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],

    git: "https://github.com/MohammedTharick25/MERN-Todo-App",
    demo: "https://mern-todo-app-n2cs.onrender.com/",
  },
];

/* ================= PROJECTS ================= */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="pt-24 px-8 pb-20 min-h-screen relative overflow-hidden">
      {/* Particles */}
      <ParticlesBackground />

      {/* Ambient Glow */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [80, 80, 80], y: [40, 40, 40] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-6xl font-extrabold mb-4"
        >
          My Recent <span className="text-brand">Works</span>
        </motion.h1>

        <p className="text-gray-400 tracking-widest uppercase text-sm">
          Click a project to expand
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            whileHover={{ y: -10 }}
            className="
              glass
              rounded-3xl
              overflow-hidden
              cursor-pointer
              group
              border border-white/5
              hover:border-brand/50
              transition
            "
          >
            <motion.img
              layoutId={`img-${project.id}`}
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              {/* Tags */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-brand/10 text-brand px-2 py-1 rounded-full uppercase font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.h3
                layoutId={`title-${project.id}`}
                className="text-2xl font-bold mb-2"
              >
                {project.title}
              </motion.h3>

              <p className="text-gray-400 text-sm line-clamp-2">
                {project.shortDesc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedProject.id}`}
              className="
          relative
          w-full
          max-w-6xl
          h-[85vh]
          glass
          rounded-3xl
          overflow-hidden
          border border-white/10
          shadow-2xl
          flex
          flex-col
          md:flex-row
        "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
            absolute top-5 right-5 z-20
            p-2
            bg-black/60
            hover:bg-brand
            rounded-full
            text-white
            transition
          "
              >
                <X size={22} />
              </button>

              {/* ================= LEFT : IMAGE (40%) ================= */}

              <div className="md:w-[40%] w-full h-64 md:h-full relative overflow-hidden">
                <motion.img
                  layoutId={`img-${selectedProject.id}`}
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* ================= RIGHT : CONTENT (60%) ================= */}

              <div
                className="
            md:w-[60%]
            w-full
            h-full
            overflow-y-auto
            p-8 md:p-12
            flex
            flex-col
            justify-center
          "
              >
                {/* Tags */}
                <div className="flex gap-3 mb-5 flex-wrap">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                  text-xs
                  bg-brand/15
                  text-brand
                  px-3 py-1
                  rounded-full
                  font-bold
                  uppercase
                "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <motion.h2
                  layoutId={`title-${selectedProject.id}`}
                  className="text-3xl md:text-4xl font-extrabold mb-5"
                >
                  {selectedProject.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="
              text-gray-300
              text-base
              md:text-lg
              leading-relaxed
              mb-8
              max-w-xl
            "
                >
                  {selectedProject.longDesc}
                </motion.p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a
                    href={selectedProject.git}
                    target="_blank"
                    rel="noreferrer"
                    className="
                flex-1
                flex items-center justify-center gap-2
                bg-white text-black
                py-3
                rounded-xl
                font-bold
                hover:bg-brand
                hover:text-white
                transition
              "
                  >
                    <Github size={20} />
                    View Code
                  </a>

                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                flex-1
                flex items-center justify-center gap-2
                bg-brand text-white
                py-3
                rounded-xl
                font-bold
                hover:shadow-[0_0_20px_rgba(205,95,248,0.5)]
                transition
              "
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer CTA */}
      <div className="mt-32 text-center relative z-10">
        <p className="text-gray-500 mb-4 tracking-widest uppercase text-xs">
          Have an idea in mind?
        </p>

        <Link
          to="/contact"
          className="
            inline-flex
            items-center
            gap-2
            text-brand
            text-3xl
            font-bold
            hover:gap-6
            transition-all
            duration-300
            group
          "
        >
          Let's Get In Touch
          <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
