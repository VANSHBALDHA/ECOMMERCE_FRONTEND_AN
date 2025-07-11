"use client";

import React from "react";
import { Helmet } from "react-helmet";
import StoreItems from "~/components/partials/stores/StoreItems";
import BreadCrumb from "~/components/elements/BreadCrumb";
import PageContainer from "~/components/layouts/PageContainer";
import Newsletters from "~/components/partials/commons/Newletters";
import FooterDefault from "~/components/shared/footers/FooterDefault";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function StoreListPage() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Stores" }];

  const seoData = getHeadData("/stores");

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
        <div className="ps-page--single ps-page--vendor">
          <BreadCrumb breacrumb={breadCrumb} />
          <section className="ps-store-list">
            <div className="container">
              <div className="ps-section__header">
                <h3>Store list</h3>
              </div>
              <div className="ps-section__content">
                <div className="ps-section__search row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <button>
                        <i className="icon-magnifier" />
                      </button>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Search vendor..."
                      />
                    </div>
                  </div>
                </div>
                <StoreItems />
              </div>
            </div>
          </section>
        </div>
        {/* <Newsletters layout="container" /> */}
      </PageContainer>
    </>
  );
}
