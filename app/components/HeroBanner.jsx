import styles from "./HeroBanner.module.css";

export default function HeroBanner({
    imageSrc,
    title,
    subtitle,
    overlay = true,
    compact = false,
    children,
}) {
    return (
        <section className={`${styles.hero} ${compact ? styles.compact : ""}`}>
            <div className={styles.imageWrap}>
                <img src={imageSrc} alt={title} className={styles.image} loading="eager" />
            </div>
            {overlay && <div className={styles.overlay} />}
            <div className={styles.grain} />
            <div className={styles.content}>
                {subtitle && <span className={styles.overline}>{subtitle}</span>}
                <h1 className={styles.title}>{title}</h1>
                {children && <div className={styles.heroChildren}>{children}</div>}
            </div>
            <div className={styles.scrollHint}>
                <div className={styles.scrollDot} />
                <div className={styles.scrollLine} />
            </div>
            <div className={styles.cornerDecor} />
        </section>
    );
}
