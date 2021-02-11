import React, { useEffect, useState } from 'react'
import who_img from '../../assets/images/who/who-img.jpg';
import founder_img from '../../assets/images/who/Sasha.png';
import ourmission_img1 from '../../assets/images/who/ourmission-icon1.svg';
import ourmission_img2 from '../../assets/images/who/ourmission-icon2.svg';
import ourmission_img3 from '../../assets/images/who/ourmission-icon3.svg';
import ourmission_img4 from '../../assets/images/who/ourmission-icon4.svg';
import pattern_img from "../../assets/images/pattern.png"
import OurVisionComponent from '../../components/OurVisionComponent/OurVisionComponent';
import "./TheWhoPage.scss"
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";


function TheWhoPage({ filterIcon = "false" }) {
  
    return (
        <>
        <LoginPageHeader />
        <div className="the_who_page_container" >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="gradient-bg" style={{height:'100vh',position:'absolute',top:0,right:0,width:'100%'}}></div>
            {/* Who section 1 start */}
            <section className="who-section" >
                <div className="container">
                    <h1 className="text-center text-uppercase header-txt brandon-Medium position-relative">the who</h1>
                    <p className="text-center f-15 position-relative">Lorem ipsum dolor text dummy</p>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="who-we-are-wrapper mt-4">
                                <div className="who-we-are-img">
                                    <img src={who_img} className="img-fluid" />
                                </div>
                                <div className="who-we-are-info">
                                    <h6 className="brandon-Medium fw-600 text-uppercase">Who we are</h6>
                                    <p className="f-15 mb-2">
                                        We are a team of Picky Pigs with over 18 years experience in hospitality and 20 years experience in UX/UI design and website/application development. Between us we love to eat great food, enjoy being surrounded by wonderful people and can find any excuse to take that experience out into restaurants and bars.
                                    </p>
                                    <p className="f-15 mb-2">
                                        We truly care about the ultimate dining experience and believe that no matter what your requirements or preferences, you should never have to feel like a "fussy feeder". Our mission is to be the bridging gap between the restaurant and the diner, but also between friends and social networks. Allowing the user to find the best restaurant for them and their group based on the guests every need. A totally fuss free food experience, for the guest, the team members and the restaurant.
                                    </p>
                                    <p className="f-15 mb-0">
                                        With the application, you can embrace your inner Picky Pig. We know we have, enhancing your entire dining out experience, from searching, ordering to indulging.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Who section 1 end */}

            <br />
            <br />

            {/* Who section 2 start */}
            <section className="ourfounder-section mt-2">
                <div className="container">
                    <div className="ourfounder-wrapper">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-5 ourfounder-subleft pr-xl-0">
                                <div className="ourfounder-user">
                                    <div className="founder-img mb-3">
                                        <img src={founder_img} className="img-fluid" />
                                    </div>
                                    <h5 className="user-name text-center borndon-Medium fw-600">
                                        Sasha Miljus
                                    </h5>
                                    <p className="user-founder text-center f-15 mb-2">
                                        Founder
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-7 ourfounder-subright">
                                <div className="ourfounder-intro">
                                    <h6 className="brandon-Medium fw-600 text-uppercase">
                                        Our Founder
                                    </h6>
                                    <p className="f-15 mb-2">
                                        Having worked in hospitality from a young age, Sasha Miljus, our founder has grown through the changes in legalities, allergens, and dietary trends.
                                    </p>
                                    <p className="f-15 mb-2">
                                        She has a plant based diet, is lactose free and low gluten. Eating out and considering all those things can sometimes be a challenge. However she’s never given up on being a Picky Pig.
                                    </p>
                                    <p className="f-15 mb-2">
                                        Within Sasha's career, she worked for a restaurant group where the worst happened. Due to lack of communication and clarity, a young girl died from an allergic reaction. Picky Pigs was born to ensure nothing like that happened again. With the aim to eliminate as much human error as possible and provide restaurants will a tool to support and protect them.
                                    </p>
                                    <p className="f-15 mb-2">
                                        Picky Pigs means that no one needs to be a "difficult customer" anymore. It means that the guests, the team and the restaurant are supported, transparent and safe.
                                    </p>
                                    <p className="f-15 mb-0">
                                        She wants the control and choice over what she does or doesn't want to put into her body and wants to have confidence in that experience. Picky Pigs means that every guest can have that experience too.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Who section 2 end */}

            <br />
            <br />
            <br />
            <br />

            {/* Who section 3 start */}
            <section className="mission-section">
                <div className="container">
                    <div className="ourmission-wrapper">
                        <div className="container ourmission-container">
                            <h1 className="text-center text-uppercase header-txt brandon-Medium fw-600 mb-5 pb-2">Our mission</h1>

                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ourmission-subwrapper">
                                    <div className="ourmission-block text-center">
                                        <div className="ourmission-icon light-blue-bg mb-3">
                                            <img src={ourmission_img1} className="img-fluid" />
                                        </div>
                                        <p className="f-15 ourmission-intro">
                                            To illuminate as much human error as possible.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ourmission-subwrapper">
                                    <div className="ourmission-block text-center">
                                        <div className="ourmission-icon light-green-bg mb-3">
                                            <img src={ourmission_img2} className="img-fluid" />
                                        </div>
                                        <p className="f-15 ourmission-intro">
                                            To enhance the entire dining experience from beginning to end.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ourmission-subwrapper">
                                    <div className="ourmission-block text-center">
                                        <div className="ourmission-icon light-morepich-bg mb-3">
                                            <img src={ourmission_img3} className="img-fluid" />
                                        </div>
                                        <p className="f-15 ourmission-intro">
                                            Fuss free food no matter what your needs and requirements might be.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ourmission-subwrapper">
                                    <div className="ourmission-block text-center">
                                        <div className="ourmission-icon light-pink-bg mb-3">
                                            <img src={ourmission_img4} className="img-fluid" />
                                        </div>
                                        <p className="f-15 ourmission-intro">
                                            To support both the restaurant, the team and the guest in having full trust and transparency in the ordering process.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-sm-12">
                                    <h6 className="brandon-Medium fw-600 text-uppercase text-center">What we stand for</h6>
                                    <p className="f-15 text-center mb-0">No one should ever feel like they are a “fussy feeder” or that they can't enjoy the experience of dining out because of their dietary needs. Equally no one should feel like that don't have enough support or the right tools to lead, meet and exceed expectations. Picky Pigs believes that the detail matters, we wish to raise the bar in both the customer journey and the industry standard in how we handle the new norm. Fuss free food from every angle, nothing needs to be an issue with Picky Pigs.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Who section 3 end */}

            
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

export default TheWhoPage;
