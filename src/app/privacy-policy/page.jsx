"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import Policy from "~/components/partials/page/Policy";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import PageContainer from "~/components/layouts/PageContainer";
import Newletters from "~/components/partials/commons/Newletters";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function PrivacyPolicyPage() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Privacy & Policy" }];

  const seoData = getHeadData("/privacy-policy");

  return (
    <>
      <Helmet>
        <title>{seoData?.title || "Privacy & Policy"}</title>
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
        title={seoData?.title || "Privacy & Policy"}
      >
        <div className="ps-page--single">
          <BreadCrumb breacrumb={breadCrumb} />
          <div className="container">
            <Policy />
          </div>
        </div>
        {/* <Newletters layout="container" /> */}
      </PageContainer>
    </>
  );
}
