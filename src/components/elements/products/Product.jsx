// import React from "react";
// import Link from "next/link";
// import ProductActions from "~/components/elements/products/modules/ProductActions";
// import useProduct from "~/hooks/useProduct";
// import Rating from "~/components/elements/Rating";
// import Image from "next/image";
// import { getStrapiImageURL } from "~/services/strapiServices/image/getStrapiImageService";

// const Product = ({ product }) => {
//   const { thumbnailImage, price, badge, title } = useProduct(
//     product.attributes
//   );

//   const productThumbnailImage = product?.image ? (
//     <Image
//       src={getStrapiImageURL(product.image)}
//       alt=""
//       layout="responsive"
//       width={200}
//       height={200}
//     />
//   ) : (
//     <img src="https://placehold.co/400x400" alt="" />
//   );

//   return (
//     <div className="ps-product">
//       <div className="ps-product__thumbnail">
//         <Link href={"/product/[pid]"} as={`/product/${product.id}`}>
//           <img src={product?.image} alt="" />
//         </Link>
//         {/* {badge(product)} */}
//         <ProductActions product={product} />
//       </div>
//       <div className="ps-product__container">
//         <Link href={"/shop"} className="ps-product__vendor">
//           {product?.title}
//         </Link>
//         <div className="ps-product__content">
//           {product?.name}
//           <div className="ps-product__rating">
//             <Rating />
//             <span>02</span>
//           </div>
//           {product?.price}
//         </div>
//         <div className="ps-product__content hover">
//           {product?.name}
//           {product?.price}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from 'react';
import Link from 'next/link';
import ProductActions from '~/components/elements/products/modules/ProductActions';
import useProduct from '~/hooks/useProduct';
import Rating from '~/components/elements/Rating';

const Product = ({ product }) => {
    const { thumbnailImage, price, badge, title } = useProduct(
        product.attributes
    );

    return (
        <div className="ps-product">
            <div className="ps-product__thumbnail">
                <Link href={'/product/[pid]'} as={`/product/${product.id}`}>
                    {thumbnailImage}
                </Link>
                {badge(product)}
                <ProductActions product={product} />
            </div>
            <div className="ps-product__container">
                <Link href={'/shop'} className="ps-product__vendor">
                    Young Shop
                </Link>
                <div className="ps-product__content">
                    {title}
                    <div className="ps-product__rating">
                        <Rating />
                        <span>02</span>
                    </div>
                    {price}
                </div>
                <div className="ps-product__content hover">
                    {title}
                    {price}
                </div>
            </div>
        </div>
    );
};

export default Product;
