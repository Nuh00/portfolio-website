"use client";
import React from "react";
import Image from "next/image";
import headShot from "../../public/headShot.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";



function Intro() {
  const { ref, inView } = useSectionInView("Home");
  const { setActive, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section
      className="mb-28 max-w-[50rem] text-center flex flex-col scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={headShot}
            alt="Noah portrait"
            priority={true}
            className="h-24 w-24 rounded-full
          border-[0.35rem] border-white object-cover shadow-xl
          "
          />

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🥇
          </motion.span>
        </motion.div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl leading-[1.5] sm:text-3xl w-[80%] md:w-[100%] mx-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 160,
          delay: 0.2,
          duration: 0.4,
        }}
      >
        My name is <span className="font-bold ">Noah Barkat </span>
        ...as a passionate{" "}
        <span className="font-bold"> Software Engineer </span>, I specialize in
        building... <span className="font-bold"> whatever is thrown at me</span>
        . I am driven by a love for{" "}
        <span className="font-bold"> problem-solving</span> and a desire to{" "}
        <span className="italic">learn</span> and{" "}
        <span className="italic"> grow</span> in the ever-evolving{" "}
        <span className="italic">tech</span> landscape.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          onClick={() => {
            setActive("Contact"), setTimeOfLastClick(Date.now()); // This will set the active link to the link that was clicked
          }}
          className=" group flex items-center gap-2 rounded-full bg-gray-900 text-white px-7 py-3 
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition 

          "
        >
          Contact me here{" "}
          <BsArrowRight className="inline opacity-70 group-hover:translate-x-1 transition " />
        </Link>

        <a
          href="file:///Users/noahbarkat/Downloads/SWE%20Resume%20(2).pdf"
          className=" group flex items-center gap-2 rounded-full bg-white px-7 py-3
          outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition border border-black/10

          dark:bg-white/10
          
           "
        >
          {" "}
          Download CV
          <HiDownload className="inline opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/noah-barkat-325a731b7/"
          className="flex items-center gap-2 rounded-full bg-transparent px-4 py-3
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105
          transition
           "
        >
          <BsLinkedin className="text-2xl text-blue-800 dark:text-white" />
        </a>

        <a
          href="https://github.com/Nuh00?tab=overview&from=2024-07-01&to=2024-07-24"
          className="flex items-center gap-2 rounded-full bg-transparent px-4 py-3 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition
           "
        >
          <BsGithub className="text-2xl text-gray-900" />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
