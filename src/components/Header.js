import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/techlogo2.png';
import { UserContext } from '../context/user';
import CartLink from './Cart/CartLink';
import LoginLink from './LoginLink';

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="header">
        <img src={logo} alt="" className="logo" />
        <nav>
          <ul>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Product</Link>
              </li>
              {user.token && (
                <Link to="/checkout">checkout</Link>
              )}
            </div>
            <div>
              <LoginLink></LoginLink>
              <CartLink></CartLink>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;