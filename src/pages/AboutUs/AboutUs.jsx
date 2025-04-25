import React from "react";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from "./AboutUs.module.css";
import Timeline from "../../components/AboutUsPageComponent/Timeline/Timeline";
import OurTeam from "../../components/AboutUsPageComponent/OurTeam/OurTeam";
import Achievements from "../../components/AboutUsPageComponent/Achievements/Achievements";
import Milestones from "../../components/AboutUsPageComponent/Milestones/Milestones";
import useMetaTags from "../../hooks/useMetaTags";
import logo_transform from "../../assets/images/logo-transform.jpeg";
import logo_square from "../../assets/images/qlead-logo-square.png";

const AboutUs = () => {
  useMetaTags({
    title: "About Us | Qlead AI - Expert B2B Lead Generation & Qualified Leads",
    description:
      "Qlead AI provides expert B2B lead generation services, delivering qualified leads, marketing and sales qualified leads, and lead qualification services in India.",
    keywords: "B2B Lead Generation",
  });

  return (
    <Fragment>
      {/* <Helmet>
        <title>
          About Us | Qlead AI - Expert B2B Lead Generation & Qualified Leads
        </title>
        <meta name="keyword" content="B2B Lead Generation" />
        <meta
          name="description"
          content="Qlead AI provides expert B2B lead generation services, delivering qualified leads, marketing and sales qualified leads, and lead qualification services in India"
        />
      </Helmet> */}
      <Milestones />
      {/* <Timeline /> */}
      <div className={styles.logo_transform_container}>
        <SectionHeading
          heading="The New QLead Logo – Where Precision Meets Possibility"
          para="At QLead.ai, we don’t just generate leads — we forge connections that convert into trusted customer relationships. Our new logo is more than a symbol — it’s a story."
        />
        <img
          src={logo_transform}
          alt="logo transform"
          className={styles.logo_transform}
        />
        <div className={styles.story_container}>
          <div className={styles.story_content}>
            <h3>The Blue Circle – Trust & Technology</h3>
            <div className={styles.separator}></div>
            <p>
              The blue outer circle represents *trust, **stability, and
              **intelligence* — the very foundation of our AI-powered lead
              generation. Blue evokes dependability, making it clear that
              businesses can rely on QLead.ai to deliver high-intent,
              conversion-ready leads. It also reflects our core tech-driven
              approach, powered by AI, analytics, and deep data insight.
            </p>
          </div>
          <div className={styles.story_content}>
            <h3>The Red Arrow – Growth & Conversion</h3>
            <div className={styles.separator}></div>
            <p>
              The red arrow breaking out of the circle signifies *momentum,
              **conversion, and **forward movement*. It shows how we take raw
              data and push it beyond traditional boundaries — converting
              curiosity into action, interest into interaction, and leads into
              customers. The upward arrow also reflects client growth, ROI, and
              sales success.
            </p>
          </div>
          <div className={styles.story_content}>
            <h3>The Green Dot – The Human Element</h3>
            <div className={styles.separator}></div>
            <p>
              At the center of our process is the *human* — the actual voice,
              the buyer, the decision-maker. The green represents *growth,
              **life, and **genuine interest*. This is the customer who isn't
              just a click, but a qualified, voice-verified, and ready-to-engage
              lead. Green also ties back to sustainability — indicating that
              QLead.ai doesn’t believe in spray-and-pray marketing but
              sustainable, precision-focused outreach.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.logo_square_container}>
        <div>
          <h3>The “Q” Form – Qualified & Questioning</h3>
          <div className={styles.separator}></div>
          <p>
            The letter "Q" built into the structure reflects our name and our
            process:
            <b /> *Qualified* leads, not just random data. It also symbolizes
            *questioning* — our AI interrogates every datapoint to ensure it
            matches your ideal customer profile before it lands in your inbox.
          </p>
          <b />
          <b />
          <h4>Connect. Convert. Sell.</h4>
          <div className={styles.separator}></div>
          <p>Every element of this logo supports our three-word promise:</p>
          <ul>
            <li>
              <strong>Connect:</strong> to real prospects, not bots or
              click-farms
            </li>
            <li>
              <strong>Convert:</strong> through AI-driven lead scoring and voice
              verification.
            </li>
            <li>
              <strong>Sell:</strong> with confidence, knowing your CAC is
              optimized and every lead is business-ready.
            </li>
          </ul>
        </div>
        <div>
          <img src={logo_square} alt="qlead logo" />
        </div>
      </div>
      <OurTeam />
    </Fragment>
  );
};

export default AboutUs;
