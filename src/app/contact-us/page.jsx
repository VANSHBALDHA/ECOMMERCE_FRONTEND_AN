"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import ContactInfo from "~/components/partials/page/ContactInfo";
import ContactForm from "~/components/partials/page/ContactForm";
import ContactMap from "~/components/partials/page/ContactMap";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import PageContainer from "~/components/layouts/PageContainer";
import Newletters from "~/components/partials/commons/Newletters";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function ContactUsPage() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Contact Us" }];

  const seoData = getHeadData("/contact-us");

  return (
    <>
      <Helmet>
        <title>{seoData?.title || "Contact Us"}</title>
        <meta name="description" content={seoData?.desc} />
        <link rel="canonical" href={seoData?.canonical} />
        <meta
          name="robots"
          content={`${seoData?.isIndexed ? "index" : "noindex"},${
            seoData?.followLinks ? "follow" : "nofollow"
          }`}
        />
        <meta property="og:title" content={seoData?.title} />
        <meta property="og:description" content={seoData?.desc} />
        <meta property="og:url" content={seoData?.canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageContainer
        footer={<FooterDefault />}
        title={seoData?.title || "Contact Us"}
      >
        <div className="ps-page--single" id="contact-us">
          <BreadCrumb breacrumb={breadCrumb} />
          {/* <ContactMap /> */}
          <ContactInfo />
          <ContactForm />
        </div>
        {/* <Newletters layout="container" /> */}
      </PageContainer>
    </>
  );
}
