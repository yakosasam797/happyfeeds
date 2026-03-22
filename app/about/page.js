import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import styles from "./about.module.css";

export const metadata = {
    title: "About Us — Bharath Agrovet Industries",
    description: "Leading poultry producing company in Mangaluru with over 3 decades of experience.",
};

const BASE = "https://www.bharathagrovet.com";

const stats = [
    { number: "50 Lakh+", label: "Hatching Eggs", desc: "Annually from our breeding farm at Hassan District." },
    { number: "1.4 Crore+", label: "Chicks Per Year", desc: "From 2 own hatcheries, round the clock." },
    { number: "400+", label: "Partner Farmers", desc: "Creating rural employment across the region." },
    { number: "6,000+", label: "Tons Feed Monthly", desc: "State-of-the-art crumbs & pellet mill at Thumbe." },
];

const timeline = [
    { year: "1990s", title: "The Foundation", desc: "Our founders began their careers in the poultry industry, accumulating over 3 decades of technical and marketing expertise across coastal Karnataka." },
    { year: "2005", title: "Bharath Agrovet is Born", desc: "Established in Mangaluru by marketing and veterinary professionals with a vision to promote superior poultry products and services." },
    { year: "2008", title: "Hatchery Expansion", desc: "Expanded to 2 hatcheries at Mangalore and Kundapura with 14 million chick capacity, functioning round the clock." },
    { year: "2012", title: "Feed Mill Launch", desc: "Commissioned state-of-the-art crumbs & pellet mill at Thumbe with 6,000+ tons monthly production capacity." },
    { year: "2016", title: "Processing & Retail", desc: "Launched conveyorised dressing unit at Ganjimutt and opened retail outlets — Chilly Chicken and Meat Junction." },
    { year: "2020", title: "Indous Bio", desc: "Launched Indous Bio — a sister concern producing premium virgin coconut oil from coastal Karnataka coconuts." },
    { year: "Today", title: "Integrated Value Chain", desc: "A fully integrated poultry operation — breeding, hatching, feed, farming, processing, and retail — serving coastal Karnataka and Kerala." },
];

const policyItems = [
    "Technical upgradation of our sales staff",
    "Educate and implement excellent poultry production practices",
    "Promote a unique quality culture where employees feel empowered",
    "Reward and recognize performers to increase efficiency",
];

export default function AboutPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/4.jpg`}
                title="About Bharath Agrovet"
                subtitle="Our Story"
                compact
            />

            {/* Company Story */}
            <section className="section">
                <div className="container">
                    <div className={styles.storyGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Established 2005</span>
                                <h2 className="heading-2" style={{ marginBottom: "1.5rem" }}>
                                    Three Decades of Excellence in Poultry
                                </h2>
                                <div className="accent-bar" />
                                <p className="text-large text-muted" style={{ marginTop: "1.5rem" }}>
                                    &ldquo;BHARATH AGROVET INDUSTRIES&rdquo; is a leading poultry producing
                                    company in Mangaluru managed by technical &amp; marketing
                                    professionals with more than 3 decades of experience,
                                    &ldquo;COMMITTED TO QUALITY &amp; SERVICE&rdquo;.
                                </p>
                                <p className="text-muted" style={{ marginTop: "1rem" }}>
                                    Bharath Agrovet Industries today has contributed significantly
                                    to the overall growth of poultry industry in coastal districts
                                    of Karnataka and Kerala.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.storyImageStack}>
                                <div className={styles.storyImageMain}>
                                    <img src={`${BASE}/images/banner_images/2.jpg`} alt="Operations" />
                                </div>
                                <div className={styles.storyImageSecondary}>
                                    <img src={`${BASE}/gallery_images/2089296197A2.jpg`} alt="Facilities" />
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
                                    Three decades of integrated poultry operations across coastal Karnataka &amp; Kerala.
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

            {/* Timeline Journey — Unique to About Page */}
            <section className="section section--cream">
                <div className="container container--narrow">
                    <AnimateOnScroll>
                        <div style={{ textAlign: "center", marginBottom: "var(--space-xl)" }}>
                            <span className="overline" style={{ justifyContent: "center" }}>Our Journey</span>
                            <h2 className="heading-2">The Bharath Agrovet Story</h2>
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
                                An Edge in Quality &amp; Services
                            </h2>
                            <div className="accent-bar accent-bar--center" />
                            <p className="text-large text-muted" style={{ marginTop: "1.5rem", maxWidth: "650px", marginInline: "auto" }}>
                                In fulfilling our mission of having an edge in quality and services,
                                we strive to exceed customers&apos; expectations and excel in continual inclusive growth.
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
                                <span className={styles.vmLabel}>Vision</span>
                                <p className={styles.vmText}>
                                    We aspire to be the foremost poultry producer celebrated for our
                                    commitment to delivering wholesome and affordable protein options
                                    to society, while also generating employment opportunities and
                                    contributing significantly to the nation&apos;s progress.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div className={styles.vmCard}>
                                <span className={styles.vmLabel}>Mission</span>
                                <ul className={styles.missionList}>
                                    <li>Minimal usage of natural resources and conserving the same</li>
                                    <li>Continuously improve operations and enhance customer experience</li>
                                    <li>Ensure equitable growth and welfare of all employees and stakeholders</li>
                                    <li>Invest in innovation and advancement for the best output</li>
                                    <li>Explore all opportunities for sustainable growth</li>
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
                            From breeding and hatching to feed production and retail — explore how we deliver quality at every step.
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
