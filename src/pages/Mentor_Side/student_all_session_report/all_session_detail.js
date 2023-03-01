import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import Flatpickr from "react-flatpickr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody, CardHeader, Collapse, Col, Container, Accordion, AccordionItem, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { projects, document } from '../../../common/data';
// import MentorProfileSession from '../../MentorProfile/Session/sessions';
// import { studentProfile } from '../../../../store/actions';
// import { Ms_studentProfile } from '../../../../store/actions';
// import { preTestSeriesProfile } from '../../../../store/actions';
// import { preTestListProfile } from '../../../../store/actions';
// import StudentProfileSession from '../../../Admin_Mentor/student/StudentProfile/Session/sessions';
// import StudentProfileSession from '../../Session/sessions';
import { student_past_session_detail } from '../../../store/actions';


const All_Student_Past_Session_Detail = () => {
    const { parseISO, format } = require('date-fns');
    const [selectedDates, setSelectedDates] = useState([]);
    const [student_prev_data, setStudent_prev_data] = useState([])
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id, "id student session")

    const { student_Past_Session_Data } = useSelector((state) => ({
        student_Past_Session_Data: state.Student_Past_Session_Data.student_Past_Session_Data,
    }));
    console.log(student_Past_Session_Data, "Student past data")
    useEffect(() => {
        dispatch(student_past_session_detail(id));
    }, [dispatch]);

    //


    useEffect(() => {
        const sortedData = [...student_Past_Session_Data].sort((a, b) => new Date(a.schedule_date_time) - new Date(b.schedule_date_time));
        setStudent_prev_data(sortedData);
    }, [student_Past_Session_Data])

    console.log(student_prev_data, "Student Session Data")


    const [openIndexes, setOpenIndexes] = useState([]);

    const handleAccordionClick = (index) => {
        const currentIndex = openIndexes.indexOf(index);
        const newIndexes = [...openIndexes];
        if (currentIndex === -1) {
            newIndexes.push(index);
        } else {
            newIndexes.splice(currentIndex, 1);
        }
        setOpenIndexes(newIndexes);
    };

    function handleDateSelection(selectedDates) {
        console.log("i am running")
        setSelectedDates(selectedDates);
        if (selectedDates.length === 0) {

        }

        const startDate = format(selectedDates[0], "yyyy-MM-dd");
        const endDate = format(selectedDates[1], "yyyy-MM-dd");

        const filteredItems = student_Past_Session_Data.filter((item) => {
            const itemDate = format(parseISO(item.schedule_date_time), "yyyy-MM-dd");
            console.log(itemDate, "date value");
            return itemDate >= startDate && itemDate <= endDate;
        });

        setStudent_prev_data(filteredItems);
        console.log(filteredItems, "filtered value");
    }
    //


    document.title = "Profile | Rau's MentorShip - Mentor Profile";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src="" alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src="" alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>
                        </Row>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Row className='mb-4'>
                                        <Col lg={6}>
                                            <h5 className="card-title mb-3">Student Previous Session Taken</h5>
                                        </Col>
                                        <Col lg={6}>
                                            <Col xs={5} xxl={2} lg={8} className="flt-rt">
                                                <Flatpickr
                                                    className="form-control"
                                                    placeholder="Select Date"
                                                    options={{
                                                        mode: 'range',
                                                        minDate: new Date().fp_incr(),
                                                        maxDate: new Date().fp_incr(-1),
                                                    }}
                                                    value={selectedDates}
                                                    onChange={handleDateSelection}
                                                />
                                            </Col>
                                        </Col>
                                    </Row>
                                    <Accordion className="lefticon-accordion custom-accordionwithicon accordion-border-box" id="accordionlefticon">
                                        {student_prev_data.map((stud_past_val, index) => (
                                            <AccordionItem key={index}>
                                                <h2 className="accordion-header" id={`heading${index}`}>
                                                    <button
                                                        className={classnames("accordion-button", { collapsed: openIndexes.indexOf(index) === -1 })}
                                                        type="button"
                                                        onClick={() => handleAccordionClick(index)}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        {new Date(stud_past_val.schedule_date_time).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})}
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={openIndexes.indexOf(index) !== -1} className="accordion-collapse">

                                                    <div className="accordion-body">
                                                        <Row>
                                                            <Col lg={6}>
                                                                <Row>
                                                                    <Col lg={5}>
                                                                        <h5> Mentor Name :-</h5>
                                                                    </Col>
                                                                    <Col lg={7}>
                                                                        {stud_past_val.mentor_name}
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Row>
                                                                    <Col lg={5}>
                                                                        <h5>Status :-</h5>
                                                                    </Col>
                                                                    <Col lg={7}>
                                                                        {stud_past_val.status === 4 ? 'Completed' : 'Cancelled'}
                                                                    </Col>
                                                                </Row>

                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <Row>
                                                                    <Col lg={5}>
                                                                        <h5>Schedule Date :-</h5>
                                                                    </Col>
                                                                    <Col lg={7}>
                                                                        {new Date(stud_past_val.schedule_date_time).toLocaleDateString('en-US')}
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Row>
                                                                    <Col lg={5}>
                                                                        <h5>Schedule Time :-</h5>
                                                                    </Col>
                                                                    <Col lg={7}>
                                                                        {new Date(stud_past_val.schedule_date_time).toLocaleTimeString('en-US')}
                                                                    </Col>
                                                                </Row>

                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <Row>
                                                                    <Col lg={5}>
                                                                        <h5>Mentor Feedback :-</h5>
                                                                    </Col>
                                                                    <Col lg={7}>
                                                                        {stud_past_val.feedback}
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <Row>
                                                                    <Col lg={5}>
                                                                        <h5> Student Feedback :-</h5>
                                                                    </Col>
                                                                    <Col lg={7}>
                                                                        {stud_past_val.feedback}
                                                                    </Col>
                                                                </Row>

                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Collapse>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default All_Student_Past_Session_Detail;