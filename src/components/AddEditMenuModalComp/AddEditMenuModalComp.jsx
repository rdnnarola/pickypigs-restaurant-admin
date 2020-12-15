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
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                AddEditMenuModalComp
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
                            <Button onClick={props.onHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>
            
        </>
    )
}

export default AddEditMenuModalComp;