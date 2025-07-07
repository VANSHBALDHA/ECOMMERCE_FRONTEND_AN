"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import PageContainer from "~/components/layouts/PageContainer";
import Newletters from "~/components/partials/commons/Newletters";
import Career from "~/components/partials/page/Career";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function CareerPage() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Career" }];

  const seoData = getHeadData("/career");

  return (
    <>
      <Helmet>
        <title>{seoData?.title || "Career"}</title>
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
        title={seoData?.title || "Career"}
      >
        <div className="ps-page--single">
          <BreadCrumb breacrumb={breadCrumb} />
          <div className="container">
            <Career />
          </div>
        </div>
        {/* <Newletters layout="container" /> */}
      </PageContainer>
    </>
  );
}
