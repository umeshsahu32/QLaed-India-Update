import React, { Fragment } from "react";
import styles from "./Blogs.module.css";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "../../SectionHeading/SectionHeading";
import image1 from "../../../assets/images/Blogs/media-front-1.png";
import image2 from "../../../assets/images/Blogs/media-front-2.jpg";
import image3 from "../../../assets/images/Blogs/media-front-3.jpeg";
import image4 from "../../../assets/images/Blogs/media-front-18.jpg";
import image5 from "../../../assets/images/Blogs/media-front-19.jpg";
import LinkButton from "../../Buttons/LinkButton";

const Blogs = () => {
  const posts = [
    {
      id: 1,
      image: image4,
      date: "November 13, 2024",
      title: "e5world",
      category: "Vaartha",
      link: "https://vaartha.com/416530/",
      description:
        "Aikhya Infra Developers seeded 'e5world'. With the help of IKF finance..this project will be completed in three phases..",
    },
    {
      id: 2,
      image: image5,
      date: "October 15, 2024 ",
      title: "QLead",
      category: "CNBC TV18",
      link: "https://www.cnbctv18.com/market/stock-market-live-updates-nifty-50-sensex-today-reliance-ril-q2-hcltech-hdfc-life-hyundai-ipo-angel-one-share-price-liveblog-19492794.htm",
      description:
        "Sensex Today | Stock Market LIVE Updates: QLead achieves sales worth ₹460 crore",
    },
    {
      id: 3,
      image: image3,
      date: "July 02, 2020",
      title: "QLead",
      category: "Your Story",
      link: "https://yourstory.com/2020/07/sales-outsourcing-reliable-startups",
      description:
        "Here’s how this sales outsourcing agency is becoming the most reliable partner for startups",
    },
  ];

  return (
    <Fragment>
      <SectionHeading heading="Blogs & Media" />
      <div className={styles.container}>
        {posts.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImage}
              />
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
                  {/* <a href={item.link} className={styles.cardLink}>
                    <span>READ MORE </span>
                    <span>
                      <FaArrowRight />
                    </span>
                  </a> */}
                  <a
                    href={item.link}
                    className={styles.cardLink}
                    target="_black"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <LinkButton path="blogs-and-media" text="View All" />
    </Fragment>
  );
};

export default Blogs;
