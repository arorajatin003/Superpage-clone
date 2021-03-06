import React from "react"
import "./App.css"

const WaveUP = ((props)=>{

    return(
        <svg className="waveUP" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={props.color} fill-opacity="1" d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,250.7C840,267,960,277,1080,261.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    )
});

export default WaveUP