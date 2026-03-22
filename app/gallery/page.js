"use client";

import HeroBanner from "../components/HeroBanner";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Link from "next/link";
import styles from "./gallery.module.css";
import { useState, useEffect, useCallback } from "react";

const BASE = "https://www.bharathagrovet.com";

/* Use a mix of local + remote images that are confirmed to work */
const photos = [
    { src: "/images/operations/Breeders.jpg", caption: "Breeding Farm", category: "Breeders" },
    { src: "/images/operations/Hatcheries.webp", caption: "Hatchery Unit", category: "Hatcheries" },
    { src: "/images/operations/Feed Mills.jpg", caption: "Feed Mill", category: "Feed" },
    { src: "/images/operations/Processing.jpg", caption: "Processing Plant", category: "Processing" },
    { src: "/images/operations/Farming.jpg", caption: "Broiler Farming", category: "Farming" },
    { src: "/images/operations/Retailing.jpg", caption: "Retail Outlet", category: "Retailing" },
    { src: "/images/products/Broiler Hatching Eggs.jpg", caption: "Hatching Eggs", category: "Products" },
    { src: "/images/products/Day Old Chicks.jpg", caption: "Day-Old Chicks", category: "Products" },
    { src: "/images/products/Hi-Density Poultry Feeds.jpg", caption: "Poultry Feeds", category: "Products" },
    { src: "/images/products/Fresh Chilled Chicken.jpg", caption: "Fresh Chicken", category: "Products" },
    { src: "/images/products/Live Chicken.jpg", caption: "Live Broilers", category: "Products" },
    { src: "/images/products/Parent Culls.jpg", caption: "Parent Stock", category: "Breeding" },
];

export default function GalleryPage() {
    const [lightbox, setLightbox] = useState(null);

    const close = useCallback(() => setLightbox(null), []);
    const prev = useCallback(
        () => setLightbox((i) => (i > 0 ? i - 1 : photos.length - 1)),
        []
    );
    const next = useCallback(
        () => setLightbox((i) => (i < photos.length - 1 ? i + 1 : 0)),
        []
    );

    useEffect(() => {
        if (lightbox === null) return;
        const handler = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [lightbox, close, prev, next]);

    return (
        <>
            <HeroBanner
                imageSrc={`${BASE}/images/banner_images/20.jpg`}
                title="Photo Gallery"
                subtitle="Gallery"
                compact
            />

            {/* Compact intro + grid in one section */}
            <section className="section" style={{ paddingTop: "clamp(2.5rem, 3vw, 4rem)" }}>
                <div className="container">
                    <AnimateOnScroll>
                        <div className={styles.introCompact}>
                            <div>
                                <span className="overline">Visual Journey</span>
                                <h2 className="heading-3">Our Operations In Action</h2>
                            </div>
                            <p className="text-muted" style={{ maxWidth: "420px" }}>
                                From breeding farms and hatcheries to feed mills and retail outlets.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Masonry Grid */}
                    <div className={styles.masonryGrid}>
                        {photos.map((p, i) => (
                            <AnimateOnScroll key={i} delay={(i % 3) + 1}>
                                <div
                                    className={styles.galleryItem}
                                    onClick={() => setLightbox(i)}
                                >
                                    <img src={p.src} alt={p.caption} loading="lazy" />
                                    <div className={styles.galleryOverlay}>
                                        <div>
                                            <span className={styles.galleryTag}>{p.category}</span>
                                            <span className={styles.galleryCaption}>{p.caption}</span>
                                        </div>
                                    </div>
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
                        <span className="overline" style={{ justifyContent: "center" }}>Want to Know More?</span>
                        <h2 className="heading-3 text-white" style={{ marginBottom: "1rem" }}>
                            Explore Our Activities
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 550, margin: "0 auto 2rem", lineHeight: 1.8 }}>
                            Discover the 7 pillars of our integrated poultry value chain — from breeding to retail.
                        </p>
                        <Link href="/activities" className="btn btn--gold">
                            View Activities →
                        </Link>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className={styles.lightbox} onClick={close}>
                    <button className={styles.lightboxClose} onClick={close}>
                        ✕
                    </button>
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                    >
                        ←
                    </button>
                    <img
                        src={photos[lightbox].src}
                        alt={photos[lightbox].caption}
                        className={styles.lightboxImg}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={(e) => { e.stopPropagation(); next(); }}
                    >
                        →
                    </button>
                </div>
            )}
        </>
    );
}
