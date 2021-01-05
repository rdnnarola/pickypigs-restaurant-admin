import React from "react";
import DonutChart from "../../components/DonutChart/DonutChart";
import "./SingleAllergyDetailPage.scss";
const datas1 = [
    { item: "Nuts", qty: "87" },
    { item: "Milk", qty: "47" },
    { item: "Celery", qty: "10" },
    { item: "Fish", qty: "20" },
    { item: "Peanuts", qty: "10" },
    { item: "Lupin", qty: "40" },
    { item: "Sesame", qty: "7" },
    { item: "Mustard", qty: "3" },
]

const SingleAllergyDetailPage = () => {
    const data1 = [{ name: 'Nuts', value: 10 }, { name: 'Milk', value: 15 },
    { name: 'Celery', value: 25 }, { name: 'Other', value: 50 }];
    const COLORS1 = ['#d1b2f5', '#91eddb', '#e376b8', '#f8e3e9'];

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-heading brandon-Medium">
                        <h4>Tuesday, 18 March 2020<small className="brandon-regular ml-3">7:45 PM</small></h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <p className="text-uppercase sub-heading brandon-Medium mt-5">ALLERGIES</p>
                </div>
            </div>
            <div className="row mt-3 pt-2 mb-5 pb-2 dashboard1-wrapper">
                <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 dashboard1-left">
                    <DonutChart data={data1} COLORS={COLORS1} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 dashboard1-right">
                    <div className="table-responsive my_custom_table mb-4">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">ITEM</th>
                                    <th className="brandon-Bold " scope="col">QTY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas1 && datas1.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.item}</td>
                                                <td>{data.qty}%</td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleAllergyDetailPage;