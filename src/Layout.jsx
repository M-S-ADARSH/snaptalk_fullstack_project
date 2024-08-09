// HomeLayout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer'; // Adjust the path as necessary

const Layout = ({ children }) => {
  const location = useLocation();
  const pathsWithFooter = ['/', '/grammar','/sentiment']; // Add paths where you want the footer to appear

  return (
    <div className="layout">
      {children}
      {pathsWithFooter.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default Layout;
