
import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import StoreDetail from '~/components/partials/stores/StoreDetail';
import PageContainer from '~/components/layouts/PageContainer';
import Newsletters from '~/components/partials/commons/Newletters';

export default function StoreDetailPage() {

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Store list',
            url: '/stores',
        },
        {
            text: 'Store Detail',
        },
    ];

    return (
        <PageContainer title="Store" boxed={true}>
            <BreadCrumb breacrumb={breadCrumb} />
            <StoreDetail />
            {/* <Newsletters layout="container" /> */}
        </PageContainer>
    );
}

export async function generateStaticParams() {
    try {
        const url = "http://localhost:1337/api/product-stores";
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