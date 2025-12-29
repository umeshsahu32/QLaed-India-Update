import React from "react";
import PackageHero from "../../components/PackagePageComponent/PackageHero/PackageHero";
import PackageIntro from "./components/package-intro/PackageIntro";
import PackageClarification from "./components/package-clarification/PackageClarification";
import PackagePrice from "./components/package-price/PackagePrice";
import FeatureComparison from "./components/feature-comparison/FeatureComparison";
import PackageProcess from "./components/package-process/PackageProcess";
import Faq from "./components/faq/Faq";
import useMetaTags from "../../hooks/useMetaTags";

const Packages2 = () => {
  useMetaTags({
    title: "Choose Your Growth Engine.",
    description: "Your QBot. Your Leads. Your Revenue.",
    keywords: "Our packages",
  });
  return (
    <div>
      <PackageHero />
      <PackageIntro />
      <PackageClarification />
      <PackagePrice />
      <FeatureComparison />
      <PackageProcess />
      <Faq />
    </div>
  );
};

export default Packages2;
