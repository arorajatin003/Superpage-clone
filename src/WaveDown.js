import React from "react"
import "./App.css"

const WaveDown = ((props)=>{

    return(
        <svg className="waveDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={props.color} fill-opacity="1" d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,85.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    )
});

export default WaveDown