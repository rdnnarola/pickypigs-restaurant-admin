import React,{useState} from "react";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import showpassword from "../../assets/images/eye_icon.svg";
import { getLogin } from "../../redux/actions/generalActions";
import './SignUpSignInComponent.scss';


const validationSchemaForLogin = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup
        .string()
        .label('Password')
        .required('Required')
        .min(2, 'Seems a bit short...')
        .max(10, 'We prefer insecure system, try a shorter password.')
});
const SignUpSignInComponent=()=>{
    const dispatch=useDispatch();
    const [type, setType] = useState("password")
    const [error, setError] = useState(null)

    const handleLoginForm = (input) => {
        let obj = {
            email: input.email,
            password: input.password
        }
        dispatch(getLogin(obj))
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
      
    return(
            <>
        
                <section className="signin_signup_container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 signup_left">
                            <h1>THE ULTIMATE</h1>
                            <h1>FOOD FINDING</h1>
                            <h1>APPLICATION</h1>
                            <p>bridging the gap between you and your perfect guest. Your allergy, calorie,macro and digital menu solution.</p>
                            <p>Digital menus personalised by allergy requirements, dietary preferences and lifestyle choices. Let your customer easily discover your venue and dishes, in a safe, transparent and accessible way. Support your teams and guests in making the best choices in what and where they do or don't want to eat.</p>
                            <div className="form-group">
                                <button className="pinkline-btn signup-btn btn mt-4 w-50 text-uppercase rounded-pill">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="signIn_Form">
                                <h5 className="text-center">SIGN IN TO YOUR DASHBOARD</h5>
                                <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validationSchema={validationSchemaForLogin}
                                    onSubmit={(values) => {
                                        console.log('values => ', values);
                                        handleLoginForm(values)
                                    }}
                                >
                                    {({
                                        values, errors,touched, handleChange, handleBlur,isSubmitting,
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
                                                        <div className="forgot-block text-center mt-3 mb-3">
                                                            <button  className="forgot-link trans_button">
                                                                <span>Forgot Password ?</span>
                                                            </button>
                                                        </div>
                                                        <div className="form-group text-center">
                                                            <button className="pinkline-btn signup-btn btn mt-4 w-50 text-uppercase rounded-pill" type="submit" disabled={isSubmitting}>
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
                </section>
           
            </>
        )
    }

export default SignUpSignInComponent;