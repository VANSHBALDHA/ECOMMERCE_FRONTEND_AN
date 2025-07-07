"use client";

import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumb from "~/components/elements/BreadCrumb";
import PageContainer from "~/components/layouts/PageContainer";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import Newletters from "~/components/partials/commons/Newletters";
import Terms from "~/components/partials/page/terms";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

const Page = () => {
  const breadCrumb = [
    { text: "Home", url: "/" },
    { text: "Terms & Conditions" },
  ];

  const seoData = getHeadData("/terms");

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
          <BreadCrumb breacrumb={breadCrumb} />
          <div className="container">
            <Terms />
          </div>
        </div>
        {/* <Newletters layout="container" /> */}
      </PageContainer>
    </>
  );
};

export default Page;
