import React, { useEffect, useState } from "react";
import Product from "~/components/elements/products/Product";
import WideProduct from "~/components/elements/products/WideProduct";
import ModuleShopSortBy from "~/components/partials/shop/modules/ModuleShopSortBy";
import { generateTempArray } from "~/utilities/common-helpers";
import SkeletonProduct from "~/components/elements/skeletons/SkeletonProduct";

const ModuleStoreItems = ({
  products,
  columns = 4,
  pageSize = 12,
  StoreDetails,
}) => {
  const [listView, setListView] = useState(true);
  const [productItems, setProductItems] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [classes, setClasses] = useState(
    "col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6"
  );

  function handleChangeViewMode(e) {
    e.preventDefault();
    setListView(!listView);
  }

  function handleSetColumns() {
    switch (columns) {
      case 2:
        setClasses("col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6");
        return 3;
        break;
      case 4:
        setClasses("col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6");
        return 4;
        break;
      case 6:
        setClasses("col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6");
        return 6;
        break;

      default:
        setClasses("col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6");
    }
  }

  useEffect(() => {
    if (products) {
      setProductItems(products);
      setTotal(products.length);
    }
    handleSetColumns();
  }, [products]);

  // Views
  let productItemsView;
  if (!loading) {
    if (StoreDetails) {
      if (listView) {
        const items = StoreDetails?.storeProduct?.map((item) => (
          <div className={classes} key={item.id}>
            <Product product={item} />
          </div>
        ));
        productItemsView = (
          <div className="ps-shop-items">
            <div className="row">{items}</div>
          </div>
        );
      } else {
        productItemsView = productItems.map((item) => (
          <WideProduct product={item} />
        ));
      }
    } else {
      productItemsView = <p>No product found.</p>;
    }
  } else {
    const skeletonItems = generateTempArray(12).map((item) => (
      <div className={classes} key={item}>
        <SkeletonProduct />
      </div>
    ));
    productItemsView = <div className="row">{skeletonItems}</div>;
  }

  return (
    <div className="ps-shopping">
      <div className="ps-shopping__header">
        <p>
          <strong className="mr-2">{StoreDetails?.storeProduct?.length}</strong>
          Products found
        </p>
        <div className="ps-shopping__actions">
          <ModuleShopSortBy />
          <div className="ps-shopping__view">
            <ul className="ps-tab-list">
              <li className={listView === true ? "active" : ""}>
                <a href="#" onClick={(e) => handleChangeViewMode(e)}>
                  <i className="icon-grid" />
                </a>
              </li>
              <li className={listView !== true ? "active" : ""}>
                <a href="#" onClick={(e) => handleChangeViewMode(e)}>
                  <i className="icon-list4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ps-shopping__content">{productItemsView}</div>
    </div>
  );
};

export default ModuleStoreItems;
