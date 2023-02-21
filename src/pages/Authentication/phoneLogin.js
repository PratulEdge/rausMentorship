import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
//redux
import { useSelector, useDispatch } from "react-redux";

// actions
import { loginUser, socialLogin, resetLoginFlag } from "../../store/actions";

import { phoneLoginUser } from "../../store/actions";


export default function PhoneLogin(props) {

    // const [loginOption, setLoginOption] = useState('email')

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Account.user,
    }));

    const [errorVal, setErrorVal] = useState('');

    const handleChange = (event) => {
        let mobile = event.target.value;
        if (mobile.length === 0 || (mobile.length <= 10 && mobile.length >= 1 && Number(mobile[0]) >= 5)) {
            validation.handleChange(event);
            setErrorVal(" ")
        } else if (Number(mobile[0]) < 5) {
            setErrorVal("First digit should be greater than 5")

        }
    };

    // const handleChange = e => {
    //     const target = e.target;
    //     if (target.checked) {
    //         setLoginOption(target.value);
    //     }
    // };

    const [userLogin, setUserLogin] = useState([]);

    useEffect(() => {
        if (user && user) {
            setUserLogin({
                mobile: user.user.mobile,
            });
        }
    }, [user]);

    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
            mobile: userLogin.mobile || "8127544678" || '',
        },
        validationSchema: Yup.object({
            mobile: Yup.string().required("Please Enter Your Mobile No."),
        }),
        onSubmit: (values) => {
            console.log("on Submit")
            dispatch(phoneLoginUser(values, props.history));
            localStorage.setItem("mobile", values.mobile);
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
    return (
        <>

            <div className="p-2 mt-4">

                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}
                    action="#">


                    <div className="mb-3">
                        <Label htmlFor="mobile" className="form-label">Phone No.</Label>
                        <Input
                            name="mobile"
                            className="form-control"
                            placeholder="Enter Phone Number"
                            type="number"
                            onChange={handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.mobile || ""}
                            invalid={
                                validation.touched.mobile && validation.errors.mobile ? true : false
                            }
                        />
                        <div className='mb-error'>
                            {errorVal}
                        </div>
                        {validation.touched.mobile && validation.errors.mobile ? (
                            <FormFeedback type="invalid">{validation.errors.mobile}</FormFeedback>
                        ) : null}
                    </div>

                    <div className="mt-4">
                        <Button color="success" className="btn btn-success w-100" type="submit">Sign In</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}