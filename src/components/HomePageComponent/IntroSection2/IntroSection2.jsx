import React, { Fragment } from "react";
import styles from "./IntroSection2.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";
import { introSectionData } from "./IntroSectionData";

const Section12 = () => {
  return (
    <Fragment>
      <SectionHeading heading="What We Deliver" />
      <div className={styles.section12}>
        {introSectionData.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.row} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <div className={styles.content}>
              <h1>{item.heading}</h1>
              <p>{item.paragraph}</p>
              <Link className={styles.get_started_btn} to={item.link}>
                Know More
              </Link>
            </div>
            <div className={styles.videoContainer}>
              <video
                className={styles.video}
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Section12;
