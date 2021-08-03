// akhil.jpg
import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';
import './profile.css'

const Profile = ((props)=>{
    console.log(props.profile);
    return(
        <div className="profile"> 
            <div className="profile_username">
                <p className='profile_usernameStarting'>{props.profile[0]}</p>
                <p className='profile_usernameEnding'>{props.profile[1]}</p>
            </div>
            <div className="profile_followers">
            <YouTubeIcon></YouTubeIcon>
            {props.profile[2]}
            </div>
            <div className='profile_image'>
            <img src={props.profile[3]} width="300" />
            </div>
        </div>
    )
})

export default Profile;