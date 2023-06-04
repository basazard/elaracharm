import axios from "@/libs/axios";
import useSWR, { mutate } from 'swr';

const fetchCartCount = async () => {
    const response = await axios.get("/api/carts/cart-count");
    return response.data;
};

const useCartCount = () => {
    const { data, error } = useSWR("/api/carts/cart-count", fetchCartCount);

    const refreshCartCount = () => {
        mutate("/api/carts/cart-count");
    };

    return {
        cartCount: data,
        isLoading: !error && !data,
        isError: error,
        refreshCartCount,
    };
};

export default useCartCount;
