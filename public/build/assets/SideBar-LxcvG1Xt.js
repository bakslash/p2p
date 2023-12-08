import{r as l,R as e}from"../.vite/manifest.json";l.createContext();const o=({menuData:i,user:n})=>{const[t,c]=l.useState(null),s=a=>{c(t===a?null:a)};return e.createElement("div",{className:"vertical-menu"},e.createElement("div",{className:"user-info"},e.createElement("div",{className:"user-avatar"},n&&e.createElement("img",{src:n.avatar_url,alt:""})),n&&e.createElement("div",{className:"user-name"},n.name)),i.menu.map(a=>e.createElement("div",{key:a.slug,className:`menu-item ${t===a.slug?"active":""}`},e.createElement("div",{className:"menu-link",onClick:()=>s(a.slug)},e.createElement("i",{className:a.icon}),e.createElement("span",null,a.name)),a.submenu&&t===a.slug&&e.createElement("div",{className:"submenu"},a.submenu.map(r=>e.createElement("a",{key:r.slug,href:r.url,className:"submenu-link"},r.name))))),e.createElement("style",null,`
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
        `))},m=o;export{m as S};
