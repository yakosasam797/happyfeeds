import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./about.module.css";

export const metadata = {
    title: "About Us — Happy Poultry",
    description: "Happy Poultry is a family-owned poultry partnership in Badiadka, Kasaragod with over 20 years of experience delivering quality Halal chicken.",
};

const stats = [
    { number: "20+", label: "Years Experience", desc: "Two decades of trusted chicken business in Kasaragod, Kerala." },
    { number: "100+", label: "Partner Farmers", desc: "Contract farmers producing healthy broilers, creating rural employment." },
    { number: "3", label: "Retail Outlets", desc: "Halal chilled chicken outlets in and around Kasaragod." },
    { number: "500", label: "Birds/Hour", desc: "Conveyorised dressing unit at Badiadka for hygienic processing." },
];

const timeline = [
    { year: "2000s", title: "The Foundation", desc: "Happy Poultry was established as a family-owned partnership concern in Badiadka, Kasaragod, Kerala — beginning its journey in the chicken business." },
    { year: "Growth", title: "100+ Farmers", desc: "Tied up with more than 100 farmers to produce broilers on a contractual basis, opening employment opportunities in rural areas." },
    { year: "Processing", title: "Chicken Processing Unit", desc: "Installed a conveyorised dressing unit at Badiadka with a capacity of 500 birds per hour, ensuring hygienic Halal-certified processing." },
    { year: "Retail", title: "Retail Expansion", desc: "Established 3 retail outlets in and around Kasaragod, with Halal chilled chicken well received by restaurants, institutions, and the public." },
    { year: "Today", title: "Committed to Quality", desc: "Continuing to serve Kasaragod with quality chicken, scientific management practices, and consistent improvement across the value chain." },
];

const policyItems = [
    "Educate and implement excellent poultry production practices",
    "Promote a unique quality culture where everyone feels empowered",
    "Maintain long-term, mutually rewarding relationships with customers",
    "Consistent and continuous improvement in all our operations",
];

export default function AboutPage() {
    return (
        <>
            <HeroBanner
                imageSrc="/images/operations/Farming.jpg"
                title="About Happy Poultry"
                subtitle="Our Story"
                compact
            />

            {/* Company Story */}
            <section className="section">
                <div className="container">
                    <div className={styles.storyGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Family Business</span>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>
                                    Twenty Years of Excellence in Poultry
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-large text-muted" style={{ marginTop: "1.5rem" }}>
                                    &ldquo;HAPPY POULTRY&rdquo; is a family-owned partnership concern —
                                    a fast-growing poultry group based in Badiadka, Kasaragod
                                    District, Kerala. We&apos;ve been in the chicken business for
                                    over twenty years and enjoy a strong reputation as providers
                                    of quality chicken with good scientific management practices.
                                </p>
                                <p className="text-muted" style={{ marginTop: "1rem" }}>
                                    With consistent and continuous improvement, Happy Poultry has
                                    contributed significantly to the poultry industry and rural
                                    economy in and around Kasaragod.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.storyImageStack}>
                                <div className={styles.storyImageMain}>
                                    <img src="/images/operations/Farming.jpg" alt="Happy Poultry Farms" />
                                </div>
                                <div className={styles.storyImageSecondary}>
                                    <img src="/images/products/Fresh Chilled Chicken.jpg" alt="Halal Chilled Chicken" />
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Stats Band */}
            <section className={styles.statsBand}>
                <div className="container">
                    <div className={styles.statsHeader}>
                        <div>
                            <AnimateOnScroll>
                                <h2 className={styles.statsHeading}>Our numbers speak for themselves.</h2>
                                <p className={styles.statsSubtext}>
                                    Two decades of integrated poultry operations across Kasaragod, Kerala.
                                </p>
                            </AnimateOnScroll>
                        </div>
                        <AnimateOnScroll delay={1}>
                            <a href="/activities" className="btn btn--primary">
                                Explore Activities →
                            </a>
                        </AnimateOnScroll>
                    </div>
                    <div className={styles.statsDivider} />
                    <div className={styles.statsGrid}>
                        {stats.map((s, i) => (
                            <AnimateOnScroll key={s.label} delay={i + 1}>
                                <div className={styles.statCard}>
                                    <span className={styles.statNumber}>{s.number}</span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                    <p className={styles.statDesc}>{s.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Journey */}
            <section className="section section--cream">
                <div className="container container--narrow">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Our Journey</span>
                            <h2 className="heading-2">The Happy Poultry Story</h2>
                            <div className="accent-bar accent-bar--center" />
                        </div>
                    </AnimateOnScroll>

                    <div className={styles.timeline}>
                        {timeline.map((item, i) => (
                            <AnimateOnScroll key={i} delay={i % 3}>
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineDot} />
                                    <span className={styles.timelineYear}>{item.year}</span>
                                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                                    <p className={styles.timelineDesc}>{item.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Policy */}
            <section className="section">
                <div className="container container--narrow">
                    <AnimateOnScroll>
                        <div className={styles.policySection}>
                            <span className="overline" style={{ justifyContent: "center" }}>Quality Policy</span>
                            <h2 className="heading-2" style={{ marginBottom: "0.75rem" }}>
                                An Edge in Quality &amp; Service
                            </h2>
                            <div className="accent-bar accent-bar--center" />
                            <p className="text-large text-muted" style={{ marginTop: "1.5rem", maxWidth: "650px", marginInline: "auto" }}>
                                In fulfilling our mission, we strive to exceed customers&apos;
                                expectations by consistently delivering nutritious, quality
                                chicken at low cost, with continual inclusive growth.
                            </p>
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.policyGrid}>
                        {policyItems.map((item, i) => (
                            <AnimateOnScroll key={i} delay={i + 1}>
                                <div className={styles.policyCard}>
                                    <p>{item}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className={styles.vmSection}>
                <div className={styles.vmGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Our Direction</span>
                            <h2 className="heading-2 text-white">Vision &amp; Mission</h2>
                            <div className="accent-bar accent-bar--center" />
                        </div>
                    </AnimateOnScroll>
                    <div className={styles.vmGrid}>
                        <AnimateOnScroll>
                            <div className={styles.vmCard}>
                                <span className={styles.vmLabel}>Mission</span>
                                <p className={styles.vmText}>
                                    We are committed to producing &amp; marketing nutritious
                                    chicken at low cost to customers who look for consistent
                                    quality. We establish and maintain long-term, mutually
                                    rewarding relationships with our customers.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.vmCard}>
                                <span className={styles.vmLabel}>Values</span>
                                <ul className={styles.missionList}>
                                    <li><strong>Integrity</strong> — Communicate openly, fulfill promises, treat all with fairness and respect</li>
                                    <li><strong>Excellence</strong> — Consistently deliver innovative, quality work that exceeds expectations</li>
                                    <li><strong>Commitment</strong> — Do what we say and deliver results you can depend on every time</li>
                                    <li><strong>Relationships</strong> — Nurture our customers, farmers, suppliers, and employees at all times</li>
                                </ul>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Discover More</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            See Our Operations in Action
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            From contract farming and processing to Halal retail — explore how we deliver quality at every step.
                        </p>
                        <a href="/activities" className="btn btn--gold">
                            Explore Activities →
                        </a>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
