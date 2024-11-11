"use client";
import React, { useEffect, useMemo } from "react";
import StoreDefault from "~/components/elements/stores/StoreDefault";
import useStores from "~/hooks/useStores";
import { StoreData } from "~/FakeData";

const StoreItems = () => {
  const { loading, stores, getStores } = useStores();
  useEffect(() => {
    getStores();
  }, []);

  // Views

  const storesContent = useMemo(() => {
    if (loading) return <p>Loading...</p>;
    else {
      if (StoreData?.length === 0) {
        return <p>No stores found.</p>;
      }
      return StoreData?.map((item) => (
        <div
          className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
          key={item.id}
        >
          <StoreDefault source={item} />
        </div>
      ));
    }
  }, [StoreData, loading]);

  return <div className="ps-stores-items row">{storesContent}</div>;
};

export default StoreItems;
