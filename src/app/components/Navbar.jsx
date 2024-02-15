"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black text-white" >
      <div className="flex items-center justify-between mx-auto px-6 py-6 w-full">
        {/* Mobile menu button stays on the left */}
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="text-xl p-3 flex items-center">
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="text-xl p-3 flex items-center">
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Navigation Links: Centered within the full width of the navbar */}
        <div className="hidden md:flex w-full justify-center">
          <ul className="flex space-x-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="font-bold text-xl">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>

  );
};

export default Navbar;
