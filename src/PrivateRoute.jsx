import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Simulating an authentication check
const isAuthenticated = () => {
  // Replace this with your actual authentication check logic
  return localStorage.getItem('isAuthenticated') === 'true';
};

const PrivateRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
