import { YouTube } from '@material-ui/icons';
import React from 'react';
import './profile.css';

const Profile = ((props)=>{

    return(
        <div className='profile'>
            <div className='profile_username'>
                <p className='profile_usernameStarting'>superpage.to/</p>
                <p className='profile_usernameEnding'>{props.profile[0]}</p>
            </div>
            <div className='profile_followers'>
                <YouTube></YouTube>
                {props.profile[1]}
            </div>
            <div className='profile_image' >
                <img src={props.profile[2]} width="300" />
            </div>
        </div>
    )
})

export default Profile
