import { numberFormat } from "@/libs/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProductItem({ product }) {    
    return (
        <div className="flex flex-col shadow-sm rounded-lg">
            <div className="flex justify-center">
                <img src={product.picture} alt={product.name} className="w-full rounded-lg" />
            </div>
            <div className="w-full grid grid-cols-2 gap-5">
                <div className="flex flex-col px-4 py-3">
                    <Link href={`/${product.category.slug}/${product.tag.slug}/${product.slug}`} className="lg:text-lg text-base font-light">
                        {product.name}
                    </Link>
                    <Link href={`/${product.category.slug}/${product.tag.slug}`} className="text-sm font-medium">
                        {product.tag.name}
                    </Link>
                </div>
                <div className="lg:text-lg text-base text-right font-semibold text-red-500 px-4 py-3">
                    Rp.{numberFormat(product.price)}
                </div>
            </div>
        </div>
    );
}
