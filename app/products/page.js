import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Link from "next/link";
import styles from "./products.module.css";

export const metadata = {
    title: "Products — Happy Poultry",
    description: "Happy Poultry products — broiler chicks, poultry feeds, poultry supplements, live birds, fresh Halal chilled chicken, and processed / dressed chicken.",
};

const products = [
    {
        title: "Broiler Chicks",
        tag: "Farming",
        desc: "Healthy broiler chicks marketed through our nearby region. Contact our marketing team to buy.",
        img: "/images/products/Day Old Chicks.jpg",
    },
    {
        title: "Poultry Feeds",
        tag: "Feed",
        desc: "Rich nutritious feeds made with best quality ingredients, helping our poultry farmers achieve desired weight and better FCR.",
        img: "/images/products/Hi-Density Poultry Feeds.jpg",
    },
    {
        title: "Poultry Supplements",
        tag: "Nutrition",
        desc: "All kinds of poultry supplements available to support optimum bird health and performance.",
        img: "/images/products/Broiler Feed Pre-Mixes.jpeg",
    },
    {
        title: "Live Birds",
        tag: "Farming",
        desc: "Our healthy live birds are marketed through our Kasaragod facility. Contact our marketing team to buy.",
        img: "/images/products/Live Chicken.jpg",
    },
    {
        title: "Fresh Chilled Chicken",
        tag: "Retail",
        desc: "Fresh Halal chilled and frozen chicken marketed through institutional supply and our retail outlets.",
        img: "/images/products/Fresh Chilled Chicken.jpg",
    },
    {
        title: "Processed / Dressed Chicken",
        tag: "Processing",
        desc: "Fresh dressed chicken processed at our Badiadka unit and supplied to restaurants, caterers, and institutions.",
        img: "/images/products/Parent Culls.jpg",
    },
];

export default function ProductsPage() {
    return (
        <>
            <HeroBanner
                imageSrc="/images/products/Fresh Chilled Chicken.jpg"
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
                                    Our integrated poultry value chain delivers quality
                                    products at every stage — from broiler chicks and feeds
                                    to live birds and Halal chilled chicken.
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
                                    Happy Poultry&apos;s Fresh Halal Chicken
                                </h2>
                                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: "2rem", maxWidth: "460px" }}>
                                    Hygienic, Halal-certified chilled chicken processed in our conveyorised
                                    dressing plant at Badiadka, supplied fresh to restaurants, institutions,
                                    and our retail outlets across Kasaragod.
                                </p>
                                <Link href="/contact" className="btn btn--gold">
                                    Get Quote →
                                </Link>
                            </div>
                            <div className={styles.featuredImageWrap}>
                                <img src="/images/operations/Processing.jpg" alt="Chicken Processing Unit" />
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
