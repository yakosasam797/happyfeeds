import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Link from "next/link";
import styles from "./indous.module.css";

export const metadata = {
    title: "Indous Bio — Virgin Coconut Oil & Natural Products",
    description: "Indous Bio produces premium virgin coconut oil from the finest coastal Karnataka coconuts.",
};

const BASE = "https://www.bharathagrovet.com";

const benefits = [
    { icon: "🛡", title: "Immunity Boost", desc: "Rich in lauric acid which supports the body's natural immune defense system." },
    { icon: "♥", title: "Heart Health", desc: "Contains healthy medium-chain fatty acids that support cardiovascular function." },
    { icon: "✦", title: "Skin & Hair", desc: "Natural moisturizer that nourishes skin and promotes healthy, shiny hair." },
    { icon: "⚕", title: "Anti-Inflammatory", desc: "Rich in antioxidants that help reduce inflammation and oxidative stress." },
    { icon: "🍳", title: "Cooking", desc: "High smoke point makes it ideal for sautéing, frying, and baking." },
    { icon: "⚡", title: "Energy", desc: "MCTs are quickly absorbed and converted to energy — a natural vitality booster." },
];

const certifications = [
    { icon: "🏅", title: "FSSAI Certified", desc: "Meeting India's highest food safety standards." },
    { icon: "🌿", title: "100% Natural", desc: "No chemicals, preservatives, or artificial additives." },
    { icon: "🥥", title: "Cold Pressed", desc: "Extracted at low temperatures to preserve all nutrients." },
];

export default function IndousBioPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/2.jpg`}
                title="Indous Bio"
                subtitle="Natural Products"
                compact
            />

            {/* Intro Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <AnimateOnScroll>
                            <div className={styles.indousImage}>
                                <img
                                    src="/images/operations/Farming.jpg"
                                    alt="Indous Bio Virgin Coconut Oil"
                                />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div>
                                <span className="overline">Indous Bio</span>
                                <h2 className="heading-2" style={{ marginBottom: "1.25rem" }}>
                                    Premium Virgin Coconut Oil
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-large text-muted" style={{ marginTop: "1.5rem" }}>
                                    Produced from the finest coconuts of coastal Karnataka, our
                                    virgin coconut oil is cold-pressed to preserve all natural
                                    nutrients, aroma, and flavor.
                                </p>
                                <p className="text-muted" style={{ marginTop: "1rem" }}>
                                    Indous Bio is a sister concern of Bharath Agrovet Industries,
                                    extending our commitment to quality into the natural products space.
                                </p>
                                <a href="/contact" className="btn btn--primary" style={{ marginTop: "2rem" }}>
                                    Enquire Now →
                                </a>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* VCO Banner with Overlay */}
            <div className={styles.vcoBanner}>
                <img src="/images/operations/Breeders.jpg" alt="Virgin Coconut Oil" />
                <div className={styles.vcoBannerOverlay}>
                    <AnimateOnScroll>
                        <div className={styles.vcoBannerContent}>
                            <span className={styles.vcoBadge}>100% Pure &amp; Natural</span>
                            <h2 className="heading-2 text-white" style={{ marginBottom: "1rem" }}>
                                Nature&apos;s Most Versatile Oil
                            </h2>
                            <p className="text-large" style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                                Cold-pressed from hand-picked coconuts — retaining all the goodness
                                of lauric acid, MCTs, and natural antioxidants.
                            </p>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>

            {/* Benefits Grid */}
            <section className="section">
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Benefits</span>
                            <h2 className="heading-2">Why Virgin Coconut Oil?</h2>
                            <div className="accent-bar accent-bar--center" />
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((b, i) => (
                            <AnimateOnScroll key={b.title} delay={(i % 3) + 1}>
                                <div className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>{b.icon}</div>
                                    <h3 className={styles.benefitTitle}>{b.title}</h3>
                                    <p className={styles.benefitDesc}>{b.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section section--cream">
                <div className="container">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Quality Assurance</span>
                            <h2 className="heading-3">Our Certifications</h2>
                            <div className="accent-bar accent-bar--center" />
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.certGrid}>
                        {certifications.map((c, i) => (
                            <AnimateOnScroll key={c.title} delay={i + 1}>
                                <div className={styles.certCard}>
                                    <div className={styles.certIconWrap}>{c.icon}</div>
                                    <h4 className={styles.certTitle}>{c.title}</h4>
                                    <p className={styles.certDesc}>{c.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Explore More</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            See Our Full Product Range
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            Beyond virgin coconut oil — discover our complete range of premium poultry products.
                        </p>
                        <Link href="/products" className="btn btn--gold">
                            View Products →
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
