import React from "react";
import './CommonTableComp.scss';
const datas = [
    { item: "Denny's Benny Family", orderby: "Clayton Black", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Grand Slam", orderby: "Willard Alexander", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Spinach & Mushroom Benny", orderby: "Isaac Grant", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "French Slam", orderby: "Don peck", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Kiwi Slam", orderby: "Wesley Franklin", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Krack-A-Jack", orderby: "Tim Clark", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Veggie Spring Rolls", orderby: "Judd Cooper", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Seasoned Wedges", orderby: "Christian Bishop", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Denny's Benny Family", orderby: "Clayton Black", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },
    { item: "Grand Slam", orderby: "Willard Alexander", ordertaken: "Server 1", table: "1", ordertime: "1:30 PM", sendtime: "1:45 PM", amended: "Yes" },

]
const CommonTableComp = () => {
    return (
        <>
            <div className="row mt-4">
                <div className="col-sm-12">
                    <h1 className="table-heading brandon-Bold mb-3">Last 10 Orders</h1>
                    <div className="table-responsive my_custom_table">
                        <table className="table table-striped table-main">
                            <thead>
                                <tr>
                                    <th className="brandon-Bold" scope="col">ITEM</th>
                                    <th className="brandon-Bold" scope="col">ORDERED BY</th>
                                    <th className="brandon-Bold" scope="col">ORDER TAKEN BY</th>
                                    <th className="brandon-Bold text-center" scope="col">TABLE NO</th>
                                    <th className="brandon-Bold text-right" scope="col">TIME ORDERED</th>
                                    <th className="brandon-Bold text-center" scope="col">TIME SENT</th>
                                    <th className="brandon-Bold text-right" scope="col">AMENDED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datas && datas.map((data, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <tr >
                                                <td>{data.item}</td>
                                                <td>{data.orderby}</td>
                                                <td>{data.ordertaken}</td>
                                                <td className="text-center">{data.table}</td>
                                                <td className="text-right">{data.ordertime}</td>
                                                <td className="text-center">{data.sendtime}</td>
                                                <td className="text-right">{data.amended}</td>
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

export default CommonTableComp;