import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ image, id, title, price }) => {
  return (
    <div>
      <article className="product">
        <div className="img-container">
          <img style={{ width: "200px", height: "120px" }} src={image} alt="" />
          <Link to={`/products/${id}`} className="btn btn-primary product-link">details</Link>
        </div>
        <div className="product-footer">
          <p className="product-title">{title}</p>
          <p className="product-price">${price}</p>
        </div>
      </article>
    </div>
  );
};

export default Product;

