import Header from "@/components/Header";
import AppLayout from "@/components/Layouts/AppLayout";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem";
import axios from "@/libs/axios";
import { capitalizeFirstLetter } from "@/libs/helper";
import { useRouter } from "next/router";
import React from "react";

export default function ShowCategory({ products }) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <AppLayout title={capitalizeFirstLetter(slug)}>
            <Header className="bg-slate-900">
                <Header.Title>{capitalizeFirstLetter(slug)}</Header.Title>
            </Header>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 lg:px-20 px-10">
                {products.data
                    ? products.data.map((product, index) => (
                          <ProductItem key={index} product={product} />
                      ))
                    : "Products is not available yet."}
            </div>
            <Pagination meta={products.meta} slug={slug}/>
        </AppLayout>
    );
}

export async function getServerSideProps({ query : { slug, page = 1} }) {
    const response = await axios.get(`/api/categories/${slug}?page=${page}`);
    const products = response.data;

    return {
        props: {
            products,
        },
    };
}
