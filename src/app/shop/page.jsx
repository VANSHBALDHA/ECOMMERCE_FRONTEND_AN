"use client";

import React from "react";
import { Helmet } from "react-helmet";

import BreadCrumb from "~/components/elements/BreadCrumb";
import ShopItems from "~/components/partials/shop/ShopItems";
import WidgetShopCategories from "~/components/shared/widgets/WidgetShopCategories";
import WidgetShopBrands from "~/components/shared/widgets/WidgetShopBrands";
import WidgetShopFilterByPriceRange from "~/components/shared/widgets/WidgetShopFilterByPriceRange";
import PageContainer from "~/components/layouts/PageContainer";
import Newletters from "~/components/partials/commons/Newletters";
import ShopBanner from "~/components/partials/shop/ShopBanner";
import ShopBrands from "~/components/partials/shop/ShopBrands";
import ShopCategories from "~/components/partials/shop/ShopCategories";
import ProductGroupByCarousel from "~/components/partials/product/ProductGroupByCarousel";
import FooterDefault from "~/components/shared/footers/FooterDefault";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function ShopPage() {
  const breadCrumb = [{ text: "Home", url: "/" }, { text: "Shop Default" }];

  const seoData = getHeadData("/shop");

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
        <div className="ps-page--shop">
          <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
          <div className="ps-container">
            <ShopBanner />
            <ShopBrands />
            <ShopCategories />

            <div className="ps-layout--shop">
              <div className="ps-layout__left">
                <WidgetShopCategories />
                <WidgetShopBrands />
                <WidgetShopFilterByPriceRange />
              </div>

              <div className="ps-layout__right">
                <ProductGroupByCarousel
                  collectionSlug="hot-new-arrivals"
                  title="Best Sale Items"
                />
                <ProductGroupByCarousel
                  collectionSlug="hot-new-arrivals"
                  title="Recommended Items"
                />
                <ShopItems columns={6} pageSize={18} />
              </div>
            </div>
          </div>
        </div>
        <Newletters />
      </PageContainer>
    </>
  );
}
