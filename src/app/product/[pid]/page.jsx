
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import ProductDetails from '~/components/partials/product/ProductDetails';

const ProductDefaultPage = () => {

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: "Untitled Product",
        },
    ];


    return (
        <PageContainer
            title="Untitled Product">
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <ProductDetails />
            <Newletters />
        </PageContainer>
    );
};

export default ProductDefaultPage;

export async function generateStaticParams() {
    try {
        const url = "http://localhost:1337/api/products";
        const res = await fetch(url);
        const data = await res.json();

        if (!data.data || !Array.isArray(data.data)) {
            throw new Error("Invalid products data");
        }

        return data.data.map((post) => ({
            pid: post.id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching products data:", error);
        return [];
    }
}