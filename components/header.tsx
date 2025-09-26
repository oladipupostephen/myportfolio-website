"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react"; // hamburger (Menu) & close (X) icons

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Background bar */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] 
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full 
        dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Desktop Nav */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium 
        text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
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

      {/* Mobile Hamburger */}
      <div className="sm:hidden fixed top-4 right-4 z-[1000]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-white/80 dark:bg-gray-800/80 shadow-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-3 w-48 rounded-md bg-white dark:bg-gray-900 shadow-lg py-2"
          >
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setIsOpen(false); // close menu on click
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </header>
  );
}
