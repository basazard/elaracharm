import Container from "@/components/Container";
import Header from "@/components/Header";
import AppLayout from "@/components/Layouts/AppLayout";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem";
import axios from "@/libs/axios";
import React from "react";

export default function Home({ products }) {
    return (
        <AppLayout title="Home">
            <Header className="bg-violet-800">
                <div className="flex justify-between">
                    <div className="flex flex-col justify-center lg:py-0 py-10">
                        <Header.Title>ElaraCharm - Unleash Your Charismatic Style!</Header.Title>
                        <Header.Description>
                            Explore our captivating collection of fashion-forward apparel and accessories for the modern girl. Shop now and
                            embrace your unique charm with ElaraCharm.
                        </Header.Description>
                    </div>
                    <div className="lg:block hidden">
                        <img src="/images/model.png" className="lg:h-80 object-cover" />
                    </div>
                </div>
            </Header>
            <div className="mt-10">
                <Container>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {products.data
                            ? products.data.map((product, index) => <ProductItem key={index} product={product} />)
                            : "Products is not available yet."}
                    </div>
                </Container>
            </div>
            <Pagination meta={products.meta} />
        </AppLayout>
    );
}

export async function getStaticProps() {
    const response = await axios.get(`/api/products/`);
    const products = await response.data;

    return {
        props: {
            products,
        },
    };
}
