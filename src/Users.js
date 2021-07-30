import React from 'react';
import User from './User';
import "./users.css";

const Users = (()=>{

    return(
        <div className="users">
            <div className="title">
                Who's using Superpage
            </div>
            <div className="user">
                <User img="https://dmuh4ir5y2w98.cloudfront.net/profile-pics/saptarshipr/profile.jpg?w=200&h=200" name="Saptarshi Prakash" work="Design Coach, Youtuber"></User>
                <User img="https://dmuh4ir5y2w98.cloudfront.net/profile-pics/AstamAkhilVlogs/IMG_20210523_202054_637.jpg?w=200&h=200" name="Astam Akhil Vlogs" work="Vlogger"></User>
                <User img="https://dmuh4ir5y2w98.cloudfront.net/profile-pics/deepkakkad/Untitled%20design%20%281%29.png?w=200&h=200" name="Deep Kakkad" work="Entrepreneur, Marketer"></User>
                <User img="https://dmuh4ir5y2w98.cloudfront.net/profile-pics/sharadharjai/Sharad%20Harjai.jpg?w=200&h=200" name="Sharad Harjai" work="Startup Consultant"></User>
                <User img="https://dmuh4ir5y2w98.cloudfront.net/profile-pics/davidjohnson/profile.jpg?w=200&h=200" name="DIY.Engineering" work="Youtuber"></User>
                <User img="https://dmuh4ir5y2w98.cloudfront.net/profile-pics/thefashionverge/PSX_20200922_191547-01543974127.jpeg?w=200&h=200" name="Fashion Verge" work="Fashion, Youtber"></User>

            </div>
        </div>
    )
})

export default Users