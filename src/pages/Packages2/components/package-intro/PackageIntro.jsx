import React from "react";
import styles from "./PackageIntro.module.css";
import { Link } from "react-router-dom";

import { PACKAGE_CONSTANTS } from "../../constants/packageConstants";
const PackageIntro = () => {
  const {
    PACKAGE_INTRO_HEADING,
    QUALIFIED_BUYERS_ONLY,
    SUB_HEADLINE,
    COMPARE_PLANS_CTA,
    BOOK_10_MINUTE_CTA,
  } = PACKAGE_CONSTANTS.packageIntro;

  const scrollToComparison = () => {
    const element = document.getElementById("package-comparison");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.headline}>
          {PACKAGE_INTRO_HEADING} <br /> {QUALIFIED_BUYERS_ONLY}
        </h1>
        <p className={styles.subheadline}>{SUB_HEADLINE}</p>
        <div className={styles.ctaContainer}>
          <button onClick={scrollToComparison} className={styles.ctaButton}>
            {COMPARE_PLANS_CTA}
          </button>
          <Link
            className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
            to="/contact-us"
          >
            {BOOK_10_MINUTE_CTA}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageIntro;
