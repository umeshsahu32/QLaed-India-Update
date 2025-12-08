import React from "react";
import { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";

import styles from "./AboutUs.module.css";
import Timeline from "../../components/AboutUsPageComponent/Timeline/Timeline";
import OurTeam from "../../components/AboutUsPageComponent/OurTeam/OurTeam";
import Achievements from "../../components/AboutUsPageComponent/Achievements/Achievements";
import Milestones from "../../components/AboutUsPageComponent/Milestones/Milestones";
import useMetaTags from "../../hooks/useMetaTags";
import LogoStory from "../../components/AboutUsPageComponent/LogoStory/LogoStory";

const AboutUs = () => {
  useMetaTags({
    title: "About Us | Qlead AI - Expert B2B Lead Generation & Qualified Leads",
    description:
      "Qlead AI provides expert B2B lead generation services, delivering qualified leads, marketing and sales qualified leads, and lead qualification services in India.",
    keywords: "B2B Lead Generation",
  });

  return (
    <Fragment>
      <Milestones />
      <LogoStory />
      <OurTeam />
    </Fragment>
  );
};

export default AboutUs;
