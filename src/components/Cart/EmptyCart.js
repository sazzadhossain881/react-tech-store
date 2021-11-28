import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
      <section className="empty-cart section">
        <h2>empty cart...</h2>
        <Link to="/products" className="btn btn-primary">fill it</Link>
      </section>
    </div>
  );
};

export default EmptyCart;