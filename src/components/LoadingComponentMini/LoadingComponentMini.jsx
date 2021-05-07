import React from "react";
import './LoadingComponentMini.scss'

 const LoadingComponentMini =()=>{
    return(
        <React.Fragment>
            <div className="LoadingComponentMini-comp">
                <div className="spinner-border m-3" role="status"></div>
            </div>
        </React.Fragment>
    )
}

export default LoadingComponentMini;