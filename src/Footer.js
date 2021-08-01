import React, {useState} from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import "./footer.css";
import { IconButton } from '@material-ui/core';


const Footer = ()=>{
   
    return (
        <div className="footer">
            <div className="footer__links">
                <ul className="footer__ul">
                    <li><a href="#" className="footer__ul__link">Help</a></li>
                    <li><a href="#"  className="footer__ul__link">Terms</a></li>
                    <li><a href="#" className="footer__ul__link">Privacy</a></li>
                    <li><a href="#"  className="footer__ul__link">Contract</a></li>
                    <li><a href="#" className="footer__ul__link">Blog</a></li>
                </ul>
            </div>
            <div className="footer__icons">
                <ul className="footer__ul__icons">
                    <IconButton>
                        <InstagramIcon className="footer__icon" style={{ fontSize: 25 }}/>  
                    </IconButton>
                    <IconButton>
                        <TwitterIcon className="footer__icon" style={{ fontSize: 25 }}/>
                    </IconButton>
                    <IconButton>
                        <HorizontalSplitIcon className="footer__icon" style={{ fontSize: 25 }}/>
                    </IconButton>
                </ul>
            </div>
        </div>
    )
}


export default Footer;