import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row, Button, Form } from 'reactstrap';
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


const OtpAuth = (props) => {

    const [OTP, setOTP] = useState("");

    const handleChange = (OTP) => {
        setOTP(OTP)
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
            mobile: userOTP.mobile|| userMobile || '',
            email: userOTP.email || userMail || '',
            token: userOTP.token || "" || '',
        },

        validationSchema: Yup.object({
            // mobile: Yup.number().required("Please Enter Your Mobile Number"),
            // email: Yup.string().required("Please Enter Your Email"),
            token: Yup.string().required("Please Enter Your OTP"),
        }),
        onSubmit: (values) => {
            console.log("fvdjsfvdsjfjdsfjsfsjfdsjfdsjfdjfdsjfdsjfbj")
            console.log(values, "values")
            dispatch(otpverify(values, props.history));
        }
    });
    console.log(validation.values, "validation")
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
                                                        <OTPInput
                                                            value={OTP}
                                                            onChange={handleChange}
                                                            id="token"
                                                            name="token"
                                                            type="number"
                                                            separator={"-"}
                                                            inputStyle={"col-2 otp-input text-center"}
                                                            numInputs={6}
                                                            otpType="number"
                                                            disabled={false}
                                                        />
                                                    </Row>
                                                    <div className="mt-3">
                                                    <Button color="success" className="w-100" type="submit" >Confirm</Button>
                                                </div>
                                                </Form>
                                               
                                                <div className="mt-4 text-center">
                                                    <p className="mb-0">Didn't receive a code ? <Link to="/auth-pass-reset-basic" className="fw-semibold text-primary text-decoration-underline">Resend</Link> </p>
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