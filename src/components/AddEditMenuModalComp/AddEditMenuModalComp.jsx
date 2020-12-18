import React from "react";
import './AddEditMenuModalComp.scss';
import { Modal, Button } from 'react-bootstrap';


const AddEditMenuModalComp = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="mainmodal-wrapper"
            >
                <Modal.Header className="align-items-center">
                    <Modal.Title className="brandon-Medium" id="contained-modal-title-vcenter">
                        Add / Edit Menu
                            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="form-group easydish-input dishname-input w-100 custom-lightinputbox">
                            <label className="gray-txt f-15">Menu Name</label>
                            <input className="form-control f-15" type="text" placeholder="Enter here" />
                        </div>
                        <div className="custom-drodown form-group ">
                            <label className="gray-txt f-15">Availability</label>
                            <select className="form-control lightgray-border selectdropdown-btn gray-txt f-15" aria-label="Default select example">
                                <option defaultValue>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="custom-drodown form-group ">
                                    <label className="gray-txt f-15">Style of Menu</label>
                                    <select className="form-control lightgray-border selectdropdown-btn no_minwidth gray-txt f-15" aria-label="Default select example">
                                        <option defaultValue>From</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="custom-drodown form-group ">
                                    <label className="gray-txt f-15">Style of Menu</label>
                                    <select className="form-control lightgray-border selectdropdown-btn no_minwidth gray-txt f-15" aria-label="Default select example">
                                        <option defaultValue>To</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="custom-drodown form-group ">
                            <label className="gray-txt f-15">Style of Menu</label>
                            <select className="form-control lightgray-border selectdropdown-btn gray-txt f-15" aria-label="Default select example">
                                <option defaultValue>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className="border-top-0 pt-0">
                    <button className="btn lightgraynoline-btn text-uppercase border-radius-25 min-width-120" onClick={props.onHide}>CANCLE</button>
                    <button className="btn pinkline-btn text-uppercase border-radius-25 min-width-120" onClick={props.onHide}>ADD</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AddEditMenuModalComp;