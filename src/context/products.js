// products context
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from '../components/Data/Data';
import { featuredProducts, flattenProducts, paginate } from '../utils/helpers';
import { url } from '../utils/URL';


export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

    const [sorted, setSorted] = useState([]);
    const [page, setPage] = useState(0);
    const [filters, setFilters] = useState({
        search: "",
        category: "all",
        shipping: false,
        price: "all"
    })

    useEffect(() => {
        setLoading(true);
        axios.get(`${url}/products`).then(response => {
            const featured = featuredProducts(flattenProducts(response.data));
            const products = flattenProducts(response.data);
            setSorted(paginate(products));
            setProducts(products);
            setFeatured(featured);
            setLoading(false);
        });
        return () => { };
    }, [])

    useEffect(() => {
        let newProducts = [...products].sort((a, b) => a.price - b.price);
        const { search, category, shipping, price } = filters;
        if (category !== "all") {
            newProducts = newProducts.filter(item => item.category === category);
        }
        if (shipping !== false) {
            newProducts = newProducts.filter(item => item.free_shipping === shipping)
        }

        if (search !== '') {
            newProducts = newProducts.filter(item => {
                let title = item.title.toLowerCase().trim();
                return title.startsWith(search) ? item : null;
            })
        }

        if (price !== 'all') {
            newProducts = newProducts.filter(item => {
                if (price === 0) {
                    return item.price < 200
                } else if (price === 200) {
                    return item.price > 200 && item.price < 300
                } else if (price === 300) {
                    return item.price > 300 && item.price < 400
                } else if (price === 400) {
                    return item.price > 400 && item.price < 500
                }
                else if (price === 500) {
                    return item.price > 500 && item.price < 600
                } else {
                    return item.price > 600
                }
            })
        }

        setPage(0);
        setSorted(paginate(newProducts));
    }, [filters, products])

    const changePage = (index) => {
        setPage(index);
    }

    const updateFilters = event => {
        const type = event.target.type;
        const filter = event.target.name;
        const value = event.target.value;
        let filterValue;
        if (type === "checkbox") {
            filterValue = event.target.checked;
        } else if (type === "radio") {
            value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
        } else {
            filterValue = value;
        }

        setFilters({ ...filters, [filter]: filterValue });
    };

    return <ProductContext.Provider value=
        {{
            loading,
            products,
            featured,
            sorted,
            page,
            filters,
            changePage,
            updateFilters,
        }}>
        {children}
    </ProductContext.Provider>
}