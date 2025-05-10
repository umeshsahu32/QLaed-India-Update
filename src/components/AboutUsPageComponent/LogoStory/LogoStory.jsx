import React, { Fragment } from "react";
import SectionHeading from "../../SectionHeading/SectionHeading.jsx";
import logo_transform from "../../../assets/images/qlead-about-us.jpg";
import logo_square from "../../../assets/images/qlead-logo-square.png";
import styles from "./LogoStory.module.css";
import { story_content, key_point } from "./LogoStoryData.js";

const LogoStory = () => {
  return (
    <Fragment>
      <div className={styles.logo_transform_container}>
        <div className={styles.logo_title_container}>
          <h3>The New QLead Logo – Where Precision Meets Possibility</h3>
          <p>
            At QLead.ai, we don’t just generate leads — we forge connections
            that convert into trusted customer relationships. Our new logo is
            more than a symbol — it’s a story.
          </p>
        </div>
        <img
          src={logo_transform}
          alt="logo transform"
          className={styles.logo_transform}
        />
        <div className={styles.story_container}>
          {story_content.map((item) => {
            return (
              <div key={item.id} className={styles.story_content}>
                <h3>{item.title}</h3>
                <div className={styles.separator}></div>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.logo_square_container}>
        <div>
          <h3>The “Q” Form – Qualified & Questioning</h3>
          <div className={styles.separator}></div>
          <p>
            The letter "Q" built into the structure reflects our name and our
            process: Qualified leads, not just random data. It also symbolizes
            questioning — our AI interrogates every datapoint to ensure it
            matches your ideal customer profile before it lands in your inbox.
          </p>
          <b />
          <b />
          <h4>Connect. Convert. Sell.</h4>
          <div className={styles.separator}></div>
          <p>Every element of this logo supports our three-word promise:</p>
          <ul>
            {key_point.map((item) => {
              return (
                <li key={item.id}>
                  <strong>{item.title}</strong>
                  {item.paragraph}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <img src={logo_square} alt="qlead logo" />
        </div>
      </div>
    </Fragment>
  );
};

export default LogoStory;
