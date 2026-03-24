import Link from "next/link";
import styles from "./Footer.module.css";

const CURRENT_YEAR = 2026;

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* ── 4-Column Links Section ── */}
                <div className={styles.linksGrid}>
                    {/* Column 1 — Operations */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Operations</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/activities">Farms</Link></li>
                            <li><Link href="/activities">Chicken Processing Unit</Link></li>
                            <li><Link href="/activities">Retailing</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 — Products */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Products</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/products">Broiler Chicks</Link></li>
                            <li><Link href="/products">Poultry Feeds</Link></li>
                            <li><Link href="/products">Poultry Supplements</Link></li>
                            <li><Link href="/products">Live Birds</Link></li>
                            <li><Link href="/products">Fresh Chilled Chicken</Link></li>
                            <li><Link href="/products">Processed / Dressed Chicken</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 — Company */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/activities">Our Activities</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 — Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Contact</h4>
                        <ul className={styles.linkList}>
                            <li><span>BGP XII 628, Parekkar Complex</span></li>
                            <li><span>Badiadka, Kasaragod – 671 551</span></li>
                            <li><a href="tel:+919846241851">+91 9846241851</a></li>
                            <li><a href="mailto:info@happypoultry.co.in">info@happypoultry.co.in</a></li>
                            <li><a href="https://www.happypoultry.co.in" target="_blank" rel="noopener noreferrer">www.happypoultry.co.in</a></li>
                        </ul>

                        <Link href="/contact" className={styles.ctaBtn}>
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* ── Bottom Bar ── */}
                <div className={styles.divider} />

                <div className={styles.bottomBar}>
                    <img
                        src="/images/logo.png"
                        alt="Happy Feeds & Farms Logo"
                        className={styles.bottomLogo}
                    />

                    <div className={styles.bottomRight}>
                        <p className={styles.copyright}>
                            © {CURRENT_YEAR} Happy Poultry. All rights reserved.
                        </p>
                        <span className={styles.bottomDot}>·</span>
                        <span className={styles.legalLink}>Badiadka, Kasaragod, Kerala</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
