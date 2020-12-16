import React from "react";
import './AddEditCategoryModalComp.scss';
import { Modal,Button} from 'react-bootstrap';


const AddEditCategoryModalComp=(props)=>{
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
                                Add / Edit Category
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

export default AddEditCategoryModalComp;