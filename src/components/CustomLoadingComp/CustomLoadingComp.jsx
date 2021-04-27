import React from "react";
import './CustomLoadingComp.scss';
import logo_loader from "../../assets/images/logo-white.svg"

const CustomLoadingComp=()=>{
    return(
        <>
        <section className="customLoadingComp-container ">
            <div className=" d-flex flex-column h-100 loader-mainwrapper d-block align-items-center justify-content-center">
                    <div className="loader">
                        <div className="loader-logo ml-auto mr-auto">
                            <img src={logo_loader} className="img-fluid" loading="lazy" alt="picky_pigs_icon"/>
                        </div>
                        <div className="text-center mt-3">
                            <p className="text-white">Fuss Free Food</p>
                        </div>
                        <div className="loading d-flex">
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>  
                    </div>
                </div>
        </section>
        </>
    )
}

export default CustomLoadingComp;