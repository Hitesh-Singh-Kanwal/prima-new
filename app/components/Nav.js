"use client";

import React from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

/** Dark background → white wordmark + orange mark (`public/images/logo.png`). */
const LOGO_DARK_MODE = "/images/logo.png";
/** Light background → dark wordmark (`public/images/logo-light.png`). */
const LOGO_LIGHT_MODE = "/images/logo-light.png";

const Nav = ({ isDarkMode, onToggleTheme, onRequestDemo }) => {
  const logoSrc = isDarkMode ? LOGO_DARK_MODE : LOGO_LIGHT_MODE;

  return (
    <nav>
      <a href="#home" className="logo">
        <Image
          src={logoSrc}
          alt="PrimaLabs"
          width={180}
          height={36}
          className="nav-logo-img"
          priority
        />
      </a>

      <div className="nav-right">
        <button
          onClick={onToggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
          type="button"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button onClick={onRequestDemo} className="btn btn-primary" type="button">
          Schedule a Demo
        </button>
      </div>
    </nav>
  );
};

export default Nav;
