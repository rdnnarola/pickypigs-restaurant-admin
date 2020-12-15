import React from "react";
import './FirstOverlapedCardComp.scss';

const FirstOverlapedCardComp=(props)=>{
    return(
        <>
        <section className="first_overlap_container">
            <div className="row parent">
                <div className=" shadow_1 child-1">
                    <h3>{props.heading}</h3>
                    <ul>
                        {props.detail&& props.detail.map((data,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <li>{data}</li>
                                </React.Fragment>
                            )
                        })}
                    </ul>
                </div>

                <div className="shadow_1 child-2 ">
                    <img src={props.img}  className="img-fluid w-100" alt="icon"  />
                </div>
            </div>
        </section>
        </>
    )
}

export default FirstOverlapedCardComp;