"use client"
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo}>
        H&S
      </Link>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>

        <ThemeToggle />
      </div>
    </div>
  );
};
