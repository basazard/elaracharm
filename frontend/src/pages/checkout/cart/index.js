import Button from "@/components/Button";
import Input from "@/components/Input";
import AppLayout from "@/components/Layouts/AppLayout";
import Table from "@/components/Table";
import { useAuth } from "@/hooks/useAuth";
import useCartCount from "@/hooks/useCartCount";
import axios from "@/libs/axios";
import { numberFormat } from "@/libs/helper";
import React, { useState } from "react";
import useSWR from "swr";

export default function ShowOrder() {
    const { user, isLoading } = useAuth({ middleware: "auth" });

    const { data: orders, error, mutate } = useSWR("/api/carts", () => axios.get("/api/carts").then((response) => response.data.data));

    const [quantity, setQuantity] = useState(0);

    const { refreshCartCount } = useCartCount();

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const deleteOrder = async (id) => {
        await axios.delete(`/api/carts/${id}`);
        refreshCartCount();
        mutate();
    };

    const editQuantity = async (id, newQuantity) => {
        await axios.put(`/api/carts/edit-quantity/${id}`, { quantity: newQuantity });
        mutate();
    };

    const checkoutHandler = async () => {
        const response = await axios.post(`api/orders/create`)
        window.open(`${response.data.redirect_url}`);
    }

    if (isLoading || !user) {
        return <>Loading...</>;
    }
    return (
        <AppLayout title="Your Cart's">
            <div className="flex justify-center mt-2">
                <div className="w-full max-w-screen p-10">
                    <Table>
                        <Table.Thead>
                            <tr>
                                <Table.Th>Product</Table.Th>
                                <Table.Th>Prize</Table.Th>
                                <Table.Th>Quantity</Table.Th>
                                <Table.Th>Total</Table.Th>
                                <Table.Th></Table.Th>
                            </tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {orders ? (
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <Table.Td>
                                            <div className="flex items-center gap-5">
                                                <img src={order.product.picture} className="h-20" />
                                                <span>{order.product.name}</span>
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="text-center">IDR {numberFormat(order.product.price)}</Table.Td>
                                        <Table.Td className="text-center">
                                            <div className="space-x-3">
                                                <button
                                                    onClick={() => editQuantity(order.id, order.quantity - 1)}
                                                    className="text-lg font-medium px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                                                    -
                                                </button>
                                                <Input
                                                    value={order.quantity}
                                                    type="number"
                                                    className="text-center"
                                                    onChange={handleQuantityChange}
                                                />
                                                <button
                                                    onClick={() => editQuantity(order.id, order.quantity + 1)}
                                                    className="text-lg font-medium px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm transition duration-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
                                                    +
                                                </button>
                                            </div>
                                        </Table.Td>
                                        <Table.Td className="text-center">IDR {numberFormat(order.price)}</Table.Td>
                                        <Table.Td>
                                            <button onClick={() => deleteOrder(order.id)}>
                                                {/* prettier ignore */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-5 h-5">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                        </Table.Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Table.Empty colSpan="5">Product not selected yet.</Table.Empty>
                                </tr>
                            )}
                            {orders ? (
                                <tr>
                                    <td></td>
                                    <Table.Td className="text-center font-medium">Total</Table.Td>
                                    <Table.Td className="text-center font-medium">{orders.reduce((acc, order) => acc + order.quantity, 0)}</Table.Td>
                                    <Table.Td className="text-center font-medium">
                                        IDR {numberFormat(orders.reduce((acc, order) => acc + order.price, 0))}
                                    </Table.Td>
                                </tr>
                            ) : (
                                ""
                            )}
                        </Table.Tbody>
                    </Table>
                    <div className="flex justify-between mt-10">
                        <Button>Back Shopping</Button>
                        <Button onClick={() => checkoutHandler()}>Checkout</Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
