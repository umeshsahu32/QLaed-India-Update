import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  HomePage,
  AboutUs,
  AudienceGeneration,
  Blogs,
  BlogSummary,
  ContactUs,
  Faqs,
  Industries,
  LeadGeneration,
  Media,
  MeetingGeneration,
  Packages,
  PageNotFound,
  PrivacyPolicy,
  Services,
  SuccessStories,
  TermsCondition,
  Packages2,
} from "./routes.js";

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "services/qualified-audience-generation",
        element: <AudienceGeneration />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blog/:title",
        element: <BlogSummary />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "faqs",
        element: <Faqs />,
      },

      {
        path: "industries-served",
        element: <Industries />,
      },
      {
        path: "services/qualified-lead-generation",
        element: <LeadGeneration />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "services/qualified-meeting-generation",
        element: <MeetingGeneration />,
      },

      {
        path: "our-packages",
        element: <Packages2 />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "our-services",
        element: <Services />,
      },
      {
        path: "success-stories",
        element: <SuccessStories />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsCondition />,
      },
      // {
      //   path: "our-packages2",
      //   element: <Packages2 />,
      // },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
