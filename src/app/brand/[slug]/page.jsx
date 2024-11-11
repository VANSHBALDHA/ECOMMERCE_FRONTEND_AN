
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import BrandName from '~/components/partials/brand/BrandName';

export default function Page() {

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
            text: "Product brand",
        },
    ];

    return (
        <PageContainer
            footer={<FooterDefault />}
            title="Product brand">
            <BreadCrumb breacrumb={breadCrumb} />
            <BrandName />
            {/* <Newletters layout="container" /> */}
        </PageContainer>
    );
}


export async function generateStaticParams() {
    try {
        const url = "http://localhost:1337/api/product-brands";
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