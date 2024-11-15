import React from "react";
import Rating from "~/components/elements/Rating";
import Link from "next/link";

const StoreDefault = ({ source }) => {
  return (
    <article className="ps-block--store-2">
      <div
        className="ps-block__content bg--cover"
        style={{
          background: `url({source?.image})`,
        }}
      >
        <figure>
          <h4>
            <Link href={`/store/${source.slug}`} as={`/store/${source.slug}`}>
              {source.title}
            </Link>
          </h4>
          <div className="ps-block__rating">
            <Rating />
          </div>
          <p>{source.address}</p>
          {source.phone && (
            <p>
              <i className="icon-telephone" /> {source.phone}
            </p>
          )}
        </figure>
      </div>
      <div className="ps-block__author">
        <a className="ps-block__user" href="#">
          <img
            src="/static/img/vendor/store/vendor-150x150.jpg"
            alt="martfury"
          />
        </a>
        <Link
          href={`/store/${source.slug}`}
          as={`/store/${source.slug}`}
          className="ps-btn"
        >
          Visit Store
        </Link>
      </div>
    </article>
  );
};

export default StoreDefault;
