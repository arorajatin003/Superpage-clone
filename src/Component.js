import React from 'react';
import "./component.css";

const Component =((props)=>{

    return(
        <div className={`component ${props.name}`}>
            <div className="component__content">
                <h1>{props.uses[0]}</h1>
                <p>{props.uses[1]}</p>
            </div>
            <div className="component__image">
                <img src={props.img} width="480" />
            </div>
        </div>
    )
})

export default Component;