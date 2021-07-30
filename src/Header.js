import React, {useState} from 'react';
import "./header.css";


const Header = ()=>{
   
    return (
        <div className="header">
            <div className="header__title">
            <img width="180" src="https://dmuh4ir5y2w98.cloudfront.net/assets/logos/logo-dark.png" />
            </div>
            <div className="header__content">
                <ul className="header__ul">
                    <li><a href="#" className="header__ul__login">Login</a></li>
                    <li><a href="#"  className="header__ul__signup">Signup</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;