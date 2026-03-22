"use client";

import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <>
            {/* ── Hero: Image Card Left + Form Right ── */}
            <section className={styles.heroSection}>
                <div className="container">
                    <div className={styles.heroGrid}>
                        {/* Left — Image Card with text overlay */}
                        <div className={styles.imageCard}>
                            <img src="/images/operations/Feed Mills.jpg" alt="Bharath Agrovet" />
                            <div className={styles.imageCardOverlay}>
                                <span className={styles.heroTag}>Contact Us</span>
                                <h1 className={styles.heroTitle}>
                                    Let&apos;s get<br />
                                    <span className={styles.heroTitleAccent}>in touch</span>
                                </h1>
                                <p className={styles.heroDesc}>
                                    Whether you need product enquiries, partnership
                                    opportunities, or consultancy — our experts are
                                    ready to support you.
                                </p>
                                <div className={styles.contactInfoRow}>
                                    <div className={styles.contactInfoItem}>
                                        <span className={styles.contactInfoDot} />
                                        <a href="tel:+918242443498">+91 824-2443498</a>
                                    </div>
                                    <div className={styles.contactInfoItem}>
                                        <span className={styles.contactInfoDot} />
                                        <a href="mailto:bharathpf@gmail.com">bharathpf@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Form */}
                        <div className={styles.formPanel}>
                            <div className={styles.formHeader}>
                                <span className="overline">Send a Message</span>
                                <h2 className="heading-3">How Can We Help?</h2>
                                <div className="accent-bar" />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Area of Interest</label>
                                <select defaultValue="">
                                    <option value="" disabled>Select an option</option>
                                    <option>Product Enquiry</option>
                                    <option>Partnership / Dealership</option>
                                    <option>Consultancy</option>
                                    <option>Career Opportunities</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Your name" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email Address</label>
                                    <input type="email" placeholder="you@company.com" />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>Phone (optional)</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Company (optional)</label>
                                    <input type="text" placeholder="Your company name" />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>How can we help?</label>
                                <textarea placeholder="Tell us about your enquiry..." />
                            </div>
                            <button className="btn btn--primary" style={{ width: "100%" }}>
                                Submit →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Map + Address Section ── */}
            <section className={styles.mapSection}>
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Find Us</span>
                            <h2 className="heading-2">Our Location</h2>
                            <div className="accent-bar accent-bar--center" />
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll>
                        <div className={styles.mapGrid}>
                            <div className={styles.mapWrap}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.04!2d74.8420!3d12.8980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a43d0c1e2f3%3A0x1234567890abcdef!2sMannagudda%2C%20Mangaluru%2C%20Karnataka%20575003!5e0!3m2!1sen!2sin!4v1234567890"
                                    loading="lazy"
                                    title="Bharath Agrovet Industries Location"
                                />
                            </div>

                            <div className={styles.mapContent}>
                                <h3 className="heading-4" style={{ marginBottom: "0.5rem" }}>
                                    Bharath Agrovet Industries
                                </h3>
                                <p className="text-muted" style={{ marginBottom: "var(--space-md)" }}>
                                    Three decades of excellence in integrated poultry production across coastal Karnataka.
                                </p>

                                <div className={styles.addressBlock}>
                                    <div className={styles.addressItem}>
                                        <div className={styles.addressIcon}>📍</div>
                                        <div>
                                            <div className={styles.addressLabel}>Head Office</div>
                                            <div className={styles.addressText}>
                                                Mannagudda, Mangaluru 575003<br />
                                                Karnataka, India
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.addressItem}>
                                        <div className={styles.addressIcon}>📞</div>
                                        <div>
                                            <div className={styles.addressLabel}>Phone</div>
                                            <div className={styles.addressText}>
                                                <a href="tel:+918242443498">+91 824-2443498</a> / <a href="tel:+918242443499">2443499</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.addressItem}>
                                        <div className={styles.addressIcon}>✉️</div>
                                        <div>
                                            <div className={styles.addressLabel}>Email</div>
                                            <div className={styles.addressText}>
                                                <a href="mailto:bharathpf@gmail.com">bharathpf@gmail.com</a><br />
                                                <a href="mailto:info@bharathagrovet.com">info@bharathagrovet.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.addressItem}>
                                        <div className={styles.addressIcon}>🕐</div>
                                        <div>
                                            <div className={styles.addressLabel}>Working Hours</div>
                                            <div className={styles.addressText}>
                                                Monday – Saturday, 9:00 AM – 6:00 PM IST
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
