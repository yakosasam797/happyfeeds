import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Link from "next/link";
import styles from "./activities.module.css";

export const metadata = {
    title: "Activities — Bharath Agrovet Industries",
    description: "From breeding and hatching to feed mills, processing, and retailing — our integrated poultry operations.",
};

const BASE = "https://www.bharathagrovet.com";

const operations = [
    {
        num: "01",
        title: "Breeders",
        desc: "Our own breeding farm at Hassan district produces 5 million hatching eggs per annum, maintaining 50,000 breeders under strict bio-security practices. Equipped with the latest gadgets and backed by qualified technical staff.",
        img: "/images/operations/Breeders.jpg",
    },
    {
        num: "02",
        title: "Hatcheries",
        desc: "Two own hatcheries at Mangalore and Kundapura with an annual capacity of 14 million chicks. Functioning round the clock under trained staff, achieving 82–85% average hatchability.",
        img: "/images/operations/Hatcheries.webp",
    },
    {
        num: "03",
        title: "Feed Mills",
        desc: "State-of-the-art crumbs & pellet mill at Thumbe producing 6,000+ tons monthly. Using computerized feed formulations and top-grade raw materials for industry-leading feed quality.",
        img: "/images/operations/Feed Mills.jpg",
    },
    {
        num: "04",
        title: "Farming",
        desc: "400+ contract farmers producing healthy broilers across coastal Karnataka. A skilled, dedicated team manages day-to-day activities — data recording, health coverage, and marketing — creating rural employment.",
        img: "/images/operations/Farming.jpg",
    },
    {
        num: "05",
        title: "Processing",
        desc: "Conveyorised dressing unit at Ganjimutt processes 1,000 birds per hour. Equipped with rendering plant, ETP, bio gas plant (400 units/day), and cold storage for Halal certified chilled chicken.",
        img: "/images/operations/Processing.jpg",
    },
    {
        num: "06",
        title: "Retailing",
        desc: "Five retail outlets across Mangalore — three 'Chilly Chicken' and two 'Meat Junction' outlets — delivering Halal chilled chicken to restaurants, caterers, and direct customers.",
        img: "/images/operations/Retailing.jpg",
    },
    {
        num: "07",
        title: "Consultancy",
        desc: "Qualified consultants guide upcoming entrepreneurs and existing poultry farmers. We have set up and commissioned hatcheries, feed mills, and turn-key poultry projects in India and abroad.",
        img: `${BASE}/images/banner_images/20.jpg`,
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/10.jpg`}
                title="Our Activities"
                subtitle="Operations"
                compact
            />

            {/* Split Intro */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Integrated Value Chain</span>
                                <h2 className="heading-2">
                                    7 Pillars of Excellence
                                </h2>
                                <div className="accent-bar" />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div>
                                <p className="text-large" style={{ color: "var(--color-gray)", marginBottom: "1.5rem" }}>
                                    From breeding and hatching through feed production, farming, processing, and
                                    retail — every step is managed with precision and care.
                                </p>
                                <p style={{ color: "var(--color-gray)", marginBottom: "2.5rem" }}>
                                    Our vertically integrated model ensures quality control at every stage,
                                    from the farm to the consumer&apos;s table.
                                </p>
                                <Link href="/products" className="btn btn--primary">
                                    View Products →
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Alternating Operation Blocks */}
            <section className="section section--cream" style={{ paddingTop: 0 }}>
                <div className="container">
                    {operations.map((op, i) => (
                        <AnimateOnScroll key={op.num}>
                            <div
                                className={`${styles.opBlock} ${i % 2 === 1 ? styles.opBlockReversed : ""}`}
                            >
                                <div className={styles.opImageWrap}>
                                    <img src={op.img} alt={op.title} />
                                    <div className={styles.opNum}>{op.num}</div>
                                </div>
                                <div className={styles.opContent}>
                                    <span className={styles.opTag}>{op.num}</span>
                                    <h3 className="heading-3" style={{ marginBottom: "0.5rem" }}>
                                        {op.title}
                                    </h3>
                                    <div className="accent-bar" />
                                    <p className="text-muted" style={{ marginTop: "1.25rem", lineHeight: "1.85" }}>
                                        {op.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Next Step</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            Explore Our Product Range
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            From hatching eggs and day-old chicks to premium poultry feeds and fresh chilled chicken.
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
