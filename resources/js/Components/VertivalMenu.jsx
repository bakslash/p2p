import React from 'react';

const VerticalMenu = ({ menuData }) => {
  console.log('m',menuData);
  return (
    <div className="vertical-menu">
      {menuData.map((menuItem) => (
        <div key={menuItem.slug} className={`menu-item ${menuItem.active ? 'active' : ''}`}>
          <a href={menuItem.url} className="menu-link">
            <i className={menuItem.icon}></i>
            <span>{menuItem.name}</span>
          </a>

          {menuItem.submenu && (
            <div className={`submenu ${menuItem.submenu.isOpen ? 'open' : ''}`}>
              {menuItem.submenu.map((subMenuItem) => (
                <a key={subMenuItem.slug} href={subMenuItem.url} className="submenu-link">
                  {subMenuItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalMenu;
