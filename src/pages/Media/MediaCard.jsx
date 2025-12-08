import React, { Fragment } from "react";
import styles from "./Media.module.css";

const MediaCard = ({ item }) => {
  return (
    <Fragment>
      <a href={item.link} target="_black" className={styles.cardLinkContainer}>
        <div className={styles.card}>
          <img src={item.image} alt={item.title} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardSubtitle}>{item.category}</p>
            <p className={styles.cardDescription}>
              {item.description.split("e5world").map((part, idx) => (
                <React.Fragment key={idx}>
                  {part}
                  {idx < item.description.split("e5world").length - 1 && (
                    <span className={styles.noCapitalize}>e5world</span>
                  )}
                </React.Fragment>
              ))}
            </p>
            <div className={styles.cardFooter}>
              <p className={styles.cardDate}>{item.date}</p>
            </div>
          </div>
        </div>
      </a>
    </Fragment>
  );
};

export default MediaCard;
