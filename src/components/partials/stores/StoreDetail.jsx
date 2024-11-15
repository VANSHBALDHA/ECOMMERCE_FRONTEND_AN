"use client";

import React, { useEffect, useMemo } from "react";
import ModuleStoreInformation from "~/components/partials/stores/modules/ModuleStoreInformation";
import ModuleStoreItems from "~/components/partials/stores/modules/ModuleStoreItems";
import { useParams } from "next/navigation";
import useStore from "~/hooks/useStores";
import ProductGroupByCarousel from "~/components/partials/product/ProductGroupByCarousel";
import { StoreData } from "~/FakeData";

const StoreDetail = () => {
  const params = useParams();
  const { slug } = params;
  const { loading, store, getStore } = useStore();

  const StoreDetails = StoreData?.find((data) => data?.slug === slug);

  useEffect(() => {
    getStore(slug);
  }, [slug]);

  const products = useMemo(() => {
    if (!StoreDetails) return [];
    return StoreDetails;
  }, []);

  const storeProductItems = useMemo(() => {
    if (loading) return <p>Loading...</p>;
    else {
      if (!StoreDetails) return <p>No product found.</p>;
      else {
        if (StoreDetails?.length === 0) {
          return <p>No product found.</p>;
        } else {
          return (
            <div className="ps-store-products">
              <ProductGroupByCarousel
                collectionSlug="customer-bought"
                title="Best Sale Items"
                StoreDetails={StoreDetails}
              />
              <ModuleStoreItems StoreDetails={StoreDetails} />
            </div>
          );
        }
      }
    }
  }, [loading, store, products]);

  return (
    <div className="ps-vendor-store">
      <div className="container">
        <div className="ps-section__container">
          <div className="ps-section__left">
            <ModuleStoreInformation
              store={StoreDetails ? StoreDetails : null}
            />
          </div>
          <div className="ps-section__right">
            <div className="ps-block--vendor-filter">
              <div className="ps-block__left"></div>
              <div className="ps-block__right">
                <form className="ps-form--search" action="/" method="get">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search in this shop"
                  />
                  <button>
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
            </div>
            {storeProductItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
