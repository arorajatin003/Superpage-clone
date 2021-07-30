import React, { useState } from "react"
import "./getPage.css"

const WaveDown = ((props)=>{
    const [to, setTo] = useState("")
    return(
        <div className="getPage">
            <div className="title">
            A beautiful page in one minute
            </div>
            <div className="text">
            superpage.to/{to}
            </div>
            <div className="link">
                <a href="#">GET STARTED, ITS FREE</a>
            </div>
        </div>
    )
});

export default WaveDown