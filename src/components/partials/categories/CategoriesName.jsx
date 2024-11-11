'use client';

import { useParams } from 'next/navigation';
import React, { useMemo, useState } from 'react'
import useProducCategory from '~/hooks/useProducCategory';
import ProductItems from '../product/ProductItems';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';

const CategoriesName = () => {
    const { slug } = useParams();
    const [category, setCategory] = useState(null);
    const { loading, categoryDetails } = useProducCategory(slug);

    const products = useMemo(() => {
        if (!categoryDetails) return [];
        return categoryDetails.products.data;
    }, [categoryDetails]);

    const productContent = useMemo(() => {
        if (loading) return <p>Loading...</p>;
        if (categoryDetails) {
            return <ProductItems columns={4} products={products} />;
        }
    }, [loading, categoryDetails, products]);

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
                                {category && category.name}
                            </h3>
                            {productContent}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoriesName