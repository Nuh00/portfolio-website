"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "@/lib/hooks";


function About() {
    const { ref, inView } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="text-gray-700mt-4">
        My journey in tech started with a fascination for how the web works,
        leading me to learn HTML, CSS, and{" "}
        <span className="font-medium"> JavaScript.</span> Over time, I expanded
        my skill set to include <span>frameworks</span> and tools such as{" "}
        <span className="font-medium">
          {" "}
          React, Next.js, Tailwind and Django.
        </span>{" "}
        This diverse knowledge base allows me to tackle a wide range of
        challenges, from
        <span className="font-medium"> designing</span> intuitive user
        interfaces to{" "}
        <span className="font-medium">
          {" "}
          developing efficient server-side logic.
        </span>
      </p>
      <p className="text-gray-700 mt-4">
        I take pride in my attention to detail and commitment to continuous
        improvement. Whether working on solo projects or{" "}
        <span className="font-medium"> collaborating with teams, </span> I am
        always eager to learn new technologies and methodologies. My goal is to{" "}
        <span className="font-medium">
          {" "}
          not only meet project requirements but to exceed expectations by
          delivering high-quality, scalable solutions.
        </span>
      </p>
      <p className="text-gray-700 mt-4">
        Outside of coding, I enjoy staying updated with the latest tech trends
        and spending time with my family. I am also an avid reader and love
        reading about history.
      </p>
    </motion.section>
  );
}

export default About;
