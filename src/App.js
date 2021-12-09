import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/Alert';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import ScrollButton from './components/ScrollButton';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Alert></Alert>
        <ScrollButton></ScrollButton>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/products/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;