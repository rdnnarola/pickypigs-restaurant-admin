import React from "react";
import img_1 from "../../assets/images/img_1.PNG"
import './SecondOverlapedCardComp.scss';

const SecondOverlapedCardComp=(props)=>{
    return(
        <>
        <section className="second_overlap_container">
            <div className="row parent">
                <div className=" shadow_1 child-1">
                    <img src={props.img}  className="img-fluid w-100" alt="icon" />
                </div>

                <div className="shadow_1 child-2 ">
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
            </div>
        </section>
        </>
    )
}

export default SecondOverlapedCardComp;