"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Slider from "react-slick";
import SkeletonProduct from "~/components/elements/skeletons/SkeletonProduct";
import { carouselFullwidth } from "~/utilities/carousel-helpers";
import CountDownSimple from "~/components/elements/CountDownSimple";
import DealOfDayProduct from "~/components/elements/products/DealOfDayProduct";
import { generateTempArray } from "~/utilities/common-helpers";
import useGetProducCollection from "~/hooks/useGetProducCollection";
import cx from "classnames";

const HomeDefaultDealOfDay = ({ collectionSlug, fullWidth = true }) => {
  const { collectionLoading, collectionDetail } =
    useGetProducCollection(collectionSlug);

  const products = useMemo(() => {
    if (collectionLoading) return [];
    if (!collectionDetail) return [];
    return collectionDetail.attributes?.products?.data || [];
  }, [collectionDetail]);

  const productContent = useMemo(() => {
    if (collectionLoading) {
      const skeletons = generateTempArray(6).map((item) => (
        <div className="col-xl-2 col-lg-3 col-sm-3 col-6" key={item}>
          <SkeletonProduct />
        </div>
      ));
      return <div className="row">{skeletons}</div>;
    } else {
      if (!products) {
        return <p>No product(s) found.</p>;
      }
      return (
        <Slider {...carouselFullwidth} className="ps-carousel outside">
          {products.map((item) => (
            <DealOfDayProduct product={item} key={item.id} />
          ))}
        </Slider>
      );
    }
  }, [collectionLoading, products]);

  return (
    // <div className="ps-deal-of-day">
    //     <div className={cx(fullWidth ? 'ps-container' : 'container')}>
    //         <div className="ps-section__header">
    //             <div className="ps-block--countdown-deal">
    //                 <div className="ps-block__left">
    //                     <h3>New Arrivals</h3>
    //                 </div>
    //                 {/* <div className="ps-block__right">
    //                     <figure>
    //                         <figcaption>End in:</figcaption>
    //                         <CountDownSimple
    //                             timeTillDate="12 31 2024, 6:00 am"
    //                             timeFormat="MM DD YYYY, h:mm a"
    //                         />
    //                     </figure>
    //                 </div> */}
    //             </div>
    //             <Link href={'/shop'}>View all</Link>
    //         </div>
    //         <div className="ps-section__content">{productContent}</div>
    //     </div>
    // </div>
    <div className="ps-product-list ps-new-arrivals">
      <div className="ps-container">
        <div className="ps-section__header">
          <h3>New Arrivals</h3>
          <ul className="ps-section__links">
            <li>
              <Link href={"/shop"}>View All</Link>
            </li>
          </ul>
        </div>
        <div className="ps-section__content">{productContent}</div>
      </div>
    </div>
  );
};

export default HomeDefaultDealOfDay;
