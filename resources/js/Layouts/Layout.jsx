import React from 'react';
import VerticalMenu from '../Components/VertivalMenu';
import Navbar from '@/Components/NavBar';
import MenuNav from '../verticalMenu.json';
// Import Footer if needed
// import Footer from './Footer';

const LayoutWrapper = ({ isMenu, isNavbar, isFooter, isFlex, container, children }) => {
  const menuData = MenuNav;

  return (
    <div className="layout-wrapper layout-content-navbar">
      {isMenu && <VerticalMenu menuData={menuData} />}
      {/* {isNavbar && <Navbar menuData={menuData} />} */}

      <div className="layout-container">
        <div className="content-wrapper">
          {isFlex ? (
            <div className={`${container} d-flex align-items-stretch flex-grow-1 p-0`}>
              {children}
            </div>
          ) : (
            <div className={`${container} flex-grow-1 container-p-y`}>
              {children}
            </div>
          )}
        </div>

        {isFooter && <Footer />}
        <div className="content-backdrop fade"></div>
      </div>

      {isMenu && <div className="layout-overlay layout-menu-toggle"></div>}
      <div className="drag-target"></div>
    </div>
  );
};

export default LayoutWrapper;
