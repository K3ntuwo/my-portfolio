"use client";
import { Link as ScrollLink } from "react-scroll";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "about", // Adjusted path to match scrolling targets (e.g., #about becomes 'about')
  },
  {
    title: "Projects",
    path: "projects", // Adjusted path to match scrolling targets (e.g., #projects becomes 'projects')
  },
  {
    title: "Contact",
    path: "contact", // Adjusted path to match scrolling targets (e.g., #contact becomes 'contact')
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 ">
        <ScrollLink
          to="home" // Example scroll target for the logo, change to your actual scroll target
          smooth={true}
          spy={true}
          offset={-80}
          className="text-2xl md:text-5xl text-white font-semibold cursor-pointer"
        >
          <Image
            src="/images/logo.svg"
            alt="logo image"
            width={100}
            height={100}
          />
        </ScrollLink>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white cursor-pointer"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white cursor-pointer"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  spy={true}
                  offset={-80}
                  className="text-white cursor-pointer"
                >
                  {link.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
