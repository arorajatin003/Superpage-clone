import React, { useEffect, useState } from "react"
import Typewriter from "typewriter-effect";
import Typist from "react-typist";
import "./getPage.css"

const WaveDown = ((props)=>{
    const [run, setRun]=useState(1);
    useEffect(()=>{
        setRun(1);
        // if(run){
        //     setTimeout(()=>{setRun(false)},5000)
        //     console.log(run);
        // }else{
        //     setTimeout(()=>{setRun(true)},5000)
        //     console.log(run);
        // }
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
                    (
                    <Typist avgTypingDelay={50} onTypingDone={() => setRun(0)}>
                        <span>guruji</span>
                        <Typist.Backspace count={20} delay={800} />
                        <span>pewdie</span>
                        <Typist.Backspace count={20} delay={800} />
                        <span>musk</span>
                        <Typist.Backspace count={20} delay={800} />
                    </Typist>)
                    :
                    "" }
                
                </div>
                <div>
                    <a href="#" className="getPage__link">GET STARTED, ITS FREE</a>
                </div>
            </div>
        </div>
    )
});

export default WaveDown