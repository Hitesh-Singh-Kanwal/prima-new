"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

/** Dark background → white wordmark + orange mark (`public/images/logo.png`). */
const LOGO_DARK_MODE = "/images/logo.png";
/** Light background → dark wordmark (`public/images/logo-light.png`). */
const LOGO_LIGHT_MODE = "/images/logo-light.png";

const Nav = ({ isDarkMode, onToggleTheme, onRequestDemo }) => {
  const logoSrc = isDarkMode ? LOGO_DARK_MODE : LOGO_LIGHT_MODE;

  return (
    <nav className="site-nav" aria-label="Main">
      <Link href="/" className="logo">
        <Image
          src={logoSrc}
          alt="PrimaLabs"
          width={180}
          height={36}
          sizes="(max-width: 480px) 42vw, 220px"
          className="nav-logo-img"
          priority
        />
      </Link>

      <div className="nav-right">
        <button
          onClick={onToggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
          type="button"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button
          onClick={onRequestDemo}
          className="btn btn-primary nav-demo-btn"
          type="button"
          aria-label="Schedule a demo"
        >
          <span className="nav-demo-label nav-demo-label--full">Schedule a Demo</span>
          <span className="nav-demo-label nav-demo-label--short">Demo</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
