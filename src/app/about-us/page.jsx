"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import AboutAwards from "~/components/partials/page/about-us/AboutAwards";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import PageContainer from "~/components/layouts/PageContainer";
import OurTeam from "~/components/partials/page/about-us/OurTeam";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function Page() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "About Us" }];

  const seoData = getHeadData("/about-us");

  return (
    <>
      <Helmet>
        <title>{seoData?.title}</title>
        <meta name="description" content={seoData?.desc} />
        <link rel="canonical" href={seoData.canonical} />
        <meta
          name="robots"
          content={`${seoData.isIndexed ? "index" : "noindex"},${
            seoData.followLinks ? "follow" : "nofollow"
          }`}
        />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.desc} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      <PageContainer footer={<FooterDefault />} title={seoData.title}>
        <div className="ps-page--single">
          <img src="/static/img/bg/about-us.jpg" alt="About Us" />
          <BreadCrumb breacrumb={breadCrumb} />
          <OurTeam />
          <AboutAwards />
        </div>
      </PageContainer>
    </>
  );
}
