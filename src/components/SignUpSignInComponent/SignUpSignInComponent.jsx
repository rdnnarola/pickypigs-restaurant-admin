import React, { useState } from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch,useSelector} from "react-redux";
import showpassword from "../../assets/images/eye_icon.svg";
import { forgotPassword, getLogin } from "../../redux/actions/generalActions";
import './SignUpSignInComponent.scss';
import SignUpModalComp from "../SignUpModalComp/SignUpModalComp";
import { useHistory } from "react-router-dom";
import CustomLoadingComp from "../CustomLoadingComp/CustomLoadingComp";

const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})/);

const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email').required('Email Required'),
    password:Yup
        .string()
        .label('Password')
        .required('Password Required')
        .min(8, 'Seems a bit short(Min 8 characters)...')
        .max(24, 'Please try a shorter password(Max 24 characters)...).')
        .matches(passwordRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),  
});
const validationSchemaForForgotPassword = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email').required('Email Required'),      
});
const SignUpSignInComponent = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [type, setType] = useState("password")
    const [error, setError] = useState(null)
    const [isLoginPage, setLoginPage] = useState(true)

    const [signUpModalshow, setSignUpModalshow] = useState(false);
    const handleClose = () => setSignUpModalshow(false);
    const handleShow = () => setSignUpModalshow(true);

    const handleLoginForm = (input) => {
        let obj = {
            email: input.email,
            password: input.password
        }
        dispatch(getLogin(obj, history))
    }

    const handlelForgotPassword=(input)=>{
        let obj = {
            email: input.email,
        }
        dispatch(forgotPassword(obj))
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
    let forgotPasswordData = useSelector((state)=>{
        return state.general.forgot_Password
    });
    let loading = useSelector((state)=>{
        return state.general.isLoading
    });



    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
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
                                <React.Fragment>
                            {loading&&loading?
                            <CustomLoadingComp/>
                            :
                                <SignUpModalComp show={signUpModalshow} onHide={handleClose} />
                            }
                            </React.Fragment>
                        </div>
                    </div>
                </div>
     
                <div className="col-md-6">
                    <div className="signin-form " >
                        {isLoginPage?
                        <React.Fragment>
                        {loading&&loading?
                        <CustomLoadingComp/>
                        :
                        <div>
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
                                                <button onClick={() =>{setLoginPage(false)}} className="forgot-link trans_button">
                                                    <span>Forgot Password ?</span>
                                                </button>
                                            </div>
                                            
                                                 <div className="form-group text-center">
                                                    <button className="min-width-270 pinkline-btn signup-btn btn mt-4 text-uppercase rounded-pill" type="submit" >
                                                        Sign in
                                                    </button>
                                                </div>
                                            
                                            

                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        </div>
                        }
                        </React.Fragment>
                        :
                    <React.Fragment>
                    {loading&&loading?
                    <CustomLoadingComp/>
                    :
                    <React.Fragment>
                     <h5 className="text-center signindash-heading brandon-Bold mb-4">RESET PASSWORD</h5>
                     <p className="f-15">
                         <span className="pr-2">Enter your email address in the for below and we will send you further instructions on how toreset your password.</span>
                     </p>
                    <Formik
                        initialValues={{ email: '', }}
                        validationSchema={validationSchemaForForgotPassword}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log('values => ', values);

                            handlelForgotPassword(values)
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
                                                <Field name="email" placeholder="Email" className="form-control signup-input" />
                                                {touched.email && errors.email &&
                                                    <div className="error pink-txt f-11">{errors.email}</div>}
                                            </div>
                                            <div className="forgot-block text-center mt-3 mb-2">
                                                <button onClick={() =>{setLoginPage(true)}} className="forgot-link trans_button">
                                                    <span>Sign In ?</span>
                                                </button>
                                            </div>
                                          <p> {forgotPasswordData&& forgotPasswordData.message}</p>
                                            <div className="form-group">
                                                <button className="pinkline-btn signup-btn btn mt-4 w-100 text-uppercase border-radius-25 " type="submit" disabled={isSubmitting}>
                                                    RESET PASSWORD
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </Form>
                            )}
                    </Formik>
                    </React.Fragment>
                     }
                     </React.Fragment>
                        }
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default SignUpSignInComponent;