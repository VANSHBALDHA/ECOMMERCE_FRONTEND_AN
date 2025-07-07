"use client";

import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import PageContainer from "~/components/layouts/PageContainer";
import { Table } from "antd";
import useGetProducts from "~/hooks/useGetProducts";
import { updateEntry } from "~/services/strapiServices/strapiHttpServices";

import getHeadData from "~/utilities/seo/RoutePathsSEO";

export default function Page() {
  const { loading, products, getStrapiProducts } = useGetProducts();

  const seoData = getHeadData("/tools");

  useEffect(() => {
    getStrapiProducts({
      populate: "*",
      pagination: {
        pageSize: 99999999,
      },
    });
  }, []);

  const productSource = useMemo(() => {
    if (products.length === 0) return [];
    return products.map(({ id, attributes }) => ({
      key: id,
      title: attributes.title,
      price: attributes.price,
      type: attributes.type || "-",
    }));
  }, [products]);

  const updateProductPrice = async () => {
    if (products.length > 0) {
      await Promise.all(
        products.map(async (item) => {
          const params = {
            data: {
              price: parseFloat(
                (Math.floor(Math.random() * 89.99) + 10.99).toFixed(2)
              ),
            },
          };
          await updateEntry(`products/${item.id}`, params);
          return params;
        })
      );
      getStrapiProducts({
        populate: "*",
        pagination: {
          pageSize: 99999999,
        },
      });
    }
  };

  const updateProductType = async () => {
    if (products.length > 0) {
      await Promise.all(
        products.map(async (item) => {
          const types = ["new-arrivals", "best-seller", "most-popular"];
          const params = {
            data: {
              type: types[Math.floor(Math.random() * types.length)],
            },
          };
          await updateEntry(`products/${item.id}`, params);
          return params;
        })
      );
      getStrapiProducts({
        populate: "*",
        pagination: {
          pageSize: 99999999,
        },
      });
    }
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Type", dataIndex: "type", key: "type" },
  ];

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
        <div className="container mt-20">
          <div className="mb-20">
            <button
              className="ps-btn ps-btn--ghost mr-2"
              onClick={updateProductPrice}
            >
              Update Price
            </button>
            <button
              className="ps-btn ps-btn--ghost"
              onClick={updateProductType}
            >
              Update Type
            </button>
          </div>
          <Table
            dataSource={productSource}
            columns={columns}
            loading={loading}
          />
        </div>
      </PageContainer>
    </>
  );
}
