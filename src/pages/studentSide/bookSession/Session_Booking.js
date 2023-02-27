import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, Label, DropdownToggle, Input, UncontrolledDropdown, Form } from 'reactstrap';
import { Button, FormFeedback, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
// import { stuSubjectExpertDetail } from '../../../store/studentSide/subject_expert/actions';
import { stuSubjectExpertDetail } from '../../../store/actions'
import { stuMentorListDetail } from '../../../store/actions';
import { stuMentorAvailDetail } from '../../../store/actions';
import { book_Sessions } from '../../../store/actions';



// Base Example
const Session_Booking = (props) => {


    const [selectedOption, setSelectedOption] = useState("");
    const [mentor_id, setMentor_id] = useState('')
    const [isOpensa, setIsOpensa] = useState(false);
    const [buttonValue, setButtonValue] = useState('');


    const dispatch = useDispatch();
    const { stuSubjectExpertData } = useSelector((state) => ({
        stuSubjectExpertData: state.StuSubjectExpertData.stuSubjectExpertData,
    }));
    const { stuMentorListData } = useSelector((state) => ({
        stuMentorListData: state.StuMentorListData.stuMentorListData,
    }));
    const { stuMentorAvailData } = useSelector((state) => ({
        stuMentorAvailData: state.StuMentorAvailData.stuMentorAvailData,
    }));

    //
    const handleOptionSelect = (event) => {
        console.log(event.target.value, "subject catogery");
        validation.handleChange(event);
        setSelectedOption(event.target.value);
    };
    const handleOptionMentor = (event) => {
        validation.handleChange(event);
        setMentor_id(event.target.value)
        { event.target.value === 'Select name' ? setIsOpensa(false) : setIsOpensa(true) }
        console.log("value selected")
    };
    //

    useEffect(() => {
        dispatch(stuMentorAvailDetail(mentor_id))
    }, [mentor_id])

    useEffect(() => {
        dispatch(stuSubjectExpertDetail());
        dispatch(stuMentorListDetail());

    }, [dispatch]);
    const mentorFilterData = stuMentorListData.filter((item1) => item1.subject_expert?.id === selectedOption);
    //
    console.log(stuSubjectExpertData, stuMentorListData, stuMentorAvailData, "subject expert value")
    console.log(mentorFilterData, selectedOption, buttonValue, "filtered value")


    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            is_booked: true || ''
        },
        validationSchema: Yup.object({
            // cancel_reason: Yup.string().required("Please Enter the Reason for Cancellation"),
        }),
        onSubmit: (values) => {
            console.log(values, "Submit valuesas")
            console.log(buttonValue, "filtered value submit")
            dispatch(book_Sessions(values, props.history, buttonValue));
        }
    });

    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
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
                                        <Form onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit(e);
                                            console.log("in submit")
                                            return false;
                                        }}
                                            action="#">
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
                                                            onChange={handleOptionSelect}
                                                            onBlur={validation.handleBlur}
                                                            value={
                                                                validation.values.subject_expert || ""
                                                            }
                                                        >
                                                            <option value="Select Category" >Select Category</option>
                                                            {stuSubjectExpertData?.map((item, key) => (
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
                                                            onChange={handleOptionMentor}
                                                            onBlur={validation.handleBlur}
                                                            value={
                                                                validation.values.mentor_id || ""
                                                            }
                                                        >
                                                            <option value="Select name" >Select Name</option>
                                                            {mentorFilterData.map((item, key) => (
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
                                            {isOpensa ?
                                                <Row>
                                                    <Col lg={3}>
                                                    </Col>
                                                    <Col lg={9}>
                                                        <Card className='card-bg-session'>
                                                            <Row>
                                                                {stuMentorAvailData.map((avail, index) => {
                                                                    console.log(avail.is_active, "book value new")
                                                                    if (new Date(avail.available_date_time) > new Date() && avail.is_active === true && avail.is_booked === false) {
                                                                        return (
                                                                            <Col lg={4} key={index}>
                                                                                <Button className="btn-soft-secondary sub-dt" onClick={() => setButtonValue(avail.id)}>{new Date(avail.available_date_time).toLocaleString('en-US')}</Button>
                                                                            </Col>
                                                                        )
                                                                    }
                                                                })}
                                                            </Row>
                                                        </Card>
                                                    </Col>
                                                </Row> : ""}
                                            <div className="text-end">
                                                <button type="submit" className="btn btn-primary" >Book Session</button>
                                            </div>
                                        </Form>
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
