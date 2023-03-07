import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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


const Ms_Student_Mains_Report = (props) => {

    const [activeTab, setActiveTab] = useState('1');
    const [reportData, setReportData] = useState([])
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const location = useLocation();
    // const { email, examType } = location.state;
    const examType = location.state?.examType;
    const email = location.state?.email;
    const { id } = useParams();
    // console.log(props.location.state , "fghsfgjfgj");
    // const examType = props.location.state && props.location.state.examType;
    // const { examType } = props.location.state?.examType;
    console.log(id,examType,email, "id sdhkshdksahdkjsadksa")
    const dispatch = useDispatch();
    const { pre_stud_report_Data } = useSelector((state) => ({
        pre_stud_report_Data: state.Pre_stud_report_Data.pre_stud_report_Data,
    }));

    console.log(reportData, " reportData report datd")
    useEffect(() => {
        setReportData(pre_stud_report_Data)
    }, [pre_stud_report_Data])

    useEffect(() => {
        dispatch(Pre_stud_report(id,email,examType));
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
                                {/* {reportData.score_distributions?.map((bas_val,key)=>{
                                    return(                                         */}
                                    <Row>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                           {/* {bas_val.marks_obtained} / {bas_val.maximum_marks} */}
                                           20/100
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Marks Obtained / Total Marks
                                        </div>

                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                            {/* {bas_val.average_marks} / {bas_val.maximum_marks} */}
                                            12/100
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Avg. Marks / Total Marks
                                        </div>

                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                            {/* {bas_val.average_accuracy} / {bas_val.toppers_accuracy} */}
                                            40/60
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Avg. Accuracy / Topper Accuracy
                                        </div>

                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className='text-white num-font'>
                                            {/* {bas_val.average_time} / {bas_val.section_time_spent_str} */}
                                            50 sec / 1 min 10 sec
                                        </div>
                                        <hr className="text-white hr-mg" />
                                        <div className='text-white fnt-16'>
                                        Avg. Time Spend / Your Time Spend
                                        </div>

                                    </Col>
                                </Row>
                                    {/* )
                                })} */}
                                
                            </Col>
                        </Row>
                        
                    </div>
                    {/* <hr className="text-white hr-mg" /> */}
                    
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ms_Student_Mains_Report;