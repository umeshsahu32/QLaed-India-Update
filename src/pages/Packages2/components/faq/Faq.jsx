import React, { useState } from "react";
import styles from "./Faq.module.css";
import { faqs } from "../../constants/data";
import { PACKAGE_CONSTANTS } from "../../constants/packageConstants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { FAQ_HEADING } = PACKAGE_CONSTANTS.faqs;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{FAQ_HEADING}</h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span
                  className={`${styles.icon} ${
                    openIndex === index ? styles.iconRotate : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className={styles.faqAnswer}>
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
