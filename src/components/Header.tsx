"use client";

import { useState } from "react";
import { FaGripLines } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import "./styles/Header.scss";

export const Header = () => {
  const [isDark, setIsDark] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleTheme = () => {
    setIsDark((theme) => !theme);
  };

  const handleNav = () => {
    setIsNavOpen((nav) => !nav);
  };

  return (
    <header className="header-wrapper">
      <div className="header">
        <h1 className="logo">Vivek •</h1>
        <nav className="nav">
          {isDark ? (
            <MdLightMode className="theme-icon" onClick={handleTheme} />
          ) : (
            <MdDarkMode className="theme-icon" onClick={handleTheme} />
          )}
          {!isNavOpen ? (
            <FaGripLines className="hamburger" onClick={handleNav} />
          ) : (
            <FaTimes className="hamburger" onClick={handleNav} />
          )}
        </nav>
      </div>
    </header>
  );
};
