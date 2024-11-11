'use client';

import { useParams } from 'next/navigation';
import React, { useMemo } from 'react'
import ProductItems from '../product/ProductItems';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import useProductBrand from '~/hooks/useProductBrand';

const BrandName = () => {

    const { slug } = useParams();
    const { loading, brandDetails } = useProductBrand(slug);

    const products = useMemo(() => {
        if (!brandDetails) return [];
        return brandDetails.products.data;
    }, [brandDetails]);

    //Views

    const productContent = useMemo(() => {
        if (loading) return <p>Loading...</p>;
        if (brandDetails) {
            return <ProductItems columns={4} products={products} />;
        }
    }, [loading, brandDetails, products]);

    return (
        <>
            <div className="ps-page--shop">
                <div className="container">
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopBrands />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <h3 className="ps-shop__heading">
                                {brandDetails?.title || 'Product brand'}
                            </h3>
                            {productContent}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandName