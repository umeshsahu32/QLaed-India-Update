import React from "react";
import styles from "./PackagePrice.module.css";
import { packages } from "../../constants/data";
import { PACKAGE_CONSTANTS } from "../../constants/packageConstants";
const PackagePrice = () => {
  const {
    PACKAGE_PRICE_HEADING,
    PACKAGE_PRICE_SUBHEADING,
    IDEAL_FOR,
    YOU_GET,
  } = PACKAGE_CONSTANTS.packagePrice;
  return (
    <section id="package-comparison" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{PACKAGE_PRICE_HEADING}</h2>
        <p className={styles.subheading}>{PACKAGE_PRICE_SUBHEADING}</p>
        <div className={styles.packagesGrid}>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`${styles.packageCard} ${styles[pkg.color]}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.colorIndicator}></div>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <div className={styles.price}>{pkg.price}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.idealFor}>
                  <span className={styles.idealLabel}>{IDEAL_FOR}</span>
                  <p>{pkg.idealFor}</p>
                </div>

                <div className={styles.featuresSection}>
                  <h4 className={styles.featuresTitle}>{YOU_GET}</h4>
                  <ul className={styles.featuresList}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.outputSection}>
                  <p className={styles.outputIntro}>
                 {pkg.output_description}
                  </p>
                  <p className={styles.outputSubtext}>Illustrative scenarios:</p>
                  <ul className={styles.outputList}>
                    {pkg?.output_examples?.map((example, idx) => (
                      <li className={styles.outputItem} key={idx}>
                        <span className={styles.outputBadge}>Scenario {idx + 1}</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagePrice;
