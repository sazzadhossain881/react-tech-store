import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/user';

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Route {...rest} render={() => { return user.token ? children : <Redirect to="/login"></Redirect> }}></Route>
    </div>
  );
};

export default PrivateRoute;