// import React, { useEffect, useMemo } from 'react';
// import { useSelector } from 'react-redux';
// import useEcomerce from '~/hooks/useEcomerce';
// import CartProduct from '~/components/elements/products/CartProduct';
// import useGetProducts from '~/hooks/useGetProducts';

// export default function Wishlist() {
//     const ecomerce = useSelector(({ ecomerce }) => ecomerce);
//     const { addItem, removeItem } = useEcomerce();

//     const wishlistItems = useSelector(({ ecomerce }) => ecomerce.wishlistItems);
//     const { loading, getStrapiProducts, products } = useGetProducts();

//     function getProducts() {
//         if (wishlistItems.length > 0) {
//             const query = {
//                 filters: {
//                     id: {
//                         $in: wishlistItems.map((item) => item.id),
//                     },
//                 },
//             };
//             getStrapiProducts(query);
//         }
//     }

//     useEffect(() => {
//         getProducts();
//     }, [wishlistItems]);

//     function handleAddItemToCart(e, product) {
//         e.preventDefault();
//         addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
//     }

//     function handleRemoveWishlistItem(e, product) {
//         e.preventDefault();
//         removeItem(product, ecomerce.wishlistItems, 'wishlist');
//     }
//     // views
//     const wishlistContent = useMemo(() => {
//         if (loading) return <div>Loading...</div>;
//         if (products.length === 0) {
//             return (
//                 <div className="alert alert-danger" role="alert">
//                     Wishlist list is empty!
//                 </div>
//             );
//         }
//         return (
//             <div className="table-responsive">
//                 <table className="table ps-table--whishlist">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Product name</th>
//                             <th>Unit Price</th>
//                             <th>Vendor</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {products.map((product) => (
//                             <tr key={product.id}>
//                                 <td>
//                                     <a
//                                         href="#"
//                                         onClick={(e) =>
//                                             handleRemoveWishlistItem(e, product)
//                                         }>
//                                         <i className="icon-cross" />
//                                     </a>
//                                 </td>
//                                 <td>
//                                     <CartProduct product={product} />
//                                 </td>
//                                 <td className="price">${product.price}</td>
//                                 <td>{product.vendor}</td>
//                                 <td>
//                                     <a
//                                         className="ps-btn"
//                                         href=""
//                                         onClick={(e) =>
//                                             handleAddItemToCart(e, product)
//                                         }>
//                                         Add to cart
//                                     </a>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }, [products]);

//     return (
//         <div className="ps-section--shopping ps-whishlist">
//             <div className="container">
//                 <div className="ps-section__header">
//                     <h1>Wishlist</h1>
//                 </div>
//                 <div className="ps-section__content">{wishlistContent}</div>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import useEcomerce from "~/hooks/useEcomerce";
import CartProduct from "~/components/elements/products/CartProduct";
import useGetProducts from "~/hooks/useGetProducts";
import "./Wishlist.css";
import { IoClose } from "react-icons/io5";

export default function Wishlist() {
  const ecomerce = useSelector(({ ecomerce }) => ecomerce);
  const { addItem, removeItem } = useEcomerce();

  const wishlistItems = useSelector(({ ecomerce }) => ecomerce.wishlistItems);
  const { loading, getStrapiProducts, products } = useGetProducts();

  function getProducts() {
    if (wishlistItems.length > 0) {
      const query = {
        filters: {
          id: {
            $in: wishlistItems.map((item) => item.id),
          },
        },
      };
      getStrapiProducts(query);
    }
  }

  useEffect(() => {
    getProducts();
  }, [wishlistItems]);

  function handleAddItemToCart(e, product) {
    e.preventDefault();
    addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, "cart");
  }

  function handleRemoveWishlistItem(e, product) {
    e.preventDefault();
    removeItem(product, ecomerce.wishlistItems, "wishlist");
  }
  // views
  const wishlistContent = useMemo(() => {
    // if (loading) return <div>Loading...</div>;
    // if (products.length === 0) {
    //   return (
    //     <div className="alert alert-danger" role="alert">
    //       Wishlist list is empty!
    //     </div>
    //   );
    // }
    return (
      //   <div className="table-responsive">
      //     <table className="table ps-table--whishlist">
      //       <thead>
      //         <tr>
      //           <th></th>
      //           <th>Product name</th>
      //           <th>Unit Price</th>
      //           <th>Vendor</th>
      //           <th></th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {products.map((product) => (
      //           <tr key={product.id}>
      //             <td>
      //               <a
      //                 href="#"
      //                 onClick={(e) => handleRemoveWishlistItem(e, product)}
      //               >
      //                 <i className="icon-cross" />
      //               </a>
      //             </td>
      //             <td>
      //               <CartProduct product={product} />
      //             </td>
      //             <td className="price">${product.price}</td>
      //             <td>{product.vendor}</td>
      //             <td>
      //               <a
      //                 className="ps-btn"
      //                 href=""
      //                 onClick={(e) => handleAddItemToCart(e, product)}
      //               >
      //                 Add to cart
      //               </a>
      //             </td>
      //           </tr>
      //         ))}
      //       </tbody>
      //     </table>
      //   </div>
      <div class="row">
        <div class="col-12">
          <div class="table-content table-responsive cart-table-content">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Unit Price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="product-thumbnail">
                    <a href="/product/1">
                      <img
                        class="img-fluid"
                        src="https://martfury.nouhtml5.com/_next/image?url=https%3A%2F%2Fmartfuryapi.nouhtml5.com%2Fuploads%2F14a_a6a59e67a9.jpeg&w=1920&q=75"
                        alt=""
                      />
                    </a>
                  </td>
                  <td class="product-name text-center">
                    <a href="/product/1">Lorem ipsum jacket</a>
                  </td>
                  <td class="product-price-cart">
                    <span class="amount old">₹ 12.45</span>
                  </td>
                  <td class="product-remove">
                    <button>
                    <IoClose />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }, [products]);

  return (
    <div className="ps-section--shopping ps-whishlist ps-section--wishlist">
      <div className="container">
        <div className="ps-section__header">
          <h1>Wishlist</h1>
        </div>
        <div className="ps-section__content">{wishlistContent}</div>
      </div>
    </div>
  );
}
