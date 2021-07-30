import React from 'react';
import "./intro.css";

const Intro =(()=>{

    return(
        <div className="intro">
            <div className="intro__content">
                <h1>Power up your Link in Bio.</h1>
                <p>One page to increase engagement and revenue on social media</p>
                <a href='#' className="intro__conttentLink">GET STARTED, IT'S FREE</a>
            </div>
            <div className="intro__image">
                <img src="https://superpage.to/home/one-page-for-all-links.png" width="480" />
            </div>
        </div>
    )
})

export default Intro;