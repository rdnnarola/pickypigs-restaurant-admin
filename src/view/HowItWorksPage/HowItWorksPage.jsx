import React from 'react'

import pattern_img from "../../assets/images/pattern.png"
import OurVisionComponent from '../../components/OurVisionComponent/OurVisionComponent';
import video_img from "../../assets/images/how/video-img.png"
import how_img_1 from "../../assets/images/how/work-img1.jpg"

import how_img_2 from "../../assets/images/how/work-img2.jpg"
import how_img_3 from "../../assets/images/how/work-img3.jpg"
import play_icon from "../../assets/images/how/play-button.svg"
import "./HowItWorksPage.scss"
import SecondOverlapedCardComp from '../../components/SecondOverlapedCardComp/SecondOverlapedCardComp';
import FirstOverlapedCardComp from '../../components/FirstOverlapedCardComp/FirstOverlapedCardComp';
import WhyWeMadePickyPigComp from '../../components/WhyWeMadePickyPigComp/WhyWeMadePickyPigComp';
import HowPageAllegyDescComp from '../../components/HowPageAllegyDescComp/HowPageAllegyDescComp';
import ReactPlayer from 'react-player/lazy'
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";


const detail_1 = "You can search based on allergy requirements, dietary preferences,lifestyle choices, restaurant features and even go on to see the calorie and macros of every meal. So whether you su4er with an allergy, choose to have a plant based diet, are pregnant, own a dog or are just trying to think more consciously about what you're eating, Picky Pigs is your ultimate dining out tool."
const detail_2 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience."]


function HowItWorksPage() {

    return (
        <>
        <LoginPageHeader />
        <div className="how_it_works_container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="gradient-bg" style={{height:'100vh',position:'absolute',top:0,right:0,width:'100%'}}></div>
            {/* How section 1 start */}
            <section className="how-section position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-2">
                            <h1 className="text-center text-uppercase header-txt brandon-Bold">HOW IT WORKS</h1>
                            <p className="text-center f-15">
                                This is your ultimate food finding application for FUSS FREE FOOD. Search for the best place for you to dine based <br className="d-none d-xl-block" />
                            on all of your needs, add and remove filters to create a personalised digital menu and even send your own order to <br className="d-none d-xl-block" />
                            the kitchen to ensure you feel safe and in control.
                            </p>
                        </div>
                    </div>



                </div>
            </section>
            {/* Who section 1 end */}
            <section className="howvideo-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="howvideo-wrapper">
                                <ReactPlayer
                                    light={video_img}
                                    playIcon={<img src={play_icon} className="img-fluid play_icon"  alt="icon" />}
                                    className="w-100 h-100"
                                    controls
                                    url='https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <FirstOverlapedCardComp img={how_img_1} detail={detail_1} />
                    <SecondOverlapedCardComp img={how_img_2} detail={detail_1} />
                    <FirstOverlapedCardComp img={how_img_3} detail={detail_1} />
                </div>
            </section>

            <WhyWeMadePickyPigComp />
            <HowPageAllegyDescComp />


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
            <OurVisionComponent />

        </div>
        <LoginPageFooter />

        </>
    )
}

export default HowItWorksPage;
