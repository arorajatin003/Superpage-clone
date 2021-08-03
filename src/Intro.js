import React, { useState } from 'react';
import "./intro.css";
import Profile from './Profile';

const Intro =(()=>{
    const [run,setRun] = useState(0);

    const userProfile = [["solarminerindia","49.9K","https://superpage.to/home/solarminer.jpg"],
                        ['thefashionverge','117k','https://superpage.to/home/ganesh.jpg'],
                        ["AstamAkhilVlogs","29.8k","https://superpage.to/home/akhil.jpg"]];
    return(
        <div className="intro">
            <div className="intro__content">
                <h1>Power up your Link in Bio.</h1>
                <p>One page to increase engagement and revenue on social media</p>
                <a href='#' className="intro__conttentLink">GET STARTED, IT'S FREE</a>
            </div>
            <div className="intro__image">
                <Profile profile={userProfile[run]}></Profile>
            </div>
            <div className='intro_buttons'>
                <button className='intro_button' onClick={(()=>{setRun(0)})}>
                    <img src='https://dmuh4ir5y2w98.cloudfront.net/profile-pics/solarminerindia/unnamed.png?w=200&h=200' />
                </button>
                <button className='intro_button' onClick={(()=>{setRun(1)})}>
                    <img src='https://dmuh4ir5y2w98.cloudfront.net/profile-pics/thefashionverge/PSX_20200922_191547-01543974127.jpeg?w=200&h=200' />
                </button>
                <button className='intro_button' onClick={(()=>{setRun(2)})}>
                    <img src='https://dmuh4ir5y2w98.cloudfront.net/profile-pics/AstamAkhilVlogs/IMG_20210523_202054_637.jpg?w=200&h=200' />
                </button>
            </div>
        </div>
    )
})

export default Intro;