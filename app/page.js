"use client";

import AnimateOnScroll from "./components/AnimateOnScroll";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect, useCallback, useRef } from "react";

const BASE = "https://happypoultry.co.in";

/* ── Hero slides ── */
const heroSlides = [
  {
    img: `${BASE}/images/slider/1.jpg`,
    title: "Poultry Performance\n& Productivity",
    sub: "Since 2000 — Badiadka, Kasaragod",
  },
  {
    img: "/images/operations/Farming.jpg",
    title: "We Farm Chickens\nEthically & Profitably",
    sub: "100+ Contract Farmers • Rural Employment",
  },
  {
    img: "/images/products/Fresh Chilled Chicken.jpg",
    title: "Premium Halal\nChilled Chicken",
    sub: "From Farm to Fork — With Care",
  },
];

/* ── Activities ── */
const activities = [
  {
    title: "Farms",
    desc: "We have tied up with more than 100 farmers to produce broilers on a contractual basis, creating employment and economic stability in rural areas.",
    img: "/images/operations/Farming.jpg",
    num: "01",
  },
  {
    title: "Chicken Processing Unit",
    desc: "Conveyorised dressing unit at Badiadka processing 500 birds per hour — delivering fresh, hygienic Halal chilled chicken to our customers.",
    img: "/images/operations/Processing.jpg",
    num: "02",
  },
  {
    title: "Retailing",
    desc: "3 retail outlets in and around Kasaragod. Our Halal chilled chicken is well received by restaurants, institutions, and the general public.",
    img: "/images/operations/Retailing.jpg",
    num: "03",
  },
];

/* ── Stats ── */
const stats = [
  { number: "20+", label: "Years Experience", desc: "Over two decades of chicken business with a trusted reputation in the market." },
  { number: "100+", label: "Partner Farmers", desc: "Contract broiler farmers creating rural employment and economic sustainability." },
  { number: "500", label: "Birds/Hour Processing", desc: "Conveyorised dressing unit at Badiadka for hygienic, efficient processing." },
  { number: "3", label: "Retail Outlets", desc: "Halal chilled chicken outlets serving Kasaragod's restaurants and public." },
];

/* ── Products ── */
const products = [
  { name: "Broiler Chicks", detail: "Healthy chicks marketed through our nearby region — contact our marketing team to buy", img: "/images/products/Day Old Chicks.jpg" },
  { name: "Poultry Feeds", detail: "Rich nutritious feeds with best quality ingredients for desired weight and better FCR", img: "/images/products/Hi-Density Poultry Feeds.jpg" },
  { name: "Poultry Supplements", detail: "All kinds of poultry supplements available for optimum bird health and performance", img: "/images/products/Broiler Feed Pre-Mixes.jpeg" },
  { name: "Live Birds", detail: "Healthy live birds marketed through our Kasaragod facility — contact marketing team", img: "/images/products/Live Chicken.jpg" },
  { name: "Fresh Chilled Chicken", detail: "Halal certified fresh chilled and frozen chicken for institutional supply and retail", img: "/images/products/Fresh Chilled Chicken.jpg" },
  { name: "Processed / Dressed Chicken", detail: "Fresh dressed chicken supplied through our outlets and institutional partners", img: "/images/products/Parent Culls.jpg" },
];

const gallery = [
  "/images/products/Live Chicken.jpg",
  "/images/products/Fresh Chilled Chicken.jpg",
  "/images/operations/Farming.jpg",
  "/images/operations/Processing.jpg",
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [opsPage, setOpsPage] = useState(0);
  const opsTrackRef = useRef(null);

  /* How many cards visible per page — responsive via JS */
  const getCardsPerPage = useCallback(() => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }, []);

  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const update = () => setCardsPerPage(getCardsPerPage());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getCardsPerPage]);

  const totalOpsPages = Math.ceil(activities.length / cardsPerPage);

  const nextOps = useCallback(() => {
    setOpsPage((p) => Math.min(p + 1, totalOpsPages - 1));
  }, [totalOpsPages]);

  const prevOps = useCallback(() => {
    setOpsPage((p) => Math.max(p - 1, 0));
  }, []);

  /* Clamp opsPage if totalOpsPages shrinks on resize */
  useEffect(() => {
    setOpsPage((p) => Math.min(p, totalOpsPages - 1));
  }, [totalOpsPages]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      {/* ===== HERO SLIDESHOW ===== */}
      <section className={styles.hero}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.heroSlide} ${i === current ? styles.heroSlideActive : ""}`}
          >
            <img src={slide.img} alt={slide.title} className={styles.heroImage} />
          </div>
        ))}
        <div className={styles.heroOverlay} />
        <div className={styles.heroGrain} />

        <div className={styles.heroContent}>
          <span className={styles.heroOverline}>
            <span className={styles.heroOverlineLine} />
            {heroSlides[current].sub}
          </span>
          <h1 className={styles.heroTitle} key={current}>
            {heroSlides[current].title.split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <div className={styles.heroBtns}>
            <Link href="/about" className="btn btn--glass">
              Discover Our Story
            </Link>
            <Link href="/contact" className="btn btn--gold">
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className={styles.heroDots}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.heroDot} ${i === current ? styles.heroDotActive : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollDot} />
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {[...Array(3)].map((_, k) => (
            <div className={styles.marqueeInner} key={k}>
              <span>Farms</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Processing</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Retailing</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Live Chicken</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Halal Chilled Chicken</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Poultry Feeds</span>
              <span className={styles.marqueeDot}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ABOUT INTRO ===== */}
      <section className={`section ${styles.aboutIntro}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <AnimateOnScroll>
              <div className={styles.aboutLeft}>
                <span className="overline">Who We Are</span>
                <h2 className="heading-2">
                  A fast-growing family-owned poultry group in Kasaragod, Kerala
                </h2>
                <div className="accent-bar" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <div className={styles.aboutRight}>
                <p className="text-large" style={{ color: "var(--color-gray)", marginBottom: "1.5rem" }}>
                  Happy Poultry is a family-owned partnership concern based in
                  Badiadka, Kasaragod, Kerala. We have been engaged in the
                  chicken business for over twenty years and enjoy a trusted
                  reputation as providers of quality chicken with good scientific
                  management practices.
                </p>
                <p style={{ color: "var(--color-gray)", marginBottom: "2.5rem" }}>
                  With consistent and continuous improvement, we operate an
                  integrated chicken value chain — from contract farming and
                  processing to Halal retail — serving customers across Kasaragod.
                </p>
                <Link href="/about" className="btn btn--primary">
                  Learn More About Us →
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ===== FULL BLEED IMAGE BREAK ===== */}
      <div className={styles.fullBleedBreak}>
        <img src="/images/operations/Farming.jpg" alt="Happy Poultry contract farms" />
        <div className={styles.fullBleedOverlay}>
          <AnimateOnScroll>
            <blockquote className={styles.pullQuote}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              We are committed to producing &amp; marketing nutritious chicken at
              low cost to customers who look for consistent quality.
            </blockquote>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ===== ACTIVITIES — CARD CAROUSEL ===== */}
      <section className={styles.activitiesSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.sectionHeader}>
              <span className="overline" style={{ justifyContent: "center" }}>What We Do</span>
              <h2 className="heading-2">Our Operations</h2>
              <p className="text-muted" style={{ marginTop: "1rem", maxWidth: "550px", marginLeft: "auto", marginRight: "auto" }}>
                From contract farming to Halal processing and retail — a complete poultry value chain.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Carousel Viewport */}
          <div className={styles.opsViewport}>
            <div
              className={styles.opsTrack}
              ref={opsTrackRef}
              style={{
                transform: `translateX(-${opsPage * 100}%)`,
              }}
            >
              {activities.map((act) => (
                <div
                  className={styles.opsCard}
                  key={act.num}
                  style={{ flex: `0 0 calc(${100 / cardsPerPage}% - ${((cardsPerPage - 1) * 20) / cardsPerPage}px)` }}
                >
                  <img src={act.img} alt={act.title} className={styles.opsCardImg} />
                  <div className={styles.opsCardOverlay} />
                  <div className={styles.opsCardContent}>
                    <span className={styles.opsCardNum}>{act.num}</span>
                    <h3 className={styles.opsCardTitle}>{act.title}</h3>
                    <p className={styles.opsCardDesc}>{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className={styles.opsPagination}>
            <div className={styles.opsDots}>
              {Array.from({ length: totalOpsPages }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.opsDot} ${i === opsPage ? styles.opsDotActive : ""}`}
                  onClick={() => setOpsPage(i)}
                  aria-label={`Go to operations page ${i + 1}`}
                />
              ))}
            </div>
            <div className={styles.opsArrows}>
              <button
                className={`${styles.opsArrow} ${opsPage === 0 ? styles.opsArrowDisabled : ""}`}
                onClick={prevOps}
                aria-label="Previous operations"
              >
                ←
              </button>
              <button
                className={`${styles.opsArrow} ${opsPage >= totalOpsPages - 1 ? styles.opsArrowDisabled : ""}`}
                onClick={nextOps}
                aria-label="Next operations"
              >
                →
              </button>
            </div>
          </div>

          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/activities" className="btn btn--outline">
                Explore All Activities →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== STATS — CLEAN RESULTS BAND ===== */}
      <section className={styles.statsBand}>
        <div className="container">
          <div className={styles.statsHeader}>
            <div>
              <AnimateOnScroll>
                <h2 className={styles.statsHeading}>Our numbers speak for themselves.</h2>
                <p className={styles.statsSubtext}>
                  Two decades of quality poultry operations across Kasaragod, Kerala.
                </p>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll delay={1}>
              <Link href="/about" className="btn btn--primary">
                Learn More →
              </Link>
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

      {/* ===== IMAGE STRIP ===== */}
      <div className={styles.imageStrip}>
        {[
          "/images/products/Live Chicken.jpg",
          "/images/operations/Processing.jpg",
          "/images/products/Hi-Density Poultry Feeds.jpg",
          "/images/products/Fresh Chilled Chicken.jpg",
        ].map((src, n) => (
          <div className={styles.stripItem} key={n}>
            <img src={src} alt={`Happy Poultry operations ${n + 1}`} />
          </div>
        ))}
      </div>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className={styles.productsSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.productsHeader}>
              <span className="overline" style={{ justifyContent: "center" }}>Our Products</span>
              <h2 className="heading-2">Quality Poultry Products</h2>
              <p className="text-muted" style={{ marginTop: "1rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                From broiler chicks and poultry feeds to live birds and fresh
                Halal chilled chicken — we deliver quality at every stage.
              </p>
            </div>
          </AnimateOnScroll>

          <div className={styles.productsGrid}>
            {products.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={(i % 4) + 1}>
                <Link href="/products" className={styles.productCard}>
                  <div className={styles.productCardImgWrap}>
                    <img src={p.img} alt={p.name} className={styles.productCardImg} />
                  </div>
                  <div className={styles.productCardBody}>
                    <span className={styles.productCardNum}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={styles.productCardName}>{p.name}</h3>
                    <p className={styles.productCardDetail}>{p.detail}</p>
                  </div>
                  <span className={styles.productCardArrow}>→</span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <Link href="/products" className="btn btn--outline">
                View All Products →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className={styles.galleryPreview}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.galleryHeader}>
              <div>
                <span className="overline">Gallery</span>
                <h2 className="heading-2">Our World in Pictures</h2>
              </div>
              <Link href="/gallery" className="btn btn--outline">
                View Full Gallery →
              </Link>
            </div>
          </AnimateOnScroll>
          <div className={styles.galleryGrid}>
            {gallery.map((src, i) => (
              <AnimateOnScroll key={i} delay={i + 1}>
                <div className={styles.galleryItem}>
                  <img src={src} alt={`Happy Poultry gallery ${i + 1}`} />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <img src="/images/operations/Retailing.jpg" alt="Happy Poultry Retail" className={styles.ctaBg} />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AnimateOnScroll>
            <div className={styles.ctaInner}>
              <span className="overline" style={{ justifyContent: "center" }}>Get Started</span>
              <h2 className="heading-1 text-white">Partner With Us</h2>
              <p className={styles.ctaText}>
                Whether you&apos;re a farmer seeking contract farming or a customer
                needing premium Halal chicken, we&apos;d love to connect.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--gold">Get in Touch →</Link>
                <Link href="/about" className="btn btn--glass">Learn More</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
