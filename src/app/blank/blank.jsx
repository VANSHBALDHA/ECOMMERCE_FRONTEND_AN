"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import BlankContent from "~/components/partials/page/Blank";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import PageContainer from "~/components/layouts/PageContainer";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function Page() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Blank Page" }];

  const seoData = getHeadData("/blank");

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
          <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
          <BlankContent />
        </div>
      </PageContainer>
    </>
  );
}
