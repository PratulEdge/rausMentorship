
import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import { ToastContainer } from 'react-toastify';
import {
    Label,
    Input,
    Button,
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormFeedback,
    Form,
} from "reactstrap";
import Select from "react-select";
import { Link } from 'react-router-dom';
import { SessionData } from './SessionData';
import { useFormik, yupToFormErrors } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { mentorDetail } from '../../../store/actions';
import { subjectExpert } from '../../../store/actions';
import { indiMentorAvail } from '../../../store/actions';
import { studentDetail } from '../../../store/actions';
import { sessionBooking } from '../../../store/actions';

const SessionList = (props) => {

    const [sortBy, setsortBy] = useState('');
    const [buttonValue, setButtonValue] = useState('');
    console.log(buttonValue, "button value selected kjk")
    const [time, setTime] = useState('')
    console.log(time, "time value clicked")

    console.log(sortBy, "sort by value")
    const [isOpensa, setIsOpensa] = useState(false);
    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);

    };

    const { studentData } = useSelector((state) => ({
        studentData: state.StudentUserData.studentData,
    }));
    const { indiMentorAvailData } = useSelector((state) => ({
        indiMentorAvailData: state.IndiMentorAvailData.indiMentorAvailData.detail,
    }))
    console.log(indiMentorAvailData, studentData, "Pratul Mentor Avail")
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => ({
        userData: state.UserData.userData,
    }));


    const { subjectExpertData } = useSelector((state) => ({
        subjectExpertData: state.SubjectExpertData.subjectExpertData.detail,
    }));
    const [selectedOption, setSelectedOption] = useState("");
    const [mentor_id, setMentor_id] = useState('')
    const handleOptionSelect = (event) => {
        console.log(event.target.value, "mentor catogery");
        validation.handleChange(event);
        setSelectedOption(event.target.value);
    };
    const handleOptionMentor = (event) => {
        validation.handleChange(event);
        setMentor_id(event.target.value)
        {event.target.value === 'Select name' ? setIsOpensa(false): setIsOpensa(true)}
        console.log("value selected")
    };
    const subjectFilterData = userData.filter((item1) => item1.subject_expert?.id === selectedOption);
    // const subjectFilterData2 = subjectExpertData.filter((item2) => item2.title === selectedOption);

    useEffect(() => {
        dispatch(indiMentorAvail(mentor_id));
    }, [mentor_id])
    useEffect(() => {
        dispatch(mentorDetail());
        dispatch(subjectExpert());
        dispatch(studentDetail());
    }, [dispatch]);
    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {

            mentor_id: mentor_id || '',
            subject_expert: selectedOption || '',
            student_id: sortBy.value || '',
            remarks: '' || '',
            available_date_time: buttonValue || '',
        },
        validationSchema: Yup.object({
            student_id: Yup.string().required("Please Enter a Student Name"),
            mentor_id: Yup.string().required("Please Enter a Mentor Name"),
            remarks: Yup.string().required("Please Enter a Remark"),
            subject_expert: Yup.string().required("Please Select Subject Catogery"),
            available_date_time: Yup.string().required("Please Select Date and Time"),
        }),
        onSubmit: (values) => {
            console.log(values, "Submit valuesas")
            dispatch(sessionBooking(values, props.history));
            // validation.resetForm();
        }
    });

    document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Session Detail" pageTitle="Sessions" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title mb-0 flex-grow-1">Session List</h4>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="hstack text-nowrap gap-2">
                                                <button
                                                    className="btn btn-info add-btn"
                                                    onClick={() => tog_list()}
                                                >
                                                    <i className="ri-add-fill me-1 align-bottom"></i> New Session
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                        <SessionData />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                        <ModalHeader className="bg-light p-3 col-12">
                            New Session
                            <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" style={{ float: 'right' }} >
                            </Button>
                        </ModalHeader>
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit(e);
                            console.log("in submit")
                            return false;
                        }}
                            action="#">
                            <ModalBody>
                                <Row>
                                    <Col lg={12} >
                                        <div className="mb-3">
                                            <Label className="form-label">Select Mentor Category</Label>
                                            <Input
                                                name="subject_expert"
                                                type="select"
                                                className="form-select"
                                                id="subject_expert_field"
                                                onChange={handleOptionSelect}
                                                onBlur={validation.handleBlur}
                                                value={
                                                    validation.values.subject_expert || ""
                                                }
                                            >
                                                <option value="Select Category" >Select Category</option>
                                                {subjectExpertData?.map((item, key) => (
                                                    <React.Fragment key={key}>
                                                        <option value={item.id} key={key}>{item.title}</option>
                                                    </React.Fragment>
                                                ))}
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
                                <Row>
                                    <Col lg={12} >
                                        <div className="mb-3">
                                            <Label className="form-label">Select Mentor</Label>
                                            <Input
                                                name="mentor_id"
                                                type="select"
                                                className="form-select"
                                                placeholder='Select Mentor'
                                                id="mentor-field"
                                                onChange={handleOptionMentor}
                                                onBlur={validation.handleBlur}
                                                value={
                                                    validation.values.mentor_id || ""
                                                }
                                            >
                                                <option value="Select name" >Select Name</option>
                                                {subjectFilterData.map((item, key) => (
                                                    <React.Fragment key={key}>
                                                        <option value={item.id} key={key}>{item.name}</option>
                                                    </React.Fragment>
                                                ))}
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
                                                {indiMentorAvailData.map((avail, index) => {
                                                    console.log(avail.is_active, "book value new")
                                                    if (new Date(avail.available_date_time) > new Date() && avail.is_active === true && avail.is_booked === false) {
                                                        return (
                                                            <Col lg={4} key={index}>
                                                                <Button className="btn-soft-secondary sub-dt" onClick={() => setButtonValue(avail.available_date_time)}>{new Date(avail.available_date_time).toLocaleString('en-US')}</Button>
                                                            </Col>
                                                        )
                                                    }
                                                })}
                                            </Row>
                                            <Link to="/mentor-avail" className='add-Avail'>
    <i className="ri-add-fill me-1 align-bottom"></i>Add new Availibility
  </Link>
                                        </Card>
                                    </Col>
                                </Row> : ""}
                                <Row>
                                    <Col lg={12} >
                                        <div className="mb-3">
                                            <Label className="form-label" >Student Name: </Label>
                                            <Select
                                                name='student_id'
                                                className=""
                                                id="student-name-field"
                                                selected={sortBy}
                                                onChange={(sortBy) => { setsortBy(sortBy) }}
                                                // options={sortbyname}
                                                value={sortBy || ""}
                                                // {studentData.map(())}
                                                options={studentData.map(option => {
                                                    return {
                                                        value: option.id,
                                                        label: option.name + "-" + option.mobile,
                                                    };
                                                })}

                                            >
                                            </Select>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} >

                                        <div className="mb-3">
                                            <Label className="form-label" >Comment: </Label>
                                            <textarea
                                                name="remarks"
                                                type="text"
                                                placeholder='Remark'
                                                className="form-control"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.remarks || ""}
                                                invalid={
                                                    validation.touched.remarks && validation.errors.remarks ? true : false
                                                }
                                            />
                                            {validation.touched.remarks && validation.errors.remarks ? (
                                                <FormFeedback type="invalid">{validation.errors.remarks}</FormFeedback>
                                            ) : null}
                                        </div>
                                    </Col>
                                </Row>
                            </ModalBody>
                            <ModalFooter>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
                                    {/* <Button color="primary" onClick={() => tog_center()}>Center Modal</Button> */}
                                    <button type="submit" className="btn btn-success" onClick={() => setmodal_list(false)} id="add-btn">Create Session</button>
                                    {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
                                </div>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default SessionList;
