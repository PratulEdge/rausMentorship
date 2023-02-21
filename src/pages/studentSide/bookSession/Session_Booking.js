import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, Label, DropdownToggle, Input, UncontrolledDropdown, Form } from 'reactstrap';
import { Button, FormFeedback, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import { mentorSessions } from '../../../store/actions';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteSession } from '../../../store/actions';



// Base Example
const Session_Booking = (props) => {


    const [isOpensa, setIsOpensa] = useState(false);

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            session_id: '' || '',
            status: '5' || '',
            cancel_reason: '' || '',
        },
        validationSchema: Yup.object({
            cancel_reason: Yup.string().required("Please Enter the Reason for Cancellation"),
        }),
        onSubmit: (values) => {
            console.log(values, "Submit valuesas")
            setmodal_varying2(false);
            validation.resetForm();
            dispatch(deleteSession(values, props.history));
        }
    });

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader className="align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Book Session</h4>
                                </CardHeader>
                                {/* <PreviewCardHeader title="Horizontal Form" /> */}
                                <CardBody>
                                    <div className="live-preview">
                                        <form action="#">
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="nameInput" className="form-label">Category</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <div className="mb-3">
                                                        <Input
                                                            name="subject_expert"
                                                            type="select"
                                                            className="form-select"
                                                            id="subject_expert_field"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={
                                                                validation.values.subject_expert || ""
                                                            }
                                                        >
                                                            <option value="Select Category" >Select Category</option>
                                                            {/* {subjectExpertData?.map((item, key) => (
                                                                <React.Fragment key={key}>
                                                                    <option value={item.id} key={key}>{item.title}</option>
                                                                </React.Fragment>
                                                            ))} */}
                                                        </Input>
                                                        {validation.touched.subject_expert &&
                                                            validation.errors.subject_expert ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.subject_expert}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <Label htmlFor="websiteUrl" className="form-label">Mentor Name</Label>
                                                </Col>
                                                <Col lg={9} >
                                                    <div className="mb-3">
                                                        <Input
                                                            name="mentor_id"
                                                            type="select"
                                                            className="form-select"
                                                            placeholder='Select Mentor'
                                                            id="mentor-field"
                                                            onChange={validation.handleChange}
                                                            onBlur={validation.handleBlur}
                                                            value={
                                                                validation.values.mentor_id || ""
                                                            }
                                                        >
                                                            <option value="Select name" >Select Name</option>
                                                            {/* {subjectFilterData.map((item, key) => (
                                                                <React.Fragment key={key}>
                                                                    <option value={item.id} key={key}>{item.name}</option>
                                                                </React.Fragment>
                                                            ))} */}
                                                        </Input>
                                                        {validation.touched.mentor_id &&
                                                            validation.errors.mentor_id ? (
                                                            <FormFeedback type="invalid">
                                                                {validation.errors.mentor_id}
                                                            </FormFeedback>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                            {isOpensa ? <Row>
                                                <Col>
                                                    <Card className='card-bg-session'>
                                                        <Row>
                                                            {/* {indiMentorAvailData.map((avail, index) => {
                                                                console.log(avail.is_active, "book value new")
                                                                if (new Date(avail.available_date_time) > new Date() && avail.is_active === true && avail.is_booked === false) {
                                                                    return (
                                                                        <Col lg={4} key={index}>
                                                                            <Button className="btn-soft-secondary sub-dt" onClick={() => setButtonValue(avail.available_date_time)}>{new Date(avail.available_date_time).toLocaleString('en-US')}</Button>
                                                                        </Col>
                                                                    )
                                                                }
                                                            })} */}
                                                        </Row>
                                                        <Link to="/mentor-avail" className='add-Avail'>
                                                            <i className="ri-add-fill me-1 align-bottom"></i>Add new Availibility
                                                        </Link>
                                                    </Card>
                                                </Col>
                                            </Row> : ""}
                                            <Row className="mb-3">
                                                <Col lg={3} >
                                                    <label htmlFor="meassageInput" className="form-label">Message</label>
                                                </Col>
                                                <Col lg={9} >
                                                    <textarea className="form-control" id="meassageInput" rows="3" placeholder="Enter your message"></textarea>
                                                </Col>
                                            </Row>
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary">Book Session</button>
                                            </div>
                                        </form>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};


export { Session_Booking };
