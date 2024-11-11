'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react'
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import HeaderMobileProduct from '~/components/shared/header-mobile/HeaderMobileProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import useGetProducts from '~/hooks/useGetProducts';
import ProductWidgets from './ProductWidgets';
import RelatedProduct from './RelatedProduct';

const ProductDetails = () => {
    const params = useParams();
    const { pid } = params;
    const { loading, getStrapiProduct, product } = useGetProducts();

    useEffect(() => {
        getStrapiProduct(pid);
    }, [pid]);

    const productDetails = useMemo(() => {
        if (loading) {
            return <SkeletonProductDetail />;
        }
        if (product) {
            return <ProductDetailFullwidth product={product} />;
        }
    }, [loading, product]);

    const headerView = useMemo(() => {
        if (loading) {
            return (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
        if (product) {
            return (
                <>
                    <HeaderProduct product={product} />
                    <HeaderMobileProduct />
                </>
            );
        } else {
            return (
                <>
                    <HeaderDefault />
                    <HeaderMobileProduct />
                </>
            );
        }
    }, [loading, product]);


    return (
        <>
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">{productDetails}</div>
                        <div className="ps-page__right">
                            <ProductWidgets />
                        </div>
                    </div>
                    <RelatedProduct />
                </div>
            </div>
        </>
    )
}

export default ProductDetails