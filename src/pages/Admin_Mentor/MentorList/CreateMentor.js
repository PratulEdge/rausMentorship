import React, { useState, useEffect } from "react";
//redux
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Button,Modal, ModalHeader, ModalBody, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { mentorCreateUser } from "../../../store/actions";
import { ToastContainer } from 'react-toastify';

export default function CreateMentor(props) {

    console.log("in function")
    const [state_id, setState_id] = useState('')
    const [selected, setSelected] = useState('')
    const [qualification, setQualifilcation] = useState('')
    const [address, setAddress] = useState('')
    const [profession, setProfession] = useState('')
    const dispatch = useDispatch();
    function refreshPage() {
        // window.location.reload(false);
        setmodal_list(false);
      }

    const [error, setError] = useState('');
      console.log(error)

    const handleChange = (event) => {
        let mobile = event.target.value;
        if (mobile.length === 0 || (mobile.length <= 10 && mobile.length >= 1 && Number(mobile[0]) >= 5)) {
          validation.handleChange(event);
          setError(" ")
        }else if(Number(mobile[0]) < 5){
            setError("First digit should be greater than 5")

        }
      };

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
            console.log("mentor addded")
            dispatch(mentorCreateUser(values, props.history));            
            // window.location.reload(false);
        }
    });

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered>
             <ToastContainer closeButton={false} />
            <ModalHeader className="bg-light p-3 col-12">
                Add Mentor
                <Button type="button" onClick={props.toggle} className="btn-close" aria-label="Close" style={{ float: 'right' }} >
                </Button>
            </ModalHeader>
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
                            onChange={handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.mobile || ""}
                            invalid={
                                validation.touched.mobile && validation.errors.mobile ? true : false
                            }
                        />
                        <div className='mb-error'>
                            {error}
                        </div>
                        {validation.touched.mobile && validation.errors.mobile ? (
                            <FormFeedback type="invalid">{validation.errors.mobile}</FormFeedback>
                        ) : null}
                    </div>
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={props.toggle}>Close</button>

                        <button type="submit" className="btn btn-success" onClick={refreshPage}>Add Mentor</button>
                    </div>
                </form>
            </ModalBody>
        </Modal>
    );
}