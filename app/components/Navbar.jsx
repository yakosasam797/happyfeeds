"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/activities", label: "Activities" },
    { href: "/products", label: "Products" },
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
        <>
            {/* ── Top Utility Bar ── */}
            <div className={`${styles.topBar} ${scrolled ? styles.topBarHidden : ""}`}>
                <div className={styles.topBarInner}>
                    <div className={styles.topBarLeft}>
                        <Link href="/about" className={styles.topBarLink}>Career</Link>
                        <span className={styles.topBarDivider}>|</span>
                        <Link href="/contact" className={styles.topBarLink}>Locate Us</Link>
                        <span className={styles.topBarDivider}>|</span>
                        <Link href="/products" className={styles.topBarLink}>Downloads</Link>
                    </div>
                    <div className={styles.topBarRight}>
                        <span className={styles.topBarLink}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px", verticalAlign: "-2px" }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            Login
                        </span>
                        <span className={styles.topBarDivider}>|</span>
                        <span className={styles.topBarLink}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "4px", verticalAlign: "-2px" }}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                            Global | English
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Main Navbar ── */}
            <header className={navbarClass}>
            <div className={styles.inner}>
                <Link href="/" className={styles.logo}>
                    <img
                        src="/images/logo02.png"
                        alt="Happy Feeds & Farms Logo"
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
        </>
    );
}
