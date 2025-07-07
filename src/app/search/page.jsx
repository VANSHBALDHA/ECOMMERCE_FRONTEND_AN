"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import PageContainer from "~/components/layouts/PageContainer";
import SearchContent from "~/components/partials/search/SearchContent";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

const SearchPage = () => {
  const breadcrumb = [{ text: "Home", url: "/" }, { text: "Search Result" }];

  const seoData = getHeadData("/search");

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

      <PageContainer title={seoData.title}>
        <div className="ps-page">
          <BreadCrumb breacrumb={breadcrumb} />
        </div>
        <div className="container">
          <SearchContent />
        </div>
      </PageContainer>
    </>
  );
};

export default SearchPage;
