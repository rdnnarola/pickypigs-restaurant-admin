import React from "react";
import './AddEditMenuModalComp.scss';
import { Modal,Button} from 'react-bootstrap';


const AddEditMenuModalComp=(props)=>{
    return(
        <>
            <section >
                <div>
                    <Modal
                        {...props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Add / Edit Menu
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-group easydish-input dishname-input w-100">
                                    <label className="gray-txt f-15">Menu Name</label>
                                    <input className="form-control" type="text" placeholder="Enter here" />
                                </div>
                                <div className="custom-drodown form-group ">
                                    <label className="gray-txt f-15">Availability</label>
                                    <select className="form-control lightgray-border selectdropdown-btn " aria-label="Default select example">
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
                                            <select className="form-control lightgray-border selectdropdown-btn no_minwidth" aria-label="Default select example">
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
                                            <select className="form-control lightgray-border selectdropdown-btn no_minwidth" aria-label="Default select example">
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
                                    <select className="form-control lightgray-border selectdropdown-btn" aria-label="Default select example">
                                        <option defaultValue>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.onHide}>CANCLE</button>
                            <button onClick={props.onHide}>ADD</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>
            
        </>
    )
}

export default AddEditMenuModalComp;