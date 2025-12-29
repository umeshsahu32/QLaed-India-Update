import React from "react";
import styles from "./FeatureComparison.module.css";
import { features, plans } from "../../constants/data";
import { PACKAGE_CONSTANTS } from "../../constants/packageConstants";

const FeatureComparison = () => {
  const {
    FEATURE_COMPARISON_HEADING,
    FEATURE,
    OTT,
    STANDARD,
    PREMIUM,
    ENTERPRISE,
  } = PACKAGE_CONSTANTS.featureComparison;
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{FEATURE_COMPARISON_HEADING}</h2>

        {/* Desktop Table View */}
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.featureColumn}>{FEATURE}</th>
                <th className={styles.planColumn}>{OTT}</th>
                <th className={styles.planColumn}>{STANDARD}</th>
                <th className={styles.planColumn}>{PREMIUM}</th>
                <th className={styles.planColumn}>{ENTERPRISE}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td className={styles.featureCell}>{row.feature}</td>
                  <td
                    className={`${styles.planCell} ${
                      row.ott === "✔"
                        ? styles.checkmark
                        : row.ott === "—"
                        ? styles.dash
                        : ""
                    }`}
                  >
                    {row.ott}
                  </td>
                  <td
                    className={`${styles.planCell} ${
                      row.standard === "✔"
                        ? styles.checkmark
                        : row.standard === "—"
                        ? styles.dash
                        : ""
                    }`}
                  >
                    {row.standard}
                  </td>
                  <td
                    className={`${styles.planCell} ${
                      row.premium === "✔"
                        ? styles.checkmark
                        : row.premium === "—"
                        ? styles.dash
                        : ""
                    }`}
                  >
                    {row.premium}
                  </td>
                  <td
                    className={`${styles.planCell} ${
                      row.enterprise === "✔"
                        ? styles.checkmark
                        : row.enterprise === "—"
                        ? styles.dash
                        : ""
                    }`}
                  >
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className={styles.cardsContainer}>
          {plans.map((plan) => (
            <div key={plan.key} className={styles.planCard}>
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
              </div>
              <div className={styles.planFeatures}>
                {features.map((row, index) => (
                  <div key={index} className={styles.featureRow}>
                    <div className={styles.featureLabel}>{row.feature}</div>
                    <div
                      className={`${styles.featureValue} ${
                        row[plan.key] === "✔"
                          ? styles.checkmark
                          : row[plan.key] === "—"
                          ? styles.dash
                          : ""
                      }`}
                    >
                      {row[plan.key]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
