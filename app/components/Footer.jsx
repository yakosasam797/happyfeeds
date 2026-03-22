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
                            <li><Link href="/activities">Breeders</Link></li>
                            <li><Link href="/activities">Hatchery</Link></li>
                            <li><Link href="/activities">Broiler Farms</Link></li>
                            <li><Link href="/activities">Feed Mill</Link></li>
                            <li><Link href="/activities">Processing</Link></li>
                            <li><Link href="/activities">Retailing</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 — Products */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Products</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/products">Broiler Hatching Eggs</Link></li>
                            <li><Link href="/products">Day Old Chicks</Link></li>
                            <li><Link href="/products">Broiler Birds</Link></li>
                            <li><Link href="/products">Chilled Chicken</Link></li>
                            <li><Link href="/products">Poultry Feed</Link></li>
                            <li><Link href="/products">Parent Culls</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 — Company */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/activities">Our Activities</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/indous-bio">Indous Bio</Link></li>
                            <li><a href="https://www.bharathagrovet.com" target="_blank" rel="noopener noreferrer">Main Website</a></li>
                        </ul>
                    </div>

                    {/* Column 4 — Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.colHeading}>Contact</h4>
                        <ul className={styles.linkList}>
                            <li><span>Thumbe, Mangaluru – 574143</span></li>
                            <li><span>Dakshina Kannada, Karnataka</span></li>
                            <li><a href="mailto:info@bharathagrovet.com">info@bharathagrovet.com</a></li>
                            <li><a href="https://www.bharathagrovet.com" target="_blank" rel="noopener noreferrer">www.bharathagrovet.com</a></li>
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
                        src="https://www.bharathagrovet.com/images/logo.jpg"
                        alt="Bharath Agrovet Logo"
                        className={styles.bottomLogo}
                    />

                    <div className={styles.bottomRight}>
                        <p className={styles.copyright}>
                            © {CURRENT_YEAR} Bharath Agrovet Industries Pvt. Ltd.
                        </p>
                        <span className={styles.bottomDot}>·</span>
                        <span className={styles.legalLink}>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
