"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import VendorBanner from "~/components/partials/vendor/VendorBanner";
import VendorAbout from "~/components/partials/vendor/VendorAbout";
import VendorMileStone from "~/components/partials/vendor/VendorMileStone";
import VendorBestFees from "~/components/partials/vendor/VendorBestFees";
import VendorTestimonials from "~/components/partials/vendor/VendorTestimonials";
import VendorFaqs from "~/components/partials/vendor/VendorFaqs";
import FooterDefault from "~/components/shared/footers/FooterDefault";
import PageContainer from "~/components/layouts/PageContainer";
import Newsletters from "~/components/partials/commons/Newletters";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

const BecomeAVendorPage = () => {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Become a Vendor" }];

  const seoData = getHeadData("/vendor/become-a-vendor");

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
          <VendorBanner />
          <VendorAbout />
          <VendorMileStone />
          <VendorBestFees />
          <VendorTestimonials />
          <VendorFaqs />
          <VendorBanner />
        </div>
        {/* <Newsletters layout="container" /> */}
      </PageContainer>
    </>
  );
};

export default BecomeAVendorPage;
