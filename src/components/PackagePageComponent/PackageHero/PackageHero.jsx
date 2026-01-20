import React, { Fragment } from "react";
import styles from "./PackageHero.module.css";
import SuccessStoryVideo from "../../../assets/video/package-funnel.mp4";
import PackageHeroImage from "../../../assets/images/package/packages-banner.jpg";

const PackageHero = () => {
  return (
    <Fragment>
      <div className={styles.section}>
        {/* <video
          className={styles.videoBackground}
          autoPlay
          loop
          muted
          playsInline
          src={SuccessStoryVideo}
          type="video/mp4"
        /> */}
        <img src={PackageHeroImage} alt="Package Hero" className={styles.image} />
      </div>
    </Fragment>
  );
};

export default PackageHero;
