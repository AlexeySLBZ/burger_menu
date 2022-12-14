import React from 'react';
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = ({header, items, active, setActive}) => {
  return (
    <div className={active?"menu active":"menu"} onClick={()=>setActive(false)}>
      <div className="blur"/>
      <div className="menu__content" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
          {items.map(item=>
            <li>
              <Link to={item.to}>{item.value}</Link>
              <i className="material-icons">{item.icon}</i>
            </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
