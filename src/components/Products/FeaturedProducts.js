import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';
import Loading from '../Loading';
import ProductList from './ProductList';

const FeaturedProducts = () => {
  const { loading, featured } = useContext(ProductContext);
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <ProductList title="featured product" products={featured}></ProductList>
    </div>
  );
};

export default FeaturedProducts;