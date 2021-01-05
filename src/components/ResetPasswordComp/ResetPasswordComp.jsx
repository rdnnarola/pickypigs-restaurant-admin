import React, { useState } from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch} from "react-redux";
import showpassword from "../../assets/images/eye_icon.svg";
import {resetPassword } from "../../redux/actions/generalActions";
import './ResetPasswordComp.scss';
import { useHistory, useParams } from "react-router-dom";


const phoneRegExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const validationSchemaForLogin = Yup.object().shape({
    newPassword: Yup
        .string()
        .label('Password')
        .required('Required')
        .min(8, 'Seems a bit short(atleast 8 characters)...')
        .max(16, 'We prefer insecure system, try a shorter password.')
        .matches(phoneRegExp, 'Password should Have 1 Uppercase,1 Lowercase,1 digit,1 special characte'),
    
    confirmPassword: Yup
        .string()
        .required()
        .label('Confirm password')
        .test('passwords-match', 'Passwords must match ya fool', function(value) {
        return this.parent.newPassword === value;
        }),
         
});

const ResetPasswordComp = () => {

    const dispatch = useDispatch();
    const params=useParams();
    const history = useHistory();
    const [type, setType] = useState("password")
    const [confirmType, setConfirmType] = useState("password")
    const [error, setError] = useState(null)
	let  mytoken  = params.token;

   
    const handleSavePassword = (input) => {
        let obj = {
            token:mytoken,
            newPassword: input.newPassword,
            confirmPassword: input.confirmPassword
        }
        dispatch(resetPassword(obj, history))
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
                      
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="signin-form">
                        <div>
                        <h5 className="text-center signindash-heading brandon-Bold mb-4">RESET PASSWORD</h5>
                        <Formik
                            initialValues={{ newPassword: '',confirmPassword:'' }}
                            validationSchema={validationSchemaForLogin}
                            onSubmit={(values) => {
                                console.log('values => ', values);
                                handleSavePassword(values)
                            }}
                        >
                            {({
                                values, errors, touched, handleChange, handleBlur, isSubmitting,
                                /* and other goodies */
                            }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            
                                            <div className="form-group position-relative">
                                                <Field type={type} name="newPassword" placeholder="New Password" className="form-control signup-input"
                                                />
                                                <div className={`showpassword-block ${type=== "password"?null:"show"}`} id="newPassword" onClick={() => handlePassword()}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.newPassword && errors.newPassword && errors.newPassword) || error}</div>
                                            </div>
                                            <div className="form-group position-relative">
                                                <Field type={confirmType} name="confirmPassword" placeholder="Confirm new password" className="form-control signup-input"
                                                />
                                                <div className={`showpassword-block ${confirmType=== "password"?null:"show"}`} id="confirmPassword" onClick={handleConfirmPassword}>
                                                    <img src={showpassword} className="img-fluid" alt="showpassword" />
                                                </div>
                                                <div className="error pink-txt f-11">{(touched.confirmPassword && errors.confirmPassword && errors.confirmPassword) || error}</div>
                                            </div>
                                            
                                            <div className="form-group text-center">
                                                <button className="min-width-270 pinkline-btn signup-btn btn mt-4 text-uppercase rounded-pill" type="submit" >
                                                    Save Password
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
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            </section>
        </>
    )
}

export default ResetPasswordComp;