import React, { useState } from 'react';
import "./intro.css";
import Profile from './Profile';

const Intro =(()=>{
    const [send ,setSend] = useState(0);
    const [run, setRun] = useState(true);
    const userProfile= [['superpage.to/','thefashionverge','117k','https://superpage.to/home/ganesh.jpg'],
                        ['superpage.to/','solarminerindia','49.8k','https://superpage.to/home/solarminer.jpg'],
                        ['superpage.to/','AstamAkhilVlogs','29.2k','https://superpage.to/home/akhil.jpg']];
    
    setInterval(() => {
        if(run)
            setSend((send+1)%3)
    }, 10000);

    return(
        <div className="intro">
            <div className="intro__content">
                <h1>Power up your Link in Bio.</h1>
                <p>One page to increase engagement and revenue on social media</p>
                <a href='#' className="intro__conttentLink">GET STARTED, IT'S FREE</a>
            </div>
            <div className="intro__image">
                <Profile profile={userProfile[send]}></Profile>
            </div>
            <div className='intro_navigate'>
                <button className='intro_navButton' onClick={(()=>{setSend(0); setRun(false);})}>
                    <img src='https://dmuh4ir5y2w98.cloudfront.net/profile-pics/thefashionverge/PSX_20200922_191547-01543974127.jpeg?w=100&h=100'></img>
                </button>
                <button className='intro_navButton' onClick={(()=>{setSend(1); setRun(false);})}>
                    <img src='https://dmuh4ir5y2w98.cloudfront.net/profile-pics/solarminerindia/unnamed.png?w=100&h=100'></img>
                </button>
                <button className='intro_navButton' onClick={(()=>{setSend(2); setRun(false);})}>
                    <img src='https://dmuh4ir5y2w98.cloudfront.net/profile-pics/AstamAkhilVlogs/IMG_20210523_202054_637.jpg?w=100&h=100'></img>
                </button>
            </div>
        </div>
    )
})

export default Intro;