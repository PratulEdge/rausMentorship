import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';
import ParticlesAuth from "./ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { withRouter, Link } from "react-router-dom";

import PhoneLogin from './phoneLogin';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, socialLogin, resetLoginFlag } from "../../store/actions";

import TitleHead from './TitleHead';

const Login = (props) => {
    // const {active, setActive } = useState("emailLogin");

    const [loginOption, setLoginOption] = useState('email')

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Account.user,
    }));

    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setLoginOption(target.value);
        }
    };

    const [userLogin, setUserLogin] = useState([]);

    useEffect(() => {
        if (user && user) {
            setUserLogin({
                email: user.user.email,
                password: user.user.confirm_password
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "adminams@yopmail.com" || '',
            // password: userLogin.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            // password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values, props.history));
            localStorage.setItem("email", values.email)

        }
    });

    const { error } = useSelector(state => ({
        error: state.Login.error,
    }));

    useEffect(() => {
        setTimeout(() => {
            dispatch(resetLoginFlag());
        }, 3000);
    }, [dispatch, error]);

    document.title = "Sign Up | Rau's MentorShip";
    return (

        <React.Fragment>
            <ToastContainer closeButton={false} />
            <ParticlesAuth>
                <div className="auth-page-content">
                    <Container>
                        < TitleHead />
                        <Row className="justify-content-center">
                            <Col md={8} lg={6} xl={5}>
                                <Card className="mt-4">
                                    <CardBody className="p-4">
                                        <div className="text-center mt-2">
                                            <h5 className="text-primary">Welcome Back !</h5>
                                            <p className="text-muted">Sign in to continue to Rau's MentorShip.</p>
                                        </div>
                                        {error && error ? (<Alert color="danger"> {error} </Alert>) : null}

                                        <div className='col-12 mt-4'>
                                            <label className='col-6 log-option'>
                                                <input type="radio" value="email" checked={loginOption == 'email'} onChange={handleChange} />
                                                <span className='padd-lft'>Email</span>
                                            </label>
                                            <label className='col-6'>
                                                <input type="radio" value="phoneNo" checked={loginOption == 'phoneNo'} onChange={handleChange} />
                                                <span className='padd-lft'>Phone No.</span>
                                            </label>
                                        </div>
                                        {loginOption === "email" && (
                                            <div className="p-2 mt-4">

                                                <Form
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        validation.handleSubmit();
                                                        return false;
                                                    }}
                                                    action="#">


                                                    <div className="mb-3">
                                                        <Label htmlFor="email" className="form-label">Email</Label>
                                                        <Input
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Enter email"
                                                            type="email"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={validation.values.email || ""}
                                                            invalid={
                                                                validation.touched.email && validation.errors.email ? true : false
                                                            }
                                                        />
                                                        {validation.touched.email && validation.errors.email ? (
                                                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                        ) : null}
                                                    </div>
                                                    <div className="mt-4">
                                                        <Button color="success" className="btn btn-success w-100" type="submit">Sign In</Button>
                                                    </div>
                                                </Form>
                                            </div>
                                        )}

                                        {loginOption === "phoneNo" && (
                                            <PhoneLogin />
                                        )}


                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </ParticlesAuth>
        </React.Fragment>
    );
};

export default withRouter(Login);