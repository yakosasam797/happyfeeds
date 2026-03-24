import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Link from "next/link";
import styles from "./activities.module.css";

export const metadata = {
    title: "Activities — Happy Poultry",
    description: "From contract farming and chicken processing to Halal retail — Happy Poultry's three pillars of excellence in Kasaragod.",
};

const operations = [
    {
        num: "01",
        title: "Farms",
        desc: "We have tied up with more than 100 farmers to produce broilers on a contractual basis. This has opened up employment opportunities in rural areas and helped them achieve economic stability. Our team of trained managers and supervisors work with farmers to produce healthy poultry — sold live and processed according to market requirements.",
        img: "/images/operations/Farming.jpg",
    },
    {
        num: "02",
        title: "Chicken Processing Unit",
        desc: "We have installed a conveyorised dressing unit at Badiadka, at the outskirts of Kasaragod, in a spacious location with an hourly dressing capacity of 500 birds. The unit ensures hygienic, Halal-certified processing that meets the highest standards for institutional and retail supply.",
        img: "/images/operations/Processing.jpg",
    },
    {
        num: "03",
        title: "Retailing",
        desc: "We have established 3 retail outlets in and around Kasaragod. Our Halal chilled chicken has been well received by renowned restaurants, institutions, and the general public — which has encouraged us to reach more customers and expand our presence in the region.",
        img: "/images/from-me/p5.png",
    },
];

export default function ActivitiesPage() {
    return (
        <>
            <HeroBanner
                imageSrc="/images/operations/Farming.jpg"
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
                                <span className="overline">Our Value Chain</span>
                                <h2 className="heading-2">
                                    3 Pillars of Excellence
                                </h2>
                                <div className="accent-bar" />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div>
                                <p className="text-large" style={{ color: "var(--color-gray)", marginBottom: "1.5rem" }}>
                                    From contract farming through Halal processing to retail
                                    outlets — every step is managed with care and precision.
                                </p>
                                <p style={{ color: "var(--color-gray)", marginBottom: "2.5rem" }}>
                                    Our integrated approach ensures quality control at every
                                    stage, bringing fresh, nutritious chicken from the farm
                                    directly to our customers&apos; tables.
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
                            From broiler chicks and poultry feeds to fresh Halal chilled chicken and live birds.
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
