import React, { useState, useEffect } from "react";
//redux
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {
    ModalBody,
    ModalFooter,
    Input,
    Label,
    FormFeedback,
    Button,
    Modal,
    ModalHeader,
} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { mentorCreateUser } from "../../../store/actions";
import { ToastContainer } from 'react-toastify';
import Flatpickr from "react-flatpickr";

export default function CreateMentor(props) {

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Account.user,
    }));
    const [userLogin, setUserLogin] = useState([]);
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (user && user) {
            setUserLogin({
                email: userLogin.user.email,
                name: userLogin.user.name,
                mobile: userLogin.user.mobile
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: '' || '',
            email: '' || '',
            mobile: '' || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().required("Please Enter Your Email"),
            mobile: Yup.number().required("Please Enter Your Mobile No."),
        }),
        onSubmit: (values) => {
            dispatch(mentorCreateUser(values, props.history));
        }
    });
    return (
        <>
        <ToastContainer closeButton={false} />
            <ModalBody>
                <form onSubmit={(e) => {
                    console.log("submit")
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                }}
                    action="#">

                    <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                        <label htmlFor="id-field" className="form-label">ID</label>
                        <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                    </div>

                    <div className="mb-3">
                        <Label className="form-label" >Mentor Name: </Label>
                        <Input
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.name || ""}
                            invalid={
                                validation.touched.name && validation.errors.name ? true : false
                            }
                        />
                        {validation.touched.name && validation.errors.name ? (
                            <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                        ) : null}
                    </div>

                    <div className="mb-3">
                        <Label className="dtl" >Email: </Label>
                        <Input
                            name="email"
                            type="email"
                            className="form-control"
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

                    <div className="mb-3">
                        <Label className="dtl" >Phone No.: </Label>
                        <Input
                            name="mobile"
                            type="number"
                            className="form-control"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.mobile || ""}
                            invalid={
                                validation.touched.mobile && validation.errors.mobile ? true : false
                            }
                        />
                        {validation.touched.mobile && validation.errors.mobile ? (
                            <FormFeedback type="invalid">{validation.errors.mobile}</FormFeedback>
                        ) : null}
                    </div>
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => { props.setmodal_list(false); }}>Close</button>
                       
                        <button type="submit" className="btn btn-success">Add Mentor</button>
                    </div>
                </form>
            </ModalBody>
        </>
    )
}