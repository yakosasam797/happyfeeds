"use client";

import AnimateOnScroll from "./components/AnimateOnScroll";
import Link from "next/link";
import styles from "./page.module.css";
import { useState, useEffect, useCallback, useRef } from "react";

const BASE = "https://www.bharathagrovet.com";

/* ── Hero slides ── */
const heroSlides = [
  {
    img: `${BASE}/images/banner_images/1.jpg`,
    title: "Committed to Quality\n& Service in Poultry",
    sub: "Since 2005 — Mangaluru, India",
  },
  {
    img: `${BASE}/images/banner_images/7.jpg`,
    title: "Integrated Poultry\nValue Chain",
    sub: "Breeding • Hatching • Feed • Processing • Retail",
  },
  {
    img: `${BASE}/images/banner_images/9.jpg`,
    title: "Sustainable Farming\nfor Coastal Karnataka",
    sub: "400+ Contract Farmers • Rural Employment",
  },
  {
    img: `${BASE}/images/banner_images/17.jpg`,
    title: "Premium Poultry\nProducts",
    sub: "From Farm to Fork — With Love",
  },
  {
    img: `${BASE}/images/banner_images/20.jpg`,
    title: "Three Decades of\nExcellence",
    sub: "Technical & Marketing Expertise",
  },
];

/* ── Activities with good stock photos ── */
const activities = [
  {
    title: "Breeders",
    desc: "5 million+ hatching eggs per annum from our breeding farm at Hassan District with strict bio-security practices.",
    img: "/images/operations/Breeders.jpg",
    num: "01",
  },
  {
    title: "Hatcheries",
    desc: "14 million+ chicks per annum from 2 own hatcheries at Mangalore and Kundapura, functioning round the clock.",
    img: "/images/operations/Hatcheries.webp",
    num: "02",
  },
  {
    title: "Feed Mills",
    desc: "State-of-the-art crumbs & pellet mill at Thumbe with 6,000+ tons monthly production capacity.",
    img: "/images/operations/Feed Mills.jpg",
    num: "03",
  },
  {
    title: "Farming",
    desc: "400+ contract farmers producing healthy broilers, creating rural employment and economic sustainability.",
    img: "/images/operations/Farming.jpg",
    num: "04",
  },
  {
    title: "Processing",
    desc: "Conveyorised dressing unit at Ganjimutt dressing 1,000 birds per hour, with ETP & bio gas plants.",
    img: "/images/operations/Processing.jpg",
    num: "05",
  },
  {
    title: "Retailing",
    desc: "Five retail outlets across Mangalore delivering Halal chilled chicken to restaurants and the public.",
    img: "/images/operations/Retailing.jpg",
    num: "06",
  },
];

/* ── Stats with descriptions ── */
const stats = [
  { number: "50 Lakh+", label: "Hatching Eggs", desc: "Annually from our breeding farm at Hassan District with strict bio-security." },
  { number: "1.4 Crore+", label: "Chicks Per Year", desc: "From 2 own hatcheries at Mangalore and Kundapura, round the clock." },
  { number: "400+", label: "Partner Farmers", desc: "Producing healthy broilers, creating rural employment across the region." },
  { number: "6,000+", label: "Tons Feed Monthly", desc: "State-of-the-art crumbs & pellet mill at Thumbe with top-grade materials." },
];

/* ── Products ── */
const products = [
  { name: "Broiler Hatching Eggs", detail: "Premium fertile eggs from our own breeding farm with strict bio-security", img: "/images/products/Broiler Hatching Eggs.jpg" },
  { name: "Day Old Chicks", detail: "1.4 Crore+ DOC annually from 2 hatcheries at Mangalore and Kundapura", img: "/images/products/Day Old Chicks.jpg" },
  { name: "Hi-Density Poultry Feeds", detail: "Computerized formulation using the best raw materials available", img: "/images/products/Hi-Density Poultry Feeds.jpg" },
  { name: "Broiler Feed Pre-Mixes", detail: "Optimized growth rates with superior feed conversion ratios", img: "/images/products/Broiler Feed Pre-Mixes.jpeg" },
  { name: "Breeder Feed Pre-Mixes", detail: "Balanced nutrients specifically designed for breeder flocks", img: "/images/products/Breeder Feed Pre-Mixes.jpg" },
  { name: "Live Chicken", detail: "Healthy broilers raised by 400+ contract farmers across the region", img: "/images/products/Live Chicken.jpg" },
  { name: "Fresh Chilled Chicken", detail: "Halal-certified, conveyorised processing at our Ganjimutt plant", img: "/images/products/Fresh Chilled Chicken.jpg" },
  { name: "Parent Culls", detail: "Quality parent culls sourced from integrated operations", img: "/images/products/Parent Culls.jpg" },
];

const gallery = [
  `${BASE}/gallery_images/1880378147A1-900_600.jpg`,
  `${BASE}/gallery_images/2089296197A2.jpg`,
  `${BASE}/gallery_images/303128077A3.jpg`,
  `${BASE}/gallery_images/951331741A4.jpg`,
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
              Partner With Us →
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
              <span>Breeding</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Hatching</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Feed Mills</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Farming</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Processing</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Retailing</span>
              <span className={styles.marqueeDot}>◆</span>
              <span>Consultancy</span>
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
                  A leading poultry producing company in coastal Karnataka
                </h2>
                <div className="accent-bar" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={2}>
              <div className={styles.aboutRight}>
                <p className="text-large" style={{ color: "var(--color-gray)", marginBottom: "1.5rem" }}>
                  Established in 2005 by marketing and veterinary professionals
                  with a vision to promote and provide superior poultry products
                  and services. Bharath Agrovet Industries today has contributed
                  significantly to the overall growth of poultry industry in
                  coastal districts of Karnataka and Kerala.
                </p>
                <p style={{ color: "var(--color-gray)", marginBottom: "2.5rem" }}>
                  With more than 3 decades of technical and marketing experience,
                  we operate an integrated poultry value chain — from breeding
                  and hatching to feed production, processing, and retail.
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
        <img src={`${BASE}/images/banner_images/7.jpg`} alt="Bharath Agrovet operations" />
        <div className={styles.fullBleedOverlay}>
          <AnimateOnScroll>
            <blockquote className={styles.pullQuote}>
              <span className={styles.quoteIcon}>&ldquo;</span>
              We aspire to be the foremost poultry producer celebrated for our
              commitment to delivering wholesome and affordable protein options
              to society.
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
                A vertically integrated poultry value chain — from farm to fork.
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
                  Three decades of integrated poultry operations across coastal Karnataka & Kerala.
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
        {[2, 4, 9, 15].map((n) => (
          <div className={styles.stripItem} key={n}>
            <img src={`${BASE}/images/banner_images/${n}.jpg`} alt={`Operations ${n}`} />
          </div>
        ))}
      </div>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className={styles.productsSection}>
        <div className="container">
          <AnimateOnScroll>
            <div className={styles.productsHeader}>
              <span className="overline" style={{ justifyContent: "center" }}>Our Products</span>
              <h2 className="heading-2">Premium Poultry Products</h2>
              <p className="text-muted" style={{ marginTop: "1rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
                From hatching eggs and day-old chicks to Hi-Density feeds and
                fresh chilled Halal chicken — we deliver excellence across the
                entire poultry value chain.
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
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <img src={`${BASE}/images/banner_images/17.jpg`} alt="Partner" className={styles.ctaBg} />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <AnimateOnScroll>
            <div className={styles.ctaInner}>
              <span className="overline" style={{ justifyContent: "center" }}>Get Started</span>
              <h2 className="heading-1 text-white">Partner With Us</h2>
              <p className={styles.ctaText}>
                Whether you&apos;re a farmer seeking contract farming or a business
                needing premium poultry products, we&apos;d love to connect.
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
