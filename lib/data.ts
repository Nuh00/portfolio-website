import sharemyschedule from "@/public/sharemyschedule.jpeg";


import {FaReact} from "react-icons/fa";
import {CgWorkAlt} from "react-icons/cg";
import {SiJavascript} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {SiNextdotjs} from "react-icons/si";
import {SiPython} from "react-icons/si";
import React from "react";



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
];

export const experiencesData = [
  {
    title: "HeadStarter AI ",
    location: "Remote",

    description:
      "Worked on building 5 AI projects, culminating in a final project where I will develop an idea from scratch and aim to achieve 1,000 wishlists/users.",
    date: "2024",
    icon: React.createElement(FaReact),
  },
  {
    title: "Tech Cadets",
    location: "Remote",
    description:
      "Played a key role in the development of a web application that helps students share their daily schedules with their peers.",
    date: "2024",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "CodePath technical interview prep",
    location: "Remote",
    description:
      "Participated in a 12-week technical interview preparation program, where I learned how to solve technical problems and prepare for technical interviews.",
    date: "2024",
    icon: React.createElement(SiPython),
  },
] as const;

export const projectsData = [
  {
    title: "HeadStarter AI...",
    description:
      "I worked as a full-stack developer creating a platform for AI projects.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Python",
      "Vercel",
      "Tailwind",
      "Langchain",
    ],
    imageUrl: "https://plus.unsplash.com/premium_photo-1680700308578-b40c7418e997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWl8ZW58MHx8MHx8fDA%3D"
        
  },
  {
    title: "ShareMySchedule",
    description:
      "I worked as a full-stack developer creating a platform for students to share their daily schedules.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Django",
      "PostgreSQL",
    ],
    imageUrl: sharemyschedule,
  },
  // {
  //   title: "CodePath technical interview prep",
  //   description:
  //     "I participated in a 12-week technical interview preparation program, where I learned how to solve technical problems and prepare for technical interviews.",
  //   tags: ["Python", "Algorithms", "Data Structures"],
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Firebase",
  "mongoose",
  "vercel",
  "data structures",
  "algorithms",
] as const;
