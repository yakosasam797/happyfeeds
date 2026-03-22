"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Activities" },
    { href: "/products", label: "Products" },
    { href: "/indous-bio", label: "Indous Bio" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    const handleScroll = useCallback(() => {
        if (ticking.current) return;
        ticking.current = true;

        requestAnimationFrame(() => {
            const currentY = window.scrollY;
            const isScrolled = currentY > 60;

            setScrolled(isScrolled);

            // Only hide/show when scrolled past the hero area
            if (currentY > 120) {
                if (currentY > lastScrollY.current + 8) {
                    // Scrolling DOWN — hide navbar
                    setHidden(true);
                } else if (currentY < lastScrollY.current - 8) {
                    // Scrolling UP — show navbar
                    setHidden(false);
                }
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentY;
            ticking.current = false;
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const navbarClass = [
        styles.navbar,
        scrolled ? styles.scrolled : "",
        hidden && !menuOpen ? styles.hidden : "",
    ].filter(Boolean).join(" ");

    return (
        <header className={navbarClass}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <img
                        src="https://www.bharathagrovet.com/images/logo.jpg"
                        alt="Bharath Agrovet Logo"
                        className={styles.logoImage}
                    />
                </Link>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.navCta}
                        onClick={() => setMenuOpen(false)}
                    >
                        Get in Touch
                    </Link>
                </nav>

                <button
                    className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
