import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Link from "next/link";
import styles from "./products.module.css";

export const metadata = {
    title: "Products — Bharath Agrovet Industries",
    description: "Premium poultry products — hatching eggs, day-old chicks, broiler feeds, live birds, and dressed chicken.",
};

const BASE = "https://www.bharathagrovet.com";

const products = [
    {
        title: "Broiler Hatching Eggs",
        tag: "Breeding",
        desc: "5 million hatching eggs per annum from our Hassan District breeding farm, produced under strict bio-security conditions.",
        img: "/images/products/Broiler Hatching Eggs.jpg",
    },
    {
        title: "Day Old Chicks",
        tag: "Hatchery",
        desc: "14 million quality chicks per year — commercial broiler and colour chicks from two state-of-the-art hatcheries.",
        img: "/images/products/Day Old Chicks.jpg",
    },
    {
        title: "Hi-Density Poultry Feeds",
        tag: "Feed Mill",
        desc: "Pre-starter, starter, finisher, and breeder feeds — 6,000+ tons per month from computerised formulations.",
        img: "/images/products/Hi-Density Poultry Feeds.jpg",
    },
    {
        title: "Broiler Feed Pre-Mixes",
        tag: "Feed Mill",
        desc: "Scientifically formulated pre-mix concentrates for optimum broiler growth and feed conversion efficiency.",
        img: "/images/products/Broiler Feed Pre-Mixes.jpeg",
    },
    {
        title: "Live Chicken",
        tag: "Farming",
        desc: "Healthy live broilers produced by 400+ contract farmers across coastal Karnataka, at competitive market rates.",
        img: "/images/products/Live Chicken.jpg",
    },
    {
        title: "Fresh Chilled Chicken",
        tag: "Processing",
        desc: "Halal certified hygienic chilled chicken — processed in conveyorised dressing plant at 1,000 birds/hour.",
        img: "/images/products/Fresh Chilled Chicken.jpg",
    },
    {
        title: "Breeder Feed Pre-Mixes",
        tag: "Feed Mill",
        desc: "Specialised pre-mix formulations designed for breeder flocks to maximise hatching egg quality and fertility.",
        img: "/images/products/Breeder Feed Pre-Mixes.jpg",
    },
    {
        title: "Parent Culls",
        tag: "Breeding",
        desc: "Retired parent stock — available for wholesale purchase at competitive pricing.",
        img: "/images/products/Parent Culls.jpg",
    },
];

export default function ProductsPage() {
    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/15.jpg`}
                title="Our Products"
                subtitle="Product Range"
                compact
            />

            {/* Split Intro */}
            <section className="section">
                <div className="container">
                    <div className={styles.introGrid}>
                        <AnimateOnScroll>
                            <div>
                                <span className="overline">Product Range</span>
                                <h2 className="heading-2">
                                    From Farm to Fork
                                </h2>
                                <div className="accent-bar" />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={2}>
                            <div>
                                <p className="text-large" style={{ color: "var(--color-gray)", marginBottom: "1.5rem" }}>
                                    Our vertically integrated poultry value chain delivers premium
                                    products at every stage — hatching eggs, chicks, feeds, live
                                    birds, and dressed chicken.
                                </p>
                                <Link href="/contact" className="btn btn--primary">
                                    Enquire Now →
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section section--cream" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className={styles.productsGrid}>
                        {products.map((p, i) => (
                            <AnimateOnScroll key={p.title} delay={(i % 3) + 1}>
                                <div className={styles.productCard}>
                                    <div className={styles.productImgWrap}>
                                        <img src={p.img} alt={p.title} />
                                        <span className={styles.productTag}>{p.tag}</span>
                                    </div>
                                    <div className={styles.productBody}>
                                        <h3 className={styles.productTitle}>{p.title}</h3>
                                        <p className={styles.productDesc}>{p.desc}</p>
                                        <div className={styles.productFooter}>
                                            <span className={styles.productLink}>
                                                Learn More
                                            </span>
                                            <span className={styles.productArrow}>→</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Product Banner */}
            <section className="section">
                <div className="container">
                    <AnimateOnScroll>
                        <div className={styles.featuredBanner}>
                            <div className={styles.featuredGrain} />
                            <div className={styles.featuredContent}>
                                <span className="overline" style={{ color: "var(--color-gold)" }}>Featured</span>
                                <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                                    Bharath&apos;s Premium Broiler Feeds
                                </h2>
                                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: "460px" }}>
                                    State-of-the-art crumbs &amp; pellet formulations, developed by experienced
                                    nutritionists for maximum feed conversion and bird health.
                                </p>
                                <Link href="/contact" className="btn btn--gold">
                                    Get Quote →
                                </Link>
                            </div>
                            <div className={styles.featuredImageWrap}>
                                <img src="/images/operations/Feed Mills.jpg" alt="Feed Mill" />
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGrain} />
                <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <AnimateOnScroll>
                        <span className="overline" style={{ justifyContent: "center" }}>Ready to Order?</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            Contact Our Sales Team
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            Whether you&apos;re looking for bulk orders or retail supplies, our team is ready to assist.
                        </p>
                        <Link href="/contact" className="btn btn--gold">
                            Get In Touch →
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}
