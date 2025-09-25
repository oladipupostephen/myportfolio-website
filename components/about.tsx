"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Computer Engineering</span>, I decided to pursue my
  passion for software development. I gained experience through internships and{" "}
  <span className="font-medium">frontend development</span> projects. My core stack
  is{" "}
  <span className="font-medium">
    React, Next.js, and TypeScript
  </span>
  . I am also proficient in{" "}
  <span className="font-medium">Python and C++</span>. I am always looking to
  learn new technologies. I am presently working as a{" "}
  <span className="font-medium">Coding and Robotics Instructor at STEMINAI</span> while
  seeking new opportunities as a software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy teaching and sharing
  knowledge, exploring new technologies, and working on{" "}
  <span className="font-medium">hardware-software projects</span>. I also enjoy{" "}
  <span className="font-medium">learning new things</span> beyond tech. Recently,
  I’ve been diving into{" "}
  <span className="font-medium">Robotics</span> while
  continuing to grow my engineering and programming skills.
</p>

    </motion.section>
  );
}
