import { useEffect, useState } from "react";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(API)
        const data = await response.json()
            setProducts(data)
    }
        fetchData()
    }, [])
    return products
}

export default useGetProducts