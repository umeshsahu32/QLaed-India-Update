import React from "react";
import styles from "./PackageProcess.module.css";
import { Link } from "react-router-dom";
import {
  qbotFeatures,
  humanVerificationFeatures,
  deliveryComponents,
  deliveryMethods,
  whyChooseFeatures,
} from "../../constants/data";
import { PACKAGE_CONSTANTS } from "../../constants/packageConstants";
const PackageProcess = () => {
  const {
    HOW_WE_MAKE_LEADS_ZERO_JUNK,
    EVERY_LEAD_PASSES_THROUGH_TWO_LAYERS,
    QBOT_QUALIFICATION,
    HUMAN_VERIFICATION,
    ONLY_AFTER_BOTH_TEXT,
    QUALIFIED_TEXT,
    LEAD_REPLACEMENT_GUARANTEE,
    IF_A_LEAD_DOES_NOT_PICK_TEXT,
    WE_REPLACE_IT_TEXT,
    DELIVERY_WORKFLOW,
    ALL_QUALIFIED_LEADS_TEXT,
    DELIVERED_VIA,
    ENTERPRISE_CLIENTS_GET_BITRIX24,
    WHY_BUSINESSES_CHOOSE_TEXT,
    YOU_ONLY_PAY_ONCE_TEXT,
    THE_QUALIFIED_LEADS_TEXT,
    BUILD_YOUR_OWN_LEAD_ENGINE_TEXT,
    STOP_CHASING_START_CLOSING_TEXT,
    BOOK_YOUR_QBOT_SETUP_CALL_TEXT,
    COMPARE_PACKAGES_TEXT,
    TALK_TO_GROWTH_EXPERT_TEXT,
  } = PACKAGE_CONSTANTS.packageProcess;
  const scrollToComparison = () => {
    const element = document.getElementById("package-comparison");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Zero Junk Section */}
        <div className={styles.subsection}>
          <h2 className={styles.subsectionHeading}>
            {HOW_WE_MAKE_LEADS_ZERO_JUNK}
          </h2>
          <p className={styles.subsectionDescription}>
            {EVERY_LEAD_PASSES_THROUGH_TWO_LAYERS}
          </p>

          <div className={styles.layersContainer}>
            <div className={styles.layerCard}>
              <div className={styles.layerNumber}>1</div>
              <h3 className={styles.layerTitle}>{QBOT_QUALIFICATION} </h3>
              <ul className={styles.layerList}>
                {qbotFeatures.map((feature, index) => (
                  <li key={index} className={styles.layerItem}>
                    <span className={styles.bullet}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.layerCard}>
              <div className={styles.layerNumber}>2</div>
              <h3 className={styles.layerTitle}>{HUMAN_VERIFICATION} </h3>
              <ul className={styles.layerList}>
                {humanVerificationFeatures.map((feature, index) => (
                  <li key={index} className={styles.layerItem}>
                    <span className={styles.bullet}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.qualificationNote}>
            <p>
              {ONLY_AFTER_BOTH_TEXT} <strong>{QUALIFIED_TEXT}</strong>
            </p>
          </div>
        </div>

        {/* Lead Replacement Section */}
        <div className={styles.subsection}>
          <h2
            className={`${styles.subsectionHeading} ${styles.subsectionHeading2}`}
          >
            {LEAD_REPLACEMENT_GUARANTEE}
          </h2>
          <div className={styles.guaranteeCard}>
            <div className={styles.guaranteeContent}>
              <div className={styles.guaranteeIcon}>❌</div>
              <p className={styles.guaranteeText}>
                {IF_A_LEAD_DOES_NOT_PICK_TEXT}
              </p>
            </div>
            <div className={styles.guaranteeResult}>
              <div className={styles.guaranteeResultIcon}>✅</div>
              <p className={styles.guaranteeResultText}>{WE_REPLACE_IT_TEXT}</p>
            </div>
          </div>
        </div>

        {/* Delivery Workflow Section */}
        <div className={styles.subsection}>
          <h2 className={styles.subsectionHeading}>{DELIVERY_WORKFLOW}</h2>
          <p
            className={`${styles.subsectionDescription} ${styles.subsectionDescription2}`}
          >
            {ALL_QUALIFIED_LEADS_TEXT}
          </p>

          <div className={styles.componentsGrid}>
            {deliveryComponents.map((component, index) => (
              <div key={index} className={styles.componentCard}>
                <span className={styles.checkmark}>✔</span>
                <span>{component}</span>
              </div>
            ))}
          </div>

          <div className={styles.deliveryMethods}>
            <p className={styles.deliveryTitle}>{DELIVERED_VIA}</p>
            <ul className={styles.deliveryList}>
              {deliveryMethods.map((method, index) => (
                <li key={index} className={styles.deliveryItem}>
                  <span className={styles.deliveryBullet}>•</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
            <p className={styles.enterpriseDelivery}>
              {ENTERPRISE_CLIENTS_GET_BITRIX24}
            </p>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className={styles.subsection}>
          <h2
            className={`${styles.subsectionHeading} ${styles.subsectionHeading2}`}
          >
            {WHY_BUSINESSES_CHOOSE_TEXT}
          </h2>
          <div className={styles.whyChooseCard}>
            <ul className={styles.whyChooseList}>
              {whyChooseFeatures.map((feature, index) => (
                <li key={index} className={styles.whyChooseItem}>
                  <span className={styles.whyChooseBullet}>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className={styles.whyChooseConclusion}>
              {YOU_ONLY_PAY_ONCE_TEXT} <br />
              {THE_QUALIFIED_LEADS_TEXT}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>
            {BUILD_YOUR_OWN_LEAD_ENGINE_TEXT}
          </h2>
          <p className={styles.ctaSubheading}>
            {STOP_CHASING_START_CLOSING_TEXT}
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/contact-us" className={styles.ctaButtonPrimary}>
              {BOOK_YOUR_QBOT_SETUP_CALL_TEXT}
            </Link>
            <button
              onClick={scrollToComparison}
              className={styles.ctaButtonSecondary}
            >
              {COMPARE_PACKAGES_TEXT}
            </button>
            <Link to="/contact-us" className={styles.ctaButtonSecondary}>
              {TALK_TO_GROWTH_EXPERT_TEXT}
            </Link>
          </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PackageProcess;
