import React from "react";
import styles from "./PackageClarification.module.css";
import { valueStackFeatures, youPayItems } from "../../constants/data";
import { PACKAGE_CONSTANTS } from "../../constants/packageConstants";
const PackageClarification = () => {
  const {
    PACKAGE_CLARIFICATION_HEADING,
    YOU_PAY_TITLE,
    MAIN_TEXT_1,
    MAIN_TEXT_2,
    MAIN_TEXT_3,
    DESCRIPTION,
    TICK,
    VALUE_STACK_TITLE,
    ENTERPRISE_TEXT,
    ENTERPRISE_TEXT_2,
  } = PACKAGE_CONSTANTS.packageClarification;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{PACKAGE_CLARIFICATION_HEADING}</h2>
        <div className={styles.content}>
          {/* <p className={styles.mainText}>
            {MAIN_TEXT_1} <strong>{MAIN_TEXT_2}</strong> {MAIN_TEXT_3}
          </p>
          <p className={styles.description}>{DESCRIPTION}</p> */}

          <div className={styles.youPaySection}>
            {/* <h3 className={styles.youPayTitle}>{YOU_PAY_TITLE}</h3> */}
            <ul className={styles.itemsList}>
              {youPayItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.checkIcon}>{TICK}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.valueStackSection}>
            <h3 className={styles.valueStackTitle}>{VALUE_STACK_TITLE}</h3>
            <ul className={styles.itemsList}>
              {valueStackFeatures.map((feature, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.checkIcon}>{TICK}</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className={styles.enterpriseNote}>
          <div className={styles.noteIcon}>💼</div>
          <p>
            <strong>{ENTERPRISE_TEXT}</strong> {ENTERPRISE_TEXT_2}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default PackageClarification;
