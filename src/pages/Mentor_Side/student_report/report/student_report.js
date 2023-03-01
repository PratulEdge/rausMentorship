import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { projects, document } from '../../../../common/data';
// import MentorProfileSession from '../../MentorProfile/Session/sessions';
import { studentProfile } from '../../../../store/actions';
import { Ms_studentProfile } from '../../../../store/actions';
import { Pre_stud_report } from '../../../../store/actions';
import StudentProfileSession from '../../../Admin_Mentor/student/StudentProfile/Session/sessions';
// import StudentProfileSession from '../../Session/sessions';


const Ms_Student_Report = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [reportData, setReportData] = useState([])
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    const { id } = useParams();
    console.log(id, "id")
    const dispatch = useDispatch();
    const { pre_stud_report_Data } = useSelector((state) => ({
        pre_stud_report_Data: state.Pre_stud_report_Data.pre_stud_report_Data,
    }));

    console.log(reportData, " reportData report datd")
    useEffect(() => {
        setReportData(pre_stud_report_Data)
    }, [pre_stud_report_Data])

    useEffect(() => {
        dispatch(Pre_stud_report(id));
    }, [dispatch]);


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
                    <div className="pt-4 pb-lg-4">
                        <Row className="g-4">
                            {/* {reportData.score_distributions?.map((reportVal) => { */}
                            {/* return ( */}
                            <Col lg={9}>
                                <div className="p-2">
                                    <Row>
                                        <Col lg={4}>
                                            <h3 className="text-white mb-1">{reportData.test_taker_name}</h3>
                                            <p className="text-white-75">Student</p>
                                        </Col>
                                        <Col lg={8}>
                                            <div className="hstack text-white-50 gap-1">
                                                <div className="me-2 tst-name col">
                                                    Test Name <span>Test Report !</span><br />
                                                    1 <span>users have taken the test till now.</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={3} className="col-lg-auto order-last order-lg-0">
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
                        {/* <hr className="text-white hr-mg" /> */}
                        <Row className='pt-4'>
                            <Col lg={12}>
                                {reportData.score_distributions?.map((bas_val,key)=>{
                                    return(                                        
                                    <Row key={key}>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                           {bas_val.marks_obtained} / {bas_val.maximum_marks}
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Marks Obtained / Total Marks
                                        </div>

                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                            {bas_val.average_marks} / {bas_val.maximum_marks}
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Avg. Marks / Total Marks
                                        </div>

                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                            {bas_val.average_accuracy} / {bas_val.toppers_accuracy}
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Avg. Accuracy / Topper Accuracy
                                        </div>

                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                            {bas_val.average_time} / {bas_val.section_time_spent_str}
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Avg. Time Spend / Your Time Spend
                                        </div>

                                    </Col>
                                </Row>
                                    )
                                })}
                                
                            </Col>
                        </Row>
                        
                    </div>
                    {/* <hr className="text-white hr-mg" /> */}
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
                                                    className="d-none d-md-inline-block">over All</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggleTab('2'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Economy</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggleTab('3'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Environment</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '4' })}
                                                onClick={() => { toggleTab('4'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Geography</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '5' })}
                                                onClick={() => { toggleTab('5'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">History</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '6' })}
                                                onClick={() => { toggleTab('6'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">International Relations</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '7' })}
                                                onClick={() => { toggleTab('7'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Polity</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '8' })}
                                                onClick={() => { toggleTab('8'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Science and Technology</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                
                                <TabContent activeTab={activeTab} className="pd-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={12}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Over All Test Report</h5>
                                                        {/* <div className="table-responsive"> */}
                                                            <Row className='report-box'>
                                                                <Col lg={2} className="text-center">
                                                                    <div>
                                                                        34
                                                                    </div>
                                                                    <hr className="hr-mg" /> 
                                                                    <div>
                                                                        Marks Obtained
                                                                    </div>
                                                                </Col>
                                                                <Col lg={2} className="text-center">
                                                                    <div>
                                                                        34
                                                                    </div>
                                                                    <hr className="hr-mg" /> 
                                                                    <div>
                                                                        Marks Obtained
                                                                    </div>
                                                                </Col>
                                                                <Col lg={2} className="text-center">
                                                                    <div>
                                                                        34
                                                                    </div>
                                                                    <hr className="hr-mg" /> 
                                                                    <div>
                                                                        Marks Obtained
                                                                    </div>
                                                                </Col>
                                                                <Col lg={2} className="text-center">
                                                                    <div>
                                                                        34
                                                                    </div>
                                                                    <hr className="hr-mg" /> 
                                                                    <div>
                                                                        Marks Obtained
                                                                    </div>
                                                                </Col>
                                                                <Col lg={2} className="text-center">
                                                                    <div>
                                                                        34
                                                                    </div>
                                                                    <hr className="hr-mg" /> 
                                                                    <div>
                                                                        Marks Obtained
                                                                    </div>
                                                                </Col>
                                                                <Col lg={2} className="text-center">
                                                                    <div>
                                                                        34
                                                                    </div>
                                                                    <hr className="hr-mg" /> 
                                                                    <div>
                                                                        Marks Obtained
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            {/* <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Full Name :</th>
                                                                        <td className="text-muted">{stu_val.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">DOB :</th>
                                                                        <td className="text-muted">{new Date(stu_val.dob).toLocaleDateString('en-GB')}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Gender :</th>
                                                                        <td className="text-muted">{stu_val.gender === 'M' ? "Male" : "Female"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Mobile :</th>
                                                                        <td className="text-muted">{stu_val.mobile}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">{stu_val.email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Location :</th>
                                                                        <td className="text-muted">   </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Joining Date</th>
                                                                        <td className="text-muted">{new Date(stu_val.date_joined).toLocaleDateString('en-GB')}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table> */}
                                                        {/* </div> */}
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
                                                                {/* <td className="text-muted">{stu_val.guardian_name}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Full Address :</th>
                                                                {/* <td className="text-muted">{stu_val.address_1_line_1}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">10th :</th>
                                                                {/* <td className="text-muted">{stu_val.cgp},{stu_val.institute}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Graduation :</th>
                                                                {/* <td className="text-muted">{stu_val.qualification} ,{stu_val.percentage}% ,{stu_val.institute}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Number Of Attempts :</th>
                                                                {/* <td className="text-muted">{stu_val.number_of_attempts}</td> */}
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Prev Civil Attempt :</th>
                                                                {/* <td className="text-muted">{stu_val.prev_civil_attempt}</td> */}
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
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="6">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="7">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="8">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Test Reports</h5>
                                                <div className="table-responsive">
                                                    <Table className="table-borderless mb-0">

                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ms_Student_Report;