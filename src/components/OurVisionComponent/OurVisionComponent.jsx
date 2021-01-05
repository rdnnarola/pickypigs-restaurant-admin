import React from "react";
import pattern from "../../assets/images/pattern.png"
import { Button } from 'react-bootstrap';
import ourmisssion_icon1 from "../../assets/images/ourmission-icon1.svg"
import ourmisssion_icon2 from "../../assets/images/ourmission-icon2.svg"
import ourmisssion_icon3 from "../../assets/images/ourmission-icon3.svg"
import ourmisssion_icon4 from "../../assets/images/ourmission-icon4.svg"
import integrate from "../../assets/images/Integrate.svg"
import showcasemenu from "../../assets/images/Showcase-Menu.svg"
import { Formik, Field, Form } from 'formik';

import './OurVisionComponent.scss';
import { TextareaAutosize } from "@material-ui/core";

const OurVisionComponent = () => {

    return (
        <>
            {/* Would you like to join us? start content */}
            <section className="ourmission-section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 pl-0 pr-0">
                            <div className="ourmission-wrapper">
                                <h1 className="sectionhead-txt text-uppercase text-white brandon-Bold">Our Mission </h1>
                                <p className="ourmission-subtxt f-15 line-height-1_75 text-white">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein <br className="d-lg-block d-none" /> Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die</p>
                                <div className="row mt-4 pt-2 jusitify-content-betwen">
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon1} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">To illuminate as much human error as possible.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon2} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">To enhance the entire dining experience from beginning to end.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon3} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">Fuss free food no matter what your needs and requirements might be.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 ourmission-main mb-2">
                                        <div className="ourmission-block">
                                            <div className="ourmission-icon d-flex align-items-center justify-content-center mb-4">
                                                <img src={ourmisssion_icon4} className="img-fluid" />
                                            </div>
                                            <div className="ourmission-info pt-1">
                                                <p className="f-15 mb-1">To support both the restaurant,the team and the guest in having full trust and transparency in the ordering process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-12 pl-0 pr-0">
                            <h1 className="sectionhead-txt text-uppercase text-white brandon-Bold">WOULD YOU LIKE TO JOIN US? </h1>
                            <p className="join-subtxt f-15 line-height-1_75 text-white mb-4 pb-2">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein <br className="d-lg-block d-none" /> Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die</p>
                        </div>
                    </div>
                    <div className="row">
                        <Formik
                            initialValues={{
                                name: '',
                                phonenumber: '',
                                email: '',
                                message: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            <Form className="w-100">
                                <div className="row join-form-wrapper">
                                    <div className="col-md-4 join-input-left">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input" id="name" name="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input" id="email" name="email" placeholder="Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input" id="Phonenumber" name="phonenumber" placeholder="Phone number" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <Field className="form-control join-input" id="Company" name="Company" placeholder="Company" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 join-input-right">
                                        <div className="form-group">
                                            <TextareaAutosize className="form-control join-textarea" id="message" name="message" placeholder="Your message" />
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn white-btn text-uppercase h_50 min-w-180 b-r-25 brandon-Medium" type="submit">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                    <div className="row mt-4 pt-2">
                        <div className="col-sm-12 pl-0 pr-0">
                            <hr className="light-white-hr" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurVisionComponent;