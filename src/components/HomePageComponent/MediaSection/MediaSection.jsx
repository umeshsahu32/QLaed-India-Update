import React, { Fragment } from "react";
import styles from "./MediaSection.module.css";
import SectionHeading from "../../SectionHeading/SectionHeading";
import LinkButton from "../../Buttons/LinkButton";
import { MediaData } from "../../../data/Media";
import MediaCard from "../../../pages/Media/MediaCard";

const MediaSection = () => {
  const sortedMediaData = MediaData.sort((a, b) => {
    // Convert dates to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sort in descending order (most recent first)
    return dateB - dateA;
  });

  return (
    <Fragment>
      <SectionHeading heading="Media" />
      <div className={styles.container}>
        {sortedMediaData.slice(0, 3).map((item, index) => {
          return (
            <MediaCard item={item} key={index} />
          );
        })}  
      </div>
      <LinkButton path="media" text="View All" />
    </Fragment>
  );
};

export default MediaSection;
