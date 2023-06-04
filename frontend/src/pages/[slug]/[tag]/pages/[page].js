import AppLayout from "@/components/Layouts/AppLayout";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem";
import axios from "@/libs/axios";
import { capitalizeFirstLetter } from "@/libs/helper";
import { useRouter } from "next/router";
import React from "react";

export default function PageTag({ products }) {
    const router = useRouter();
    const { slug, tag } = router.query;

    return (
        <AppLayout title={capitalizeFirstLetter(tag)}>
            <div className="py-20">{capitalizeFirstLetter(tag)}</div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 lg:px-20 px-10">
                {products.data
                    ? products.data.map((product, index) => (
                          <ProductItem key={index} product={product} />
                      ))
                    : "Products is not available yet."}
            </div>
            <Pagination meta={products.meta} slug={slug} tag={tag}/>
        </AppLayout>
    );
}

export async function getServerSideProps({ query : { tag, page = ''} }) {
    const response = await axios.get(`/api/tags/${tag}?page=${page}`);
    const products = response.data;

    return {
        props: {
            products,
        },
    };
}
