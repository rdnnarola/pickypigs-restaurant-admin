import React from "react";
import Nonveg_icon from "../../assets/images/filterfeature/Nonveg_icon.svg"
import { ReactComponent as ChatIcon } from "../../assets/images/filterfeature/Nonveg_icon.svg";

import Popper from '@material-ui/core/Popper';
import './HowPageAllegyDescComp.scss';

const alergy_information = [{ name: "Egg", image: Nonveg_icon }, { name: "Milk", image: Nonveg_icon }, { name: "Celery", image: Nonveg_icon }, { name: "Mustard", image: Nonveg_icon }, { name: "Lupin", image: Nonveg_icon }, { name: "Nuts", image: Nonveg_icon }, { name: "Peanuts", image: Nonveg_icon }, { name: "Sesame", image: Nonveg_icon }, { name: "Molluscs", image: Nonveg_icon }, { name: "Crustaceans", image: Nonveg_icon }, { name: "Fish", image: Nonveg_icon }, { name: "Cereals (Wheat)", image: Nonveg_icon }, { name: "Soya", image: Nonveg_icon }, { name: "Sulphur dioxide", image: Nonveg_icon }];
const dietary_preference = ["Pescatarian", "Vegetarian", "Plant Based", "Low gluten", "Lactose free", "Halal", "Kosher", "Low sugar"];
const lifestyle_choice = ["Organic", "Vegan", "Pregnant"];
const restaurant_features = ["Pet Friendly", "Child friendly", "Live music", "Outside sitting", "Disabled access", "Reservations needed", "Bring your own", "Large parties accepted", "Private dining room", "Table service", "Bar service", "Holding bar", "R20", "Take away"];


const HowPageAllegyDescComp = () => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modalData, setModalData] = React.useState(null);
    const [arrowRef, setArrowRef] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section className="HowPageAllegyDescComp-container">
                <div className="container">
                    <div className="howpagedesc-wrapper">
                        {/* <h1>HowPageAllegyDescComp</h1> */}
                        <p className="text-center mb-5">We have turned all the requirements into icons so you can easily find your needs. Here is an idea of what everything <br className="d-none d-xl-block" /> actually means.</p>
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="brandon-Medium text-uppercase f-14"><b>Allergens</b></p>

                                <div className="allergen-btn-wrapper d-flex align-items-start flex-wrap">
                                    {alergy_information && alergy_information.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>

                                                <button onClick={(e) => { handleClick(e); setModalData(data) }} className="allergen-btn d-flex flex-column justify-content-center mr-4 mb-4 p-0 align-items-center">
                                                    <div className="allergen-icon d-flex align-items-center justify-content-center mb-2">
                                                        <img src={data.image} className="img-fluid" />
                                                    </div>
                                                    <p className="mb-0 f-14">{data.name}</p>

                                                </button>

                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                                <Popper
                                    className="allergens-modal-wrapper"
                                    placement="bottom-start" disablePortal={true}
                                    open={open} anchorEl={anchorEl}
                                    modifiers={{
                                        flip: {
                                            enabled: false,
                                        },
                                        preventOverflow: {
                                            enabled: true,
                                            boundariesElement: 'window',
                                        },
                                        arrow: {
                                            enabled: true,
                                            element: arrowRef,
                                        },
                                    }}
                                >
                                    {true ? <span className="arrow" ref={setArrowRef} /> : null}

                                    <React.Fragment>
                                        <div class="bg-white allergens-modal">
                                            <div className="allergens-heading d-flex align-items-center justiy-content-between position-relative">
                                                <div className="allergens-inner-head d-flex align-items-center">
                                                    <div className="allergens-icon mr-4 d-flex align-items-center justify-content-center">
                                                        <img src={modalData && modalData.image} className="img-fluid" />
                                                    </div>
                                                    <h6 className="allergens-title text-uppercase brandon-Medium fw-600 mb-0">{modalData && modalData.name}</h6>
                                                </div>
                                                <button className="allergensclose-btn" onClick={() => { setOpen(false) }}>x</button>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="row">
                                                    <div className="col-sm-12 pl-0 pr-0">
                                                        <div className="border mt-3 mb-3">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="allergens-info"><p className="mb-0">Gluten is the name of a family of proteins found in wheat, barley, rye and oats. It is often found in foods
                                            containing flour and therefore bread, baked goods, cereals and pasta. It can also be found in barleybased
products such as beer, malt, malt vinegar and food colouring.</p></div>
                                        </div>
                                    </React.Fragment>
                                </Popper>

                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 mt-2 pl-0 pr-0 mb-2">
                                    <div className="border mt-4 mb-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 mt-2">
                                <p className="brandon-Medium txt-darkgreen">DIETARY PREFERENCES</p>
                                <div className="dietary-wrapper d-flex flex-wrap">
                                    {dietary_preference && dietary_preference.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <button className="tags-btn mr-4 mb-4">{data}</button>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 mt-2 pl-0 pr-0 mb-2">
                                    <div className="border mt-4 mb-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 mt-3">
                                <p className="brandon-Medium txt-darkgreen">LIFESTYLE CHOICE</p>
                                <div className="lifestyle-wrapper d-flex flex-wrap">
                                    {lifestyle_choice && lifestyle_choice.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <button className="tags-btn mr-4 mb-4">{data}</button>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 mt-2 pl-0 pr-0 mb-2">
                                    <div className="border mt-4 mb-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 mt-3">
                                <p className="brandon-Medium txt-darkgreen">RESTAURANT FEATURES</p>
                                <div className="rsfeatures-wrapper d-flex flex-wrap">
                                    {restaurant_features && restaurant_features.map((data, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <button className="tags-btn mr-4 mb-4">{data} </button>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HowPageAllegyDescComp;