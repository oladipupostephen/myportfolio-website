import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ewasteImg from "@/public/wastebin.jpeg";
import todoImg from "@/public/todo.jpeg";
import bloomartImg from "@/public/bloomart.jpeg";
import essay9Img from "@/public/essay9ja.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Web Developer (Intern)",
    location: "Lagos, Nigeria",
    description:
      "Collaborated with designers and back-end developers at TIIDELAB to improve site architecture and user interactions. Contributed to project planning and development processes.",
    icon: React.createElement(LuGraduationCap),
    date: "Mar 2022 – May 2022",
  },
  {
    title: "Software Developer Intern",
    location: "Lagos, Nigeria",
    description:
      "Worked at RAOATECH IT Electromech, where I developed and maintained responsive web apps using React.js, Next.js, and Firebase. Also taught web development fundamentals to beginner and intermediate students.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – Feb 2024",
  },
  {
    title: "Coding and Robotics Instructor",
    location: "Lagos, Nigeria",
    description:
      "Currently training students at STEMINAI (YEP program) in Scratch, PictoBlox, Arduino, and introductory Python. Designed engaging lessons and mentored students to build their first web and robotics projects.",
    icon: React.createElement(FaReact),
    date: "Sept 2024 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Essay Naija Writer",
    description:
      "A writing platform with portals for users, writers, and administrators. Includes dashboards, proposal submission, budget handling, and real-time messaging for smooth academic project management.",
    tags: ["Next.js", "TypeScript", "Redux", "Tailwind", "NextUI", "Axios"],
    imageUrl: essay9Img, // replace with actual import
  },
  {
    title: "E-waste Bin Monitor",
    description:
      "Smart IoT waste bin monitoring app with real-time data visualization. Integrated Leaflet.js for maps and React charts for graphical representation of IoT data.",
    tags: ["React", "Firebase", "Tailwind", "Vite", "Leaflet.js", "Charts"],
    imageUrl: ewasteImg, // replace with actual import
  },
  {
    title: "Todo Application",
    description:
      "Task management app with filtering, completion tracking, and smooth responsive design. Showcases modern React development and state management with Redux Toolkit.",
    tags: ["React", "TypeScript", "Redux Toolkit", "CSS3"],
    imageUrl: todoImg, // replace with actual import
  },
  {
    title: "BlooMart E-commerce",
    description:
      "E-commerce web app with shopping cart, product showcase, and responsive design built using vanilla JavaScript and CSS, without external frameworks.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: bloomartImg, // replace with actual import
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Context API",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Firebase",
  "Git/GitHub",
  "C++",
  "Python",
  "Linux",
  "Figma",
] as const;
