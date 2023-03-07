import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row, Button, FormFeedback, Form } from 'reactstrap';
import ParticlesAuth from "./ParticlesAuth";
import { useSelector, useDispatch } from 'react-redux';
import OTPInput from 'react-otp-input';
import { otpverify } from '../../store/actions'
import { ToastContainer } from 'react-toastify';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
//import images
// import logoLight from "../../../assets/images/logo-light.png";
import TitleHead from './TitleHead';
import logoImg from '../../assets/img_raus/rauias_logo.png'
import { number } from 'yup';
import { resendOtp } from '../../store/actions';


const OtpAuth = (props) => {

    const [OTP, setOTP] = useState("");
    const [timer, setTimer] = useState(30);
    const handleChange = (OTP) => {
        setOTP(OTP)
    }
    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => setTimer(timer - 1), 1000);
        }
    }, [timer]);
    function handleResendOtp() {
        dispatch(resendOtp());
        setTimer(30);
    }
    console.log(OTP)

    const userMail = localStorage.getItem('email')
    const userMobile = localStorage.getItem('mobile')

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Account.user,
    }));

    const [userOTP, setUserOTP] = useState([]);

    useEffect(() => {
        setUserOTP({
            mobile: userMobile,
            email: userMail,
            token: OTP,
        })
    }, [OTP]);
    console.log(userOTP, "otp-details")
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            token: userOTP.token || "" || '',
            mobile: userOTP.mobile || userMobile || '',
            email: userOTP.email || userMail || '',
        },

        validationSchema: Yup.object({
            token: Yup.string().required("Please Enter Your OTP"),
        }),
        onSubmit: (values) => {
            console.log(values, OTP, "values")
            dispatch(otpverify(values, props.history));
        }
    });
    const { error } = useSelector(state => ({
        error: state.Login.error,
    }));



    document.title = "OTP | Rau's - MentorShip";


    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <div className="auth-page-wrapper">
                <ParticlesAuth>
                    <div className="auth-page-content">
                        <Container>
                            <TitleHead />

                            <Row className="justify-content-center">
                                <Col md={8} lg={6} xl={5}>
                                    <Card className="mt-4">
                                        <CardBody className="p-4">
                                            <div className="mb-4">
                                                <div className="avatar-lg mx-auto">
                                                    <div className="logo-img text-primary display-5">
                                                        <img style={{ width: '100%' }} src={logoImg} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-2 mt-4">
                                                <div className="text-muted text-center mb-4 mx-lg-3">
                                                    <h4 className="">Enter OTP</h4>
                                                    <p>Please enter the 6 digit code sent to <span className="fw-semibold">{userMail}</span></p>
                                                </div>

                                                <Form
                                                    onSubmit={(e) => {
                                                        console.log("in submit")
                                                        e.preventDefault();
                                                        validation.handleSubmit();
                                                        return false;
                                                    }}
                                                    action="#">
                                                    <Row>
                                                        <div className='form-group'>
                                                            <OTPInput
                                                                id="token"
                                                                name="token"
                                                                type="number"
                                                                value={OTP}
                                                                onChange={handleChange}
                                                                separator={"-"}
                                                                inputStyle={"col-2 otp-input text-center"}
                                                                numInputs={6}
                                                                otpType="number"
                                                                disabled={false}
                                                                required
                                                            />
                                                            {validation.touched.token && validation.errors.token ? (
                                                                <FormFeedback type="invalid">{validation.errors.token}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Row>
                                                    <div className="mt-3">
                                                        <Button color="success" className="w-100" type="submit" >Confirm</Button>
                                                    </div>
                                                </Form>

                                                <div>
                                                    {timer === 0 ? (
                                                        <div className="mt-4 text-center">
                                                            <p className="mb-0">Didn't receive a code ? <Link to="#" onClick={handleResendOtp} className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
                                                        </div>
                                                    ) : (
                                                        <div className="mt-4 text-center">
                                                            <p className="mb-0">Resend code in {timer} seconds</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <p className="mb-0">Change Login Credential <Link to="/login" className="fw-semibold text-primary text-decoration-underline">SignIn</Link> </p>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ParticlesAuth >

            </div>
        </React.Fragment >
    );
};

export default OtpAuth;