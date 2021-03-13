import React, { useState } from "react";
import './SignUpModalComp.scss';
import { Modal, Button } from 'react-bootstrap';
import { Field, Form, Formik } from 'formik';
import { FACEBOOK_APP_ID, GOOGLE_CLIENT_ID, HOST_URL } from '../../shared/constant';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from "react-facebook-login";
import showpassword from "../../assets/images/eye_icon.svg";
import closeicon from "../../assets/images/close.svg";
import axios from 'axios';

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);
const numbRegs=RegExp(/^[0-9]*$/);

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Name Required'),
    email: Yup.string().email('Email must be a valid email').required('Email Required'),
    password: Yup
        .string()
        .label('Password')
        .required('Password Required')
        .min(8, 'Seems a bit short(Min 8 characters)...')
        .max(24, 'Please try a shorter password(Max 24 characters)...).')
        .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
    phone: Yup
        .string()
        .required('Phone Number is a required field')
        .matches(numbRegs, "Invalid Phone Number"),
    confirmPassword: Yup
        .string()
        .required('Required')
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match', function (value) {
            return this.parent.password === value;
        }),
});
const SignUpModalComp = (props) => {
    const [type, setType] = useState("password")
    const [confirmType, setConfirmType] = useState("password");
    const { setLogin } = useState("useGlobal")
    const [error, setError] = useState(null)


    const handleForm = (input) => {
        console.log('input => ', input);
        axios.post(`${HOST_URL}/auth/signup`, input).then((res) => {
            console.log('Hi in signup res', res)
            setError("")
            props.onHide();
        }).catch(err => {
            console.log('err =>', err.respon)
            setError(err.response.data.message)
        })
    }
    const googleResponse = response => {
        axios.post(`${HOST_URL}/auth/google`, response.profileObj).then(res => {
            setLogin(res.data.token)
            props.onHide();
        }).catch(err => console.log('err => ', err.response))
    }

    const facebookResponse = async response => {
        axios.post(`${HOST_URL}/auth/facebook`, response).then(res => {
            setLogin(res.data.token)
            props.onHide();
        }).catch(err => console.log('err => ', err.response))
    }

    const onFailure = error => {
        console.log("error login", error)
        // alert(error)
    }
    const handlePassword = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    const handleConfirmPassword=()=>{
        if (confirmType === "password") {
            setConfirmType("text")
        } else {
            setConfirmType("password")
        }
    }
    return (
        <>
            <section>
                <div >
                    <Modal className="signup-modal"
                        {...props}
                        backdrop="static"
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >

                        <Modal.Body className="p-0 position-relative">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-left">
                                    <div className="hello-msg">
                                        <h1 className="text-uppercase text-white brandon-Bold">Hello<br />Fuzz</h1>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 signup-right">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button className="btn modalclose-icon" onClick={props.onHide}>
                                                <img src={closeicon} alt="signup modal close icon" className="img-fluid" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 mb-3">
                                            <h3 className="brandon-Bold">Sign up</h3>

                                        </div>
                                    </div>

                                    <Formik
                                        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
                                        validationSchema={validationSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            handleForm(values)
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            isSubmitting,
                                            /* and other goodies */
                                        }) => (
                                            <Form>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <Field name="fullName" className="form-control signup-input" placeholder="Name or Full name" />
                                                            {touched.fullName && errors.fullName && <div className="error pink-txt f-11">{errors.fullName}</div>}
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                            {/* {touched.email && errors.email &&
                                                <div className="error pink-txt f-11">{errors.email}</div>} */}
                                                            <div className="error pink-txt f-11">{(touched.email && errors.email && errors.email) || error}</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <Field name="phone" placeholder="Phone" className="form-control signup-input" />
                                                            {touched.phone && errors.phone &&
                                                                <div className="error pink-txt f-11">{errors.phone}</div>}
                                                        </div>
                                                        <div className="form-group position-relative">
                                                            <Field type={type} name="password" placeholder="Password" className="form-control signup-input"
                                                            />
                                                            <div className={`showpassword-block ${type=== "password"?null:"show"}`} id="password" onClick={() => handlePassword()}>
                                                                <img src={showpassword} className="img-fluid" />
                                                            </div>
                                                            {touched.password && errors.password && <div className="error pink-txt f-11">{errors.password}</div>}
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control signup-input" />
                                                            {touched.confirmPassword && errors.confirmPassword && <div className="error pink-txt f-11">{errors.confirmPassword}</div>}
                                                        </div> */}
                                                        <div className="form-group position-relative">
                                                            <Field type={confirmType} name="confirmPassword" placeholder="Confirm new password" className="form-control signup-input" />
                                                            <div className={`showpassword-block ${confirmType=== "password"?null:"show"}`} id="confirmPassword" onClick={handleConfirmPassword}>
                                                                <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                            </div>
                                                            <div className="error pink-txt f-11">{(touched.confirmPassword && errors.confirmPassword && errors.confirmPassword) || error}</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25" type="submit" disabled={isSubmitting}>
                                                                Sign up
                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>

                                    <React.Fragment>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group mt-2 pt-2">
                                                    <div className="border-separate">
                                                    </div>
                                                </div>
                                                <div className="or-txt f-15">
                                                    <span>or</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="socail-login d-flex justify-content-between align-items-center mt-3">
                                                    <GoogleLogin
                                                        clientId={GOOGLE_CLIENT_ID}
                                                        onSuccess={googleResponse}
                                                        className="btnApple socail-btn"
                                                        icon={false}
                                                    >
                                                        {/* <span>Google</span> */}
                                                        <span></span>
                                                    </GoogleLogin>
                                                    <FacebookLogin
                                                        appId={FACEBOOK_APP_ID}
                                                        autoLoad={false}
                                                        fields="name,email,picture"
                                                        callback={facebookResponse}
                                                        cssClass="btnFacebook socail-btn"
                                                        // textButton="&nbsp;&nbsp;Facebook"
                                                        textButton=""
                                                    />
                                                    <GoogleLogin
                                                        clientId={GOOGLE_CLIENT_ID}
                                                        onSuccess={googleResponse}
                                                        className="btnGoogle socail-btn"
                                                        icon={false}
                                                    >
                                                        {/* <span>Google</span> */}
                                                        <span></span>
                                                    </GoogleLogin>
                                                </div>
                                                <div className="terms-block text-center mt-4 txt-lightgray">
                                                    <p>By proceeding you agree to the<br />
                                                        <Link to="#" className="pink-txt pr-1 brandon-Medium">Terms</Link>and
                                    <Link to="#" className="pink-txt pl-1 brandon-Medium">Privacy Policy</Link>
                                                    </p>
                                                </div>
                                                {/* <Modal show={popup} onHide={handlePopup} className="signup-modal">
                                <Modal.Body className="p-0">
                                            <p>Signup successfully !</p>
                                </Modal.Body>
                            </Modal> */}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </div>
            </section>
        </>
    )
}

export default SignUpModalComp;