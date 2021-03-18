import React, { useEffect, useState } from 'react'
import pattern_img from "../../assets/images/pattern.png"
import OurVisionComponent from '../../components/OurVisionComponent/OurVisionComponent';
import "./TermsAndConditionPage.scss"
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";

const bullet_point=[
    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    "Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "At vero eos et accusam et justo duo dolores et ea rebum.",
    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    "Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "At vero eos et accusam et justo duo dolores et ea rebum.",
    "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    "At vero eos et accusam et justo duo dolores et ea rebum.",
]

function TermsAndConditionPage() {
  
    return (
        <>
        <LoginPageHeader />
        <div className="terms_page_container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           {/* Terms Page Content Start */}
           <section className="terms-section">
                <div className="container">
                    <h1 className="header-txt text-center brandon-Bold text-uppercase">
                        Heading
                    </h1>
                    <p className="f-15 text-center">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        <br /> nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    </p>

                    <div className="terms-wrapper mt-5 mb-5">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="f-15 font-weight-bold">
                                    Terms and Conditions
                                </p>
                                <hr />

                                <p className="txt-lightgray f-15 mt-4">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </p>

                                <p className="txt-lightgray f-15">
                                    Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </p>

                                <p className="f-15 mb-2 font-weight-bold">
                                    Bullet points here:
                                </p>
                                <ul className="pl-3">
                                    {bullet_point&&bullet_point.map((data,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                 <li className="txt-lightgray f-15">
                                                    <p>{data}</p>
                                                </li>
                                            </React.Fragment>
                                        )
                                    })}
                                </ul>
                                <p className="txt-lightgray f-15 mt-4">
                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                </p>
                                <p className="txt-lightgray f-15 mt-4">
                                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="terms-wrapper mt-5 mb-5">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="f-15 font-weight-bold">
                                    Privacy Policy
                                </p>
                                <hr />

                                <p className="txt-lightgray f-15 mt-4">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </p>

                                <p className="txt-lightgray f-15">
                                    Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </p>

                                <p className="f-15 mb-2 font-weight-bold">
                                    Bullet points here:
                                </p>
                                <ul className="pl-3">
                                    {bullet_point&&bullet_point.map((data,index)=>{
                                        return(
                                            <React.Fragment key={index}>
                                                 <li className="txt-lightgray f-15">
                                                    <p>{data}</p>
                                                </li>
                                            </React.Fragment>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Terms Page Content Start */}

            
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="patternimg-wrapper">
                                <img src={pattern_img} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <OurVisionComponent/>
            </section>
        </div>
        <LoginPageFooter />
        </>
    )
}

export default TermsAndConditionPage;
