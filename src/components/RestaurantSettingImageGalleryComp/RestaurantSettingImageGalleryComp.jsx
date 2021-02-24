import React, { useState } from "react";
import './RestaurantSettingImageGalleryComp.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { updateRestaurantInfoDetail, uploadRestaurantGalleryImage, deleteRestaurantGalleryImage } from '../../redux/actions/restaurantSettingAction'
import { SERVER_URL } from '../../shared/constant'
import dishimg1 from "../../assets/images/dishimg1.jpg";

const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const RestaurantSettingImageGalleryComp = (props) => {
    let { food, ambience } = props.gallerydata
    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState(true);
    let [imageLoading, setImageLoading] = useState(false);

    const handleCancleEdit = (resetForm) => {
        setEditForm(true)
        resetForm()
    }

    const initialValues = {
        food: food ? food : [],
        ambience: ambience ? ambience : [],
    }

    const validationSchema = Yup.object().shape({
    });

    const galleryImageUploadHandeler = (e, type) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            dispatch(uploadRestaurantGalleryImage(e.target.files, type))
        }
    }

    const handleRemoveImage = (id, type) => {
        if (id) {
            dispatch(deleteRestaurantGalleryImage({ type: type, imageId: id }))
        }
    }

    const onSubmit = (fields) => {
        dispatch(updateRestaurantInfoDetail({ restaurantGalleries: fields }));
        setEditForm(true)
    }

    return (
        <>
            <section className="RestaurantSettingImageGalleryComp">
                <React.Fragment>
                    <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {({ errors, touched, resetForm, setFieldValue, handleChange, values }) => {
                            return (
                                <Form>
                                    <div className="row RestaurantInfoComp-container main-accordion-wrapper">
                                        <div className="col-sm-12">
                                            <div className="my_shadow accordion accordion-main border-radius-15 bg-white" id="accordionExampleSix">
                                                <div className="accordion-item">
                                                    <div className="d-flex justify-content-between align-items-center accordion-header position-relative" id="headingSix">
                                                        <div >
                                                            <div className="accordion-title">
                                                                <h5 className="brandon-Bold mb-0">GALLERY IMAGES</h5>
                                                            </div>
                                                            <div className="w-100 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                                {editForm &&
                                                                    <div className="ml-5 expand-button position-absolute top-0 right-0"></div>
                                                                }
                                                            </div>
                                                        </div>
                                                        {editForm
                                                            ?
                                                            <button className="custom_edit_button mr-5 brandon-Medium" type="button" onClick={() => { setEditForm(false) }}>EDIT</button>
                                                            :
                                                            <div className="d-flex justify-content-between align-items-center ">
                                                                <button className="btn lightgraynoline-btn min-width-120 border-radius-25 text-uppercase f-15" type="reset" onClick={() => { handleCancleEdit(resetForm); }}>cancle</button>
                                                                <button className="btn pinkline-btn min-width-120 border-radius-25 ml-4 text-uppercase f-15" type="submit">Save</button>
                                                            </div>
                                                        }
                                                    </div>
                                                    <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExampleSix">
                                                        <div className="accordion-body ">
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <hr className="gray-hr"></hr>
                                                                </div>
                                                            </div>
                                                            {/* {JSON.stringify(values.ambience)} */}
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <p className="f-15 mb-2 brandon-Medium">Add images to your gallery</p>
                                                                </div>
                                                                <div className="col-sm-12">
                                                                    <form>
                                                                        <div className="form-group">
                                                                            <div className="fileUpload">
                                                                                <input
                                                                                    type="file"
                                                                                    accept="image/*"
                                                                                    name="uploadedfile"
                                                                                    multiple
                                                                                    className="form-control-file userprofile-control upload"
                                                                                    onChange={(e) => { galleryImageUploadHandeler(e, "Food") }}
                                                                                />
                                                                                <span className="brandon-Medium">Upload from your gallery</span>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-1">
                                                                <div className="col-sm-12">
                                                                    <div className="uploadyour-wrapper d-flex flex-wrap">
                                                                        {props.gallerydata && props.gallerydata.food && props.gallerydata && props.gallerydata.food.length > 0 ?
                                                                            props.gallerydata && props.gallerydata.food.map((data, index) => {
                                                                                return (
                                                                                    <React.Fragment key={index}>
                                                                                        <div className="uploadyour-block position-relative mr-3 mb-3">
                                                                                            <img loading="lazy" onLoad={() => { setImageLoading(true); }}
                                                                                                src={`${SERVER_URL}/${data.url}`}
                                                                                                alt="" className="img-fluid bg-white border p-1 position-relative" />
                                                                                            <div className="overlay-close">
                                                                                                <button className="position-absolute uploadyour-close" onClick={() => { handleRemoveImage(data._id, "Food") }} style={{}}>x</button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </React.Fragment>
                                                                                )
                                                                            })

                                                                            :
                                                                            <div className="col-sm-12 pl-0">
                                                                                <p className="form-control-plaintext gray-txt">Not Available</p>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-12">
                                                                    <p className="f-15 mb-2 brandon-Medium">Or you can upload by yourself</p>
                                                                </div>
                                                                <div className="col-sm-12">

                                                                    <form>
                                                                        <div className="form-group">
                                                                            <div className="fileUpload">
                                                                                <input
                                                                                    type="file"
                                                                                    accept="image/*"
                                                                                    name="uploadedfile"
                                                                                    className="form-control-file upload"
                                                                                    multiple
                                                                                    onChange={(e) => { galleryImageUploadHandeler(e, "Ambience") }}
                                                                                />
                                                                                <span className="brandon-Medium">Upload from your desktop</span>
                                                                            </div>
                                                                        </div>
                                                                    </form>

                                                                    {/* <form>
                                                                        <div className="form-group">
                                                                            <input
                                                                                type="file"
                                                                                accept="image/*"
                                                                                name="uploadedfile"
                                                                                multiple 
                                                                                className="form-control-file userprofile-control"
                                                                                onChange={(e)=>{galleryImageUploadHandeler(e,"Ambience")}}
                                                                            />
                                                                        </div>
                                                                    </form> */}
                                                                </div>
                                                            </div>
                                                            <div className="row mt-1">
                                                                <div className="col-sm-12">
                                                                    <div className="uploadyour-wrapper d-flex flex-wrap">
                                                                        {props.gallerydata && props.gallerydata.ambience && props.gallerydata && props.gallerydata.ambience.length > 0 ?
                                                                            props.gallerydata && props.gallerydata.ambience.map((data, index) => {

                                                                                return (
                                                                                    <React.Fragment key={index}>
                                                                                        <div className="uploadyour-block position-relative mr-3 mb-3">
                                                                                            <img loading="lazy" onLoad={() => { setImageLoading(true); }}
                                                                                                src={`${SERVER_URL}/${data.url}`}
                                                                                                alt="" className="img-fluid bg-white p-1 position-relative" />
                                                                                            <div className="overlay-close">
                                                                                                <button className="position-absolute uploadyour-close" onClick={() => { handleRemoveImage(data._id, "Ambience") }} style={{}}>x</button>
                                                                                            </div>
                                                                                        </div>

                                                                                    </React.Fragment>
                                                                                )

                                                                            })

                                                                            :
                                                                            <div className="col-sm-12 pl-0">
                                                                                <p className="form-control-plaintext gray-txt">Not Available</p>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </React.Fragment>
            </section >
        </>
    )
}

export default RestaurantSettingImageGalleryComp;