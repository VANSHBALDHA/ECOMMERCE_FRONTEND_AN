import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import CategoriesName from '~/components/partials/categories/CategoriesName';

export default function ProductScreen() {

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/',
        },
        {
            text: "Product category",
        },
    ];

    return (
        <PageContainer
            footer={<FooterDefault />}
            title="Product category"
            boxed={true} >
            <BreadCrumb breacrumb={breadCrumb} />
            <CategoriesName />
            {/* <Newletters layout="container" /> */}
        </PageContainer >
    );
}

export async function generateStaticParams() {
    try {
        const url = "http://localhost:1337/api/product-categories";
        const res = await fetch(url);
        const data = await res.json();

        if (!data.data || !Array.isArray(data.data)) {
            throw new Error("Invalid products data");
        }

        return data.data.map((post) => ({
            slug: post.id.toString(),
        }));
    } catch (error) {
        console.error("Error fetching products data:", error);
        return [];
    }
}