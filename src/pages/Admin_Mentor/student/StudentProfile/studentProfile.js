import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { projects, document } from '../../../../common/data';
import MentorProfileSession from '../../MentorProfile/Session/sessions';
import { studentProfile } from '../../../../store/actions';
import StudentProfileSession from './Session/sessions';


const StudentProfile = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');
   

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    const { id } = useParams();
    console.log(id, "id")

    const dispatch = useDispatch();
    const { studentData } = useSelector((state) => ({
        studentData: state.StudentProfileData.studentData,
    }));
    useEffect(() => {
        dispatch(studentProfile(id));
    }, [dispatch]);


    //
    console.log(new Date(studentData.dob).toLocaleDateString('en-GB'), "dtaet sjdj")
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

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">{studentData.name}</h3>
                                    <p className="text-white-75">Student</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle">{studentData.address_2_line_1},{studentData.address_2_line_2}</i></div>
                                        <div><i
                                            className="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>ID:- {studentData.student_id}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white-50 text-center">
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">2</h4>
                                            <p className="fs-14 mb-0">Total Session</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">1</h4>
                                            <p className="fs-14 mb-0">Total Hours</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="d-flex">
                                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#overview-tab"
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Basic Detail</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggleTab('2'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Full Detail</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggleTab('3'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Batch Detail</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <TabContent activeTab={activeTab} className="pt-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Basic Info</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Full Name :</th>
                                                                        <td className="text-muted">{studentData.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">DOB :</th>
                                                                        <td className="text-muted">{new Date(studentData.dob).toLocaleDateString('en-GB')}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Gender :</th>
                                                                        <td className="text-muted">{studentData.gender === 'M'? "Male": "Female"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Mobile :</th>
                                                                        <td className="text-muted">{studentData.mobile}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">{studentData.email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Location :</th>
                                                                        <td className="text-muted">   </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Joining Date</th>
                                                                        <td className="text-muted">{new Date(studentData.date_joined).toLocaleDateString('en-GB')}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Full Info</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">
                                                        <tbody>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Guardian Name :</th>
                                                                <td className="text-muted">{studentData.guardian_name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Full Address :</th>
                                                                <td className="text-muted"></td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">10th :</th>
                                                                <td className="text-muted">{studentData.cgp},{studentData.institute}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Graduation :</th>
                                                                <td className="text-muted">{studentData.qualification} ,{studentData.percentage}% ,{studentData.institute}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Number Of Attempts :</th>
                                                                <td className="text-muted">{studentData.number_of_attempts}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Prev Civil Attempt :</th>
                                                                <td className="text-muted">{studentData.prev_civil_attempt}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Batch Detail</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">
                                                        
                                                            <tbody>
                                                            {/* {studentData.batch_details.map((batch_value)=>{
                                                                return(
                                                                    <> */}
                                                                    {/* <tr>
                                                                <th className="ps-0" scope="row">Batch Name :</th>
                                                                <td className="text-muted">{studentData.batch_details.batch__name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Batch Type :</th>
                                                                <td className="text-muted">{studentData.batch_details.batch__type__name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Admission Date :</th>
                                                                <td className="text-muted">{studentData.batch_details.admission_date}</td>
                                                            </tr> */}
                                                                    {/* </>
                                                                )
                                                            
                                                            })} */}
                                                        </tbody>

                                                        
                                                        
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                    {/* <Col xxl={3}> */}
                    {/* <Card> */}
                    <StudentProfileSession />
                    {/* </Card> */}
                    {/* </Col> */}

                </Container>
            </div>
        </React.Fragment>
    );
};

export default StudentProfile;