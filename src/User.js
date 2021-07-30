import React from 'react';
import "./user.css";

const User = ((props)=>{

    return(
        <div className="user_">
            <img src={props.img} className="image"  />
            <div className="name">
                {props.name}
            </div>
            <div className="">
                {props.work}
            </div>
        </div>
    )
})

export default User