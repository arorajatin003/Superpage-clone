import React from "react";
import WaveUP from './WaveUp';
import WaveDown from './WaveDown';
import Component from './Component';


const Uses = (()=>{
    const uses=["One page for all your links & content",
              "Connect audiences to all of your content with just one link — videos, social accounts, podcasts, blogs and everywhere you are online."
            ]
    return(
        <div className='uses'>
            <WaveUP></WaveUP>
            <Component name='uses' uses={uses} img="https://superpage.to/home/one-page-for-all-links.png"></Component>
            <WaveDown color="#d0ddeecc"></WaveDown>

        </div>
    )
})
export default Uses;