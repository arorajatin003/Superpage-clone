import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect";
import "./getPage.css"

const WaveDown = ((props)=>{
    const [run, setRun]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{setRun(true)},1000)
    },[run])
    return(
        <div className="getPage">
            <div className="getPage__content">
                <div className="getPage__title">
                A beautiful page in one minute
                </div>
                <div className="getPage__text">
                superpage.to/
                {run ? 
                    <Typewriter
                    loop='true'
                    onInit={(typewriter)=> {typewriter
                            .typeString("guruji")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("pewdie")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("musk")
                            .start();
                        }}
                    />
                    :
                    <Typewriter
                onInit={(typewriter)=> {typewriter
                        .typeString("guruji")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("pewdie")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("musk")
                        .start();
                    }}
                /> }
                
                </div>
                <div>
                    <a href="#" className="getPage__link">GET STARTED, ITS FREE</a>
                </div>
            </div>
        </div>
    )
});

export default WaveDown