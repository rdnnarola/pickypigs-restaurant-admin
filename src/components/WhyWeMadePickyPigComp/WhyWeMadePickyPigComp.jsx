import React from "react";
import happy_face from "../../assets/images/how/happyface-icon.svg"
import disheat_icon from "../../assets/images/how/disheat-icon.svg"
import noun_Heart from "../../assets/images/how/noun_Heart.svg"
import fussfood from "../../assets/images/fussfood.svg"
import personalise from "../../assets/images/personalise.svg"
import allergen from "../../assets/images/Allergen-icon.svg"
import ingredients from "../../assets/images/Ingredients-icon.svg"
import nutritionFacts from "../../assets/images/NutritionFacts-icon.svg"
import whymade from "../../assets/images/how/whymade.png"
import './WhyWeMadePickyPigComp.scss';

const WhyWeMadePickyPigComp = () => {
    return (
        <>
            <section className="WhyWeMadePickyPigComp-container">
                <div className="container position-relative knowwhat-section">
                    <div className="knowwhatbg-img">
                        <img src={whymade} className="img-fluid" />
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <h1 className="sectionhead-txt text-uppercase">WHY WE MADE <br className="d-md-none d-lg-block" />made picky</h1>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="knowwhat-wrapper p-4">
                                        <div className="knowwhat-icon lightblue-bg d-flex align-items-center justify-content-center mb-2">
                                            <img src={happy_face} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <p className="f-15 mb-1">You don't need to feel like a “Fussy Feeder”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="knowwhat-wrapper p-4">
                                        <div className="knowwhat-icon smokelight-green d-flex align-items-center justify-content-center mb-2">
                                            <img src={disheat_icon} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <p className="f-15 mb-1">Have complete transparency of the dish
<br className="d-none d-xl-block" />knowing exactly what you can or cant eat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 knowwhat-main mb-4" type="button">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="knowwhat-wrapper p-4">
                                        <div className="knowwhat-icon light-green d-flex align-items-center justify-content-center mb-2">
                                            <img src={noun_Heart} className="img-fluid" />
                                        </div>
                                        <div className="knowwhat-info pt-1">
                                            <p className="f-15 mb-1">Take control of what you do or don't want to put into your body.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyWeMadePickyPigComp;