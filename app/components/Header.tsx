"use client";

import { motion } from "framer-motion";
import { links } from "../../lib/data";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";

function Header() {
  const { active, setActive, setTimeOfLastClick } = useActiveSectionContext();
  // function setTimeOfLastClick(arg0: number) {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-white opacity-40
      bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-90
      
"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 
      sm:top-[1.7rem] sm:h-[initial]  sm:py-0
      
      "
      >
        <ul
          className="flex w-[22rem] flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500
        sm:w-[initial] sm:flex-nowrap sm:gap-5
        "
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-[3/4] flex items-center justify-center relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActive(link.name), setTimeOfLastClick(Date.now()); // This will set the active link to the link that was clicked
                }}
                className={clsx(
                  // clsx is a utility for conditionally joining class names together
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-700 dark:hover:text-gray-50",
                  {
                    "text-gray-900  dark:text-white": active === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === active && (
                  <motion.span
                    className="rounded-full absolute bg-gray-100 inset-0 -z-10 dark:bg-gray-800 "
                    layoutId="active" // This is the key to the animation of smooth transition to the active link
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
