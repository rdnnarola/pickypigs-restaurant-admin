import React from "react";
import img_1 from "../../assets/images/img_1.PNG"
import './SecondOverlapedCardComp.scss';

const SecondOverlapedCardComp = (props) => {
    return (
        <>
            <div className="row workus-wrapper position-relative justify-content-start align-items-center">
                <div className="rightimg-subwrapper">
                    <img src={props.img} className="img-fluid w-100" alt="icon" />
                </div>
                {props.detail.isArray?
                <div className={`shadow_1 rightlist-subwrapper ${props.workslist}`}>
                    <h3 className="brandon-Bold mb-3">{props.heading}</h3>
                    <ul className="list-wrapper pl-0 mb-0">
                        {props.detail && props.detail.map((data, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <li className="pl-3 position-relative mb-3 f-15">{data}</li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>
                :
                <div className={`shadow_1 rightlist-subwrapper ${props.workslist}`}>
                    <h3 className="brandon-Bold mb-3">{props.heading}</h3>
                    <div className="list-wrapper pl-0 mb-0">
                        <p className="pl-3 position-relative mb-3 f-15">{props.detail}</p>
                    </div>
                </div>
                }
            </div>
            <br />  
            <br />
            <br />  
            <br />
        </>
    )
}

export default SecondOverlapedCardComp;