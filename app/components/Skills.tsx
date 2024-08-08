"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

function Skills() {
  const { ref, inView } = useSectionInView("Skills", 0.5);
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading> My skills </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg  text-gray-700 dark:text-white">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white dark:bg-gray-700 border border-black/[0.1] rounded-xl px-3 py-1 hover:bg-black/[0.1] dark:hover:bg-black/10 cursor-pointer"
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
