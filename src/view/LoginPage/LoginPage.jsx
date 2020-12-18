import React from "react";
import SignUpSignInComponent from "../../components/SignUpSignInComponent/SignUpSignInComponent";
import FirstOverlapedCardComp from "../../components/FirstOverlapedCardComp/FirstOverlapedCardComp";
import SecondOverlapedCardComp from "../../components/SecondOverlapedCardComp/SecondOverlapedCardComp";
import img_1 from "../../assets/images/digitalise_img.svg"
import JoinPickyPigComponent from "../../components/JoinPickyPigComponent/JoinPickyPigComponent";
import './LoginPage.scss';


const detail_1 = ["Save time, money, energy and e4ort. In training hours, sta4 hours on shift, time spent communicating with the guest and back and forth to the chef. Free yourself from printing new allergy sheets and matrix every time a dish is edited or added.", "Support your teams and guests in providing all tracing, cleaning and policy information. In a concise, transparent and easily accessible way.", "Put yourself on the map for the ultimate dining out application.Bridging the gap between the diner and the restaurant. The more accurate the information, the better the guest experience.", "Provide live personalised menus to each guest and their unique needs."]
const features_1 = ["Easy upload option / recipe and dish builder","Calculate calorie and macros of each dish","Link to the POS for fast on-boarding","User friendly experience","User friendly dashboard to create dishes and your menu.","Reporting tool to track orders, allergens, and servers","Add multiple filters to each dish.","Multisite capabilities."]
const LoginPage = () => {
    return (
        <>
            <section>
                <div className="container">
                    <section className="mb-5 pb-5">
                        <SignUpSignInComponent />
                    </section>
                   
                    <div>
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <h1 className="heading-content brandon-Bold">WORK WITH US</h1>
                                <p className="f-15">Lorem ipsum dolor text dummy</p>
                            </div>
                        </div>
                        <FirstOverlapedCardComp img={img_1} heading="Digitalise Today" detail={detail_1} />
                        <SecondOverlapedCardComp img={img_1} heading="Fuss Free Food (Integrate you system)" detail={detail_1} />
                        <FirstOverlapedCardComp img={img_1} heading="The Whole Package (Showcase your menu)" detail={detail_1} />
                    </div>
                    <section className="mb-5 pb-5">
                        <JoinPickyPigComponent />
                    </section>
                    <section className="mb-5">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5">
                                <h1 className="heading-content brandon-Bold">HOW IT WORKS</h1>
                                <p className="f-15">Lorem ipsum dolor text dummy</p>
                            </div>
                        </div>
                        <div>
                            <SecondOverlapedCardComp img={img_1} heading="Features" detail={features_1} />
                        </div>
                        <div>
                            <FirstOverlapedCardComp img={img_1} heading="Features" detail={features_1} />
                        </div>
                        <div>
                            <FirstOverlapedCardComp img={img_1} heading="Features" detail={features_1} />
                        </div>
                    </section>
                </div>
            </section>
            <section className="bg-light-pink pt-5 pb-5 mb-5 ">
                <div className="container">
                    <div className="bg-white rounded-pill p-5 pt-3 pb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>What are you waiting for?</h4>
                                <p>Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer</p>
                            </div>
                            <div className="col-md-6">
                                <button>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">

                </div>
            </section>
        </>
    )
}

export default LoginPage;