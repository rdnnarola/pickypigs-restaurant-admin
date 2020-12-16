import React from "react";
import './AddEditSubCategoryModalComp.scss';
import { Modal,Button} from 'react-bootstrap';


const AddEditSubCategoryModalComp=(props)=>{
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
                                <div className="brandon-Medium">
                                    <h4>Add / Edit Sub Category</h4>
                                </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-group easydish-input dishname-input w-100">
                                    <label className="gray-txt f-15">Sub Category Name</label>
                                    <input className="form-control" type="text" placeholder="Enter here" />
                                </div>
                                <div className="custom-drodown form-group ">
                                    <label className="gray-txt f-15">Category</label>
                                    <select className="form-control lightgray-border selectdropdown-btn " aria-label="Default select example">
                                        <option defaultValue>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="custom-drodown form-group ">
                                    <label className="gray-txt f-15">Menu</label>
                                    <select className="form-control lightgray-border selectdropdown-btn " aria-label="Default select example">
                                        <option defaultValue>Select</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button onClick={props.onHide}>Close</button>
                            <button className="btn pinkline-btn text-uppercase rounded-pill" onClick={props.onHide}>Add</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>
            
        </>
    )
}

export default AddEditSubCategoryModalComp;