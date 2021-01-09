import React from "react";
import {useDispatch} from "react-redux";
import { Modal } from 'react-bootstrap';
import {deleteSelectedCategoryData} from "../../redux/actions/categoryAction";

import './DeleteCategoryModalComp.scss';



const DeleteCategoryModalComp = (props) => {
  const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(deleteSelectedCategoryData(props.selectedid));
        props.onHide();
    }
    return (
        <>
            <section >
                <div>
                    <Modal
                        {...props}
                        backdrop="static"
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        className="mainmodal-wrapper"
                        centered
                    >
                        <Modal.Body className="align-items-center">
                            <h4 className="brandon-Medium">Are you sure to delete this record?</h4>
                        </Modal.Body>
                       
                        <Modal.Footer className="border-top-0 pt-0 d-flex justify-content-center">
                            <button className="btn lightgraynoline-btn text-uppercase border-radius-25 min-width-120" onClick={props.onHide}>No</button>
                            <button className="btn pinkline-btn text-uppercase border-radius-25 min-width-120" onClick={handleDelete}>Yes</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </section>

        </>
    )
}

export default DeleteCategoryModalComp;