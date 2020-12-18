import React, { useState } from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import showpassword from "../../assets/images/eye_icon.svg";
import { getLogin } from "../../redux/actions/generalActions";
import './SignUpSignInComponent.scss';
import SignUpModalComp from "../SignUpModalComp/SignUpModalComp";
import { useHistory } from "react-router-dom";


const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup
        .string()
        .label('Password')
        .required('Required')
        .min(4, 'Seems a bit short...')
        .max(15, 'We prefer insecure system, try a shorter password.')
});
const SignUpSignInComponent = () => {

    const dispatch = useDispatch();
    const history=useHistory();
    const [type, setType] = useState("password")
    const [error, setError] = useState(null)

    const [signUpModalshow, setSignUpModalshow] = useState(false);
    const handleClose = () => setSignUpModalshow(false);
    const handleShow = () => setSignUpModalshow(true);

    const handleLoginForm = (input) => {
        let obj = {
            email: input.email,
            password: input.password
        }
        dispatch(getLogin(obj,history))
    }
    const handlePassword = () => {
        let ele = document.getElementById("password")
        if (type === "password") {
            ele.classList.add("show")
            setType("text")
        } else {
            ele.classList.remove("show")
            setType("password")
        }
    }

    return (
        <>
        <br />
        <br />
            <div className="row justify-content-between">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="signin-left pt-4 mt-2">
                        <h1 className="brandon-Bold">
                            THE ULTIMATE
                        <br />
                        FOOD FINDING
                        <br />
                        APPLICATION
                    </h1>
                        <p className="f-15">bridging the gap between you and your perfect guest. Your allergy, calorie,macro and digital menu solution.</p>
                        <p className="f-15 mb-4">Digital menus personalised by allergy requirements, dietary preferences and lifestyle choices. Let your customer easily discover your venue and dishes, in a safe, transparent and accessible way. Support your teams and guests in making the best choices in what and where they do or don't want to eat.</p>
                        <div className="form-group">
                            <button onClick={handleShow}
                                className="pinkline-btn signup-btn btn min-width-270 text-uppercase rounded-pill">
                                Sign Up
                                </button>
                            <SignUpModalComp show={signUpModalshow} onHide={handleClose} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="signin-form">
                        <h5 className="text-center signindash-heading brandon-Bold mb-4">SIGN IN TO YOUR DASHBOARD</h5>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={validationSchemaForLogin}
                            onSubmit={(values) => {
                                console.log('values => ', values);
                                handleLoginForm(values)
                            }}
                        >
                            {({
                                values, errors, touched, handleChange, handleBlur, isSubmitting,
                                /* and other goodies */
                            }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                {touched.email && errors.email &&
                                                    <div className="error pink-txt f-11">{errors.email}</div>}
                                            </div>
                                            <div className="form-group position-relative">
                                                <Field type={type} name="password" placeholder="Password" className="form-control signup-input"
                                                />
                                                <div className="showpassword-block" id="password" onClick={() => handlePassword()}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.password && errors.password && errors.password) || error}</div>
                                            </div>
                                            <div className="forgot-block text-center mt-3 mb-2">
                                                <button className="forgot-link trans_button">
                                                    <span>Forgot Password ?</span>
                                                </button>
                                            </div>
                                            <div className="form-group text-center">
                                                <button className="min-width-270 pinkline-btn signup-btn btn mt-4 text-uppercase rounded-pill" type="submit" disabled={isSubmitting}>
                                                    Sign in
                                                            </button>
                                            </div>

                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUpSignInComponent;