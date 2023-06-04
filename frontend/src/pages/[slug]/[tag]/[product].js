import Drawer from "@/components/Drawer";
import AppLayout from "@/components/Layouts/AppLayout";
import { useAuth } from "@/hooks/useAuth";
import useCartCount from "@/hooks/useCartCount";
import axios from "@/libs/axios";
import { capitalizeFirstLetter, numberFormat } from "@/libs/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ShowProduct({ data }) {
    const router = useRouter();
    const { slug, tag } = router.query;
    const { user } = useAuth();

    const [quantity, setQuantity] = useState(1);

    const { refreshCartCount } = useCartCount();

    const storeData = { data, quantity };

    const addToCart = async () => {
        if (!user) {
            router.push("/login");
            return;
        }

        await axios.post(`/api/carts/add-to-chart/${data.slug}`, storeData);
        refreshCartCount();
        toast.success("Product successfully added to cart", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <AppLayout title={data.name}>
            <div className="w-full mx-auto max-w-7xl mt-5">
                <ul className="flex gap-3">
                    <Link href={`/${slug}`} className="text-sm text-slate-700 hover:text-slate-500 hover:underline">{capitalizeFirstLetter(slug)}</Link>
                    <li className="text-sm text-slate-700 hover:text-slate-500">/</li>
                    <Link href={`/${slug}/${tag}`} className="text-sm text-slate-700 hover:text-slate-500 hover:underline">{capitalizeFirstLetter(tag)}</Link>
                    <li className="text-sm text-slate-700 hover:text-slate-500">/</li>
                    <Link href={`/${slug}/${tag}/${data.slug}`} className="text-sm text-slate-700 hover:text-slate-500 hover:underline">{data.name}</Link>
                </ul>
            </div>
            <div className="flex justify-center mt-10">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex justify-center">
                            <img src={data.picture} className="w-96 rounded-lg" />
                        </div>
                        <div className="flex flex-col max-h-screen justify-between">
                            <div className="border p-5 rounded-lg">
                                <h1 className="text-3xl font-semibold text-slate-900">{data.name}</h1>
                                <h1 className="text-2xl font-medium text-blue-500 mt-8">Rp.{numberFormat(data.price)}</h1>

                                <div className="mt-20">{data.description}</div>
                            </div>
                            <div className="">
                                <button
                                    onClick={() => addToCart()}
                                    className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold">
                                    Add to Chart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export async function getServerSideProps({ query: { product } }) {
    const response = await axios.get(`/api/products/${product}`);
    const data = await response.data.data;

    console.log(data);
    return {
        props: {
            data,
        },
    };
}
