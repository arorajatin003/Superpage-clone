import React from "react";
import FeatureBox from "./FeatureBox";
import "./feature.css"

const Fearures = (()=>{
    const features=[
        ["Mini-website","A beautiful page for all your links & content"],
        ["Payment Integration","Accept payments easily from one link & increase conversions"],
        ["Digital Store","Sell e-books, photos, videos, art files etc.."],
        ["Video calls & Chat","ell Consultation seamlessly with inbuilt Calendar & Google Meet"],
        ["Services","List your services, accept payments - Sell anything"],
        ["Donations","Let followers support you with easy one-time payments"]
    ]
    return(
        <div className="feature">
            <div className="text">
                <h1>The all-in-one platform for creators</h1>
                <p>
                    Forget about having to use 10+ tools or hiring a pro to stitch them together. Superpage is the only page you need to showcase & monetise your passion
                </p>
            </div>
            <div className="features">
                <FeatureBox title={features[0]}></FeatureBox>
                <FeatureBox title={features[1]}></FeatureBox>
                <FeatureBox title={features[2]}></FeatureBox>
                <FeatureBox title={features[3]}></FeatureBox>
                <FeatureBox title={features[4]}></FeatureBox>
                <FeatureBox title={features[5]}></FeatureBox>
                
            </div>
            <div>
                <img src="https://superpage.to/home/payments.png" />
            </div>
        </div>
    )        
})

export default Fearures