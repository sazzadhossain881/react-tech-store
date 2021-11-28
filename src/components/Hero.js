import React from 'react';

const Hero = ({ children }) => {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <p>embrace your choices we do</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;