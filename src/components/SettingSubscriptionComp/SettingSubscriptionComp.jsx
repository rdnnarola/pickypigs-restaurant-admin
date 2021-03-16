import React, { useState } from "react";
import './SettingSubscriptionComp.scss';
import down_arrow from '../../assets/images/who/down-arrow.svg';

const SettingSubscriptionComp = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 subscription-wrapper">
                    <div className="subscription-block border-radius-15 bg-white my_shadow">
                        <p className="f-15  brandon-Medium">Picky Pigs Premium Annual for $1199.88 / Year</p>
                        <p className="gray-txt mb-4 f-13">Next Billing Date: 20 Apr 2021</p>
                        <hr className="lightgray-hr" />
                        <div className="viewtransaction-link pt-2">
                            <a href="#" className="viewtransaction-label d-flex align-items-center justify-content-between">
                                <label className="f-15 brandon-Medium">View Transactions</label>
                                <img src={down_arrow} className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 subscription-wrapper">
                    <div className="subscription-block border-radius-15 bg-white my_shadow">
                        <div className="viewtransaction-link pt-2 pb-1">
                            <a href="#" className="viewtransaction-label d-flex align-items-center justify-content-between">
                                <label className="f-15 brandon-Medium">Upgrade Membership</label>
                                <img src={down_arrow} className="img-fluid" />
                            </a>
                        </div>
                        <hr className="lightgray-hr" />
                        <div className="viewtransaction-link pt-2 d-flex align-items-center justify-content-between">
                            <a href="#" className="viewtransaction-label d-inline-flex align-items-center justify-content-between">
                                <label className="f-15 brandon-Medium">Log out</label>
                            </a>
                            <div className="line-separate"></div>
                            <a href="#" className="viewtransaction-label d-inline-flex align-items-center justify-content-between">
                                <label className="f-15 brandon-Medium">Log out All Devices</label>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SettingSubscriptionComp;
