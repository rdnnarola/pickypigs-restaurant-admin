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
                        size="lg"
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
                            <h4>Centered Modal</h4>
                            <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                            </p>
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