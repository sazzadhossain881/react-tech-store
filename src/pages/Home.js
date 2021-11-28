import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/Products/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <Hero>
        <Link to="/products" className="btn btn-primary bn-hero">our products</Link>
      </Hero>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default Home;