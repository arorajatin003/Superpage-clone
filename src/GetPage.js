import React, { useEffect, useState } from "react"
import Typist from "react-typist";
import "./getPage.css"

const WaveDown = ((props)=>{
    const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
    return(
        <div className="getPage">
            <div className="getPage__content">
                <div className="getPage__title">
                A beautiful page in one minute
                </div>
                <div className="getPage__text">
                superpage.to/
                {count ? (
                    <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                    <span>guruji</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span>musk</span>
                    <Typist.Backspace count={20} delay={800} />
                    <span>pewdie</span>
                    <Typist.Backspace count={20} delay={800} />
                    </Typist>
                ) : (
                ""
                )}
                </div>
                <div>
                    <a href="#" className="getPage__link">GET STARTED, ITS FREE</a>
                </div>
            </div>
        </div>
    )
});

export default WaveDown