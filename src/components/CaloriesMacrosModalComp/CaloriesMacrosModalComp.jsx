import React, { useState } from "react";
import { Modal, Button, } from "react-bootstrap";
import './CaloriesMacrosModalComp.scss';
import nutritionFactsicon from "../../assets/images/NutritionFacts-icon.svg";
import rightarrow from "../../assets/images/right-arrow.svg";

const CaloriesMacrosModalComp = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="rs-allergiesinfomodalbtn">
                <Button variant="primary" onClick={handleShow}>
                    <p className="d-flex align-items-center mb-0 icontext-content">
                        <div className="d-flex align-items-center w-100">
                            <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                            <div className="d-flex align-items-center w-100 justify-content-between rs-allergiesinfomodal-sub">
                                <span className="pl-4 ml-2 text-left rs-allergiesinfomodal-name">Nutrition Facts<br></br>Calories & Macros</span>
                                <div><img src={rightarrow} alt="" className="img-fluid" /></div>
                            </div>
                        </div>
                    </p>
                    <p className="rs-allergiesinfomodalbtn-detail mb-0 text-left">View additional details</p>
                </Button>
            </div>
            <Modal centered className="rs-discallergiesinfomadel" show={show} onHide={handleClose} animation={false} >
                <Modal.Header closeButton className="border-bottom-0 align-items-center">
                    <Modal.Title className="w-100">
                        <p className="d-flex align-items-center mb-0 rsd-icontext-content">
                            <div className="d-flex align-items-center w-100">
                                <img src={nutritionFactsicon} alt="" className="img-fluid mr-2 position-absolute" />
                                <div className="d-flex align-items-center w-100 justify-content-between rsd-allergiesinfomodal-sub">
                                    <span className="pl-4 ml-2 text-left rsd-allergiesinfomodal-name">Amount per serving<br></br><b>Calories & Macros</b></span>
                                    <div className="mt-3"><span><b>507</b></span></div>
                                </div>
                            </div>
                        </p>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <hr className="mt-0 mb-0"></hr>
                    </div>
                    <div className="total-fat d-flex justify-content-between flex-wrap mt-3">
                        <p className="mb-1 brandon-Medium">Total Fat</p><p className="mb-1 brandon-Medium">20.84 g</p>
                    </div>
                    <div className="table-responsive rscategory-detail">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td scope="col" colSpan="3" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1 text-right">% Daily Values *</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Total Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">20.84 g</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">32%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Saturated Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">2.88 g</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">14%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left">Trans Fat</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-1">-</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Cholesterol</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>0 g</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>0%</b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Sodium</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>377 g</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>16%</b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Total Carbohydrate</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>65.17 g</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>22%</b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Dietary Fiber</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">3.2 g</td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">13%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 border-top-0 pt-1 pb-1 text-left pb-3">Sugars</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 border-top-0 pt-1 pb-3">2.06 g</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="fw-400 pl-0 pr-0 text-left"><b>Protien</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>16.84 g</b></td>
                                    <td scope="col" className="fw-400 text-right pl-0 pr-0"><b>22%</b></td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin D</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">-</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Calcium</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">130 mg</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">13%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Iron</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">5 mg</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">30%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Potassium</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">667 mg</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">19%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin A</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">0 I U</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">0%</td>
                                </tr>
                                <tr>
                                    <td scope="col" className="txt-lightgray fw-400 pl-0 pr-0 text-left pt-1 pb-1 border-top-0">Vitamin C</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">7 mg</td>
                                    <td scope="col" className="txt-lightgray fw-400 text-right pl-0 pr-0 pt-1 pb-1 border-top-0">12%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <hr className="mt-0 mb-0"></hr>
                    </div>
                    <p className="contributes-detailtxt txt-lightgray">
                        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                    </p>
                </Modal.Body>
                {/* <Modal.Footer>
                    <p>Voluptua sed diam lorem sanctus ipsum sed sanctus nonumy. Accusam sea tempor labore accusam diam labore no sea amet, at sed et et takimata et et voluptua duo. Aliquyam et.</p>
                </Modal.Footer> */}
            </Modal>

        </>
    )
}

export default CaloriesMacrosModalComp;