"use client";

import React from "react";
import { Helmet } from "react-helmet";
import Link from "next/link";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

function NotFound() {
  const seoData = getHeadData("/blank"); // 👈 make sure to define `/404` in RoutePathsSEO

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

      <div className="site-content">
        <div className="ps-page--404">
          <div className="container">
            <div className="ps-section__content">
              <figure>
                <img src="/static/img/404.jpg" alt="404 Not Found" />
                <h3>Ohh! Page not found</h3>
                <p>It seems we can't find what you're looking for.</p>
                <Link href="/" className="ps-btn">
                  Go back to Homepage
                </Link>
              </figure>
            </div>
          </div>
        </div>
        {/* <FooterDefault /> */}
      </div>
    </>
  );
}

export default NotFound;
