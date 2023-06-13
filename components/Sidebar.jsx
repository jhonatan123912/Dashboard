import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:'/home',
            name:'Home'
        },
        {
            path:'/statistik',
            name:'Statistik'
        },
        {
            path:'/user',
            name:'User'
        },
        {
            path:'/cms',
            name:'CMS'
        }   
    ]
    return (
        <div className="container">
            <div className="sidebar">
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="NavLink" activeClassName="active">
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
              <main>{children}</main>  
        </div>
    );
};

export default Sidebar;