import React, { useContext } from 'react';
import Loading from '../components/Loading';
import Filters from '../components/Products/Filters';
import PageProducts from '../components/Products/PageProducts';
import ProductList from '../components/Products/ProductList';
import { ProductContext } from '../context/products';

const Products = () => {
  const { loading, sorted } = useContext(ProductContext);
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Filters></Filters>
      <PageProducts></PageProducts>
    </div>
  );
};

export default Products;