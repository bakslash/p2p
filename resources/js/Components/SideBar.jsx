import React, { useState } from 'react';

const Sidebar = ({ menuData, user }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuClick = (slug) => {
    setOpenSubmenu(openSubmenu === slug ? null : slug);
  };

  return (
    <div className="vertical-menu">
      <div className="user-info">
        <div className="user-avatar">
          {user && (
            <img src={user.avatar_url} alt="" />
          )}
        </div>
        {user && (

          <div className="user-name">{user.name}</div>
        )}
      </div>
      
      {menuData.menu.map((menuItem) => (
        <div key={menuItem.slug} className={`menu-item ${openSubmenu === menuItem.slug ? 'active' : ''}`}>
          <div className="menu-link" onClick={() => handleSubmenuClick(menuItem.slug)}>
            <i className={menuItem.icon}></i>
            <span>{menuItem.name}</span>
          </div>

          {menuItem.submenu && openSubmenu === menuItem.slug && (
            <div className="submenu">
              {menuItem.submenu.map((subMenuItem) => (
                <a key={subMenuItem.slug} href={subMenuItem.url} className="submenu-link">
                  {subMenuItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
      <style>
        {`
          .vertical-menu {
            width: 240px;
            background-color: #444444;
            color:#eee;
            
          }

          .user-info {
            text-align: center;
            height:180px;
            background-color: #5FBBCE;
            align-items: center;
          }

          .user-avatar {
            width: 60px; /* Adjust as needed */
            height: 60px; /* Adjust as needed */
            border-radius: 50%;
            overflow: hidden;
            padding-top: 10px;
            margin-bottom: 10px;
            margin-left: 85px;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center; /* Center horizontally */
            
          }
          
          .user-avatar img {
            
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%; /* Ensure the image is also circular */
          }

          .user-name {
            color: #eee;
          }

          .menu-item {
            padding: 10px;
            cursor: pointer;
          }

          .menu-link {
            display: flex;
            align-items: center;
          }

          .submenu {
            margin-top: 5px;
          }

          .submenu-link {
            display: block;
            padding: 8px;
            color: #eee;
            text-decoration: none;
            transition: background-color 0.3s;
          }

          .submenu-link:hover {
            background-color: #666666;
          }

          .active {
            background-color: #666666;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
