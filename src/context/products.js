// products context
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from '../components/Data/Data';
import { featuredProducts, flattenProducts } from '../utils/helpers';
import { url } from '../utils/URL';


export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`${url}/products`).then(response => {
            const featured = featuredProducts(flattenProducts(response.data));
            const products = flattenProducts(response.data);
            setProducts(products);
            setFeatured(featured);
            setLoading(false);
        });
        return () => { };
    }, [])

    return <ProductContext.Provider value={{ loading, products, featured }}>
        {children}
    </ProductContext.Provider>
}