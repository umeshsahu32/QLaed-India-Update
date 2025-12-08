import React, { Fragment } from "react";
import styles from "./Media.module.css";
import { MediaData } from "../../data/Media";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import MediaCard from "./MediaCard";
import { Helmet } from "react-helmet";
import useMetaTags from "../../hooks/useMetaTags";

const Media = () => {
  useMetaTags({
    title:
      "Qlead AI Media - Get Inspired with Insights and Strategies for Lead Generation",
    description:
      "Discover valuable insights and resources on lead generation, digital marketing, and strategies to drive business growth at Qlead AI Media.",
    keywords: "Qlead AI Media",
  });

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
      <div className={styles.sectionContainer}>
        <div className={styles.container}>
          {sortedMediaData?.map((item, index) => {
            return (
             <MediaCard item={item} key={index} />
            );
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default Media
