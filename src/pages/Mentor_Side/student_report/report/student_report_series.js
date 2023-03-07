import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardBody, CardHeader, Collapse, Col, Container, Accordion, AccordionItem, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { projects, document } from '../../../../common/data';
// import MentorProfileSession from '../../MentorProfile/Session/sessions';
import { studentProfile } from '../../../../store/actions';
import { Ms_studentProfile } from '../../../../store/actions';
import { preTestSeriesProfile } from '../../../../store/actions';
import { preTestListProfile } from '../../../../store/actions';
import StudentProfileSession from '../../../Admin_Mentor/student/StudentProfile/Session/sessions';
// import StudentProfileSession from '../../Session/sessions';


const Ms_StudentProfile_Series = (props) => {

    ///

    const [testList, setTestList] = useState([])
    const [series_id, setSeries_id] = useState('')
    const [examType, setExamType] = useState('prelims')
    const [col1, setcol1] = useState(false);
    const t_col1 = () => {
        setcol1(!col1);
    };

    ///

    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    const { id } = useParams();
    console.log(id, "id")
    const dispatch = useDispatch();
    const { ms_studentData } = useSelector((state) => ({
        ms_studentData: state.Ms_StudentProfileData.ms_studentData,
    }));

    //
    const { preTestSeriesData } = useSelector((state) => ({
        preTestSeriesData: state.PreTestSeriesData.preTestSeriesData,
    }));

    ///
    const { preTestListData } = useSelector((state) => ({
        preTestListData: state.PreTestListData.preTestListData,
    }));
    ///
    //
    const email = "ecv1@yopmail.com";
    console.log(preTestSeriesData, email, preTestListData, "Pre Series data")
    useEffect(() => {
        dispatch(Ms_studentProfile(id));
        dispatch(preTestSeriesProfile(email, examType));
    }, [dispatch, examType]);

    useEffect(() => {
        // console.log("sddskad")
        dispatch(preTestListProfile(email, examType, series_id));
        // setTestList(preTestListData)
    }, [dispatch, series_id])

    function handleTestClick() {
        console.log("Clicked pre")
        setSeries_id('')
        toggleTab('1');
        setExamType('prelims');
        setOpenIndexes([]);
        preTestSeriesProfile(email, examType);

    }
    function handleMainsTestClick() {
        console.log("Clicked mains")
        setSeries_id('')
        toggleTab('2');
        setExamType('mains');
        setOpenIndexes([]);
        preTestSeriesProfile(email, examType);

    }


    // AccordionClick Ui

    const [openIndexes, setOpenIndexes] = useState([]);
    console.log(openIndexes, "openIndex")

    const handleAccordionClick = (index) => {
        setOpenIndexes((openIndexes) => {
            const currentIndex = openIndexes.indexOf(index);
            console.log(currentIndex, "currentIndex")
            const isCurrentlyOpen = currentIndex !== -1;
            if (isCurrentlyOpen) {
                // if clicked item is already open, close it
                return [...openIndexes.slice(0, currentIndex), ...openIndexes.slice(currentIndex + 1)];
            } else {
                // if clicked item is closed, close all others and open the clicked item
                return [index];
            }
        });
    };
    //

    console.log(examType, series_id, "exam type")

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
                            {ms_studentData.map((stu_val) => {
                                return (
                                    <Col>
                                        <div className="p-2">
                                            <h3 className="text-white mb-1">{stu_val.name}</h3>
                                            <p className="text-white-75">Student</p>
                                        </div>
                                    </Col>

                                )
                            })}
                        </Row>
                    </div>
                    <Row>
                        {/* {ms_studentData.map((stu_val) => {
                            return ( */}
                                <Col lg={12}>
                                    <div>
                                        <div className="d-flex">
                                            <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                                role="tablist">
                                                <NavItem>
                                                    <NavLink
                                                        href="#overview-tab"
                                                        className={classnames({ active: activeTab === '1' })}
                                                        onClick={handleTestClick}
                                                    >
                                                        <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span
                                                            className="d-none d-md-inline-block">Prelims</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        href="#activities"
                                                        className={classnames({ active: activeTab === '2' })}
                                                        onClick={handleMainsTestClick}
                                                    >
                                                        <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                            className="d-none d-md-inline-block">Mains</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                        <TabContent activeTab={activeTab} className="pt-4">
                                            <TabPane tabId="1">
                                                <Row>
                                                    <Col lg={12}>
                                                        <div>
                                                            <Row>
                                                                <Col xxl={3}>
                                                                    <Card>
                                                                        <CardBody>
                                                                            <h5 className="card-title mb-3">{examType.charAt(0).toUpperCase() + examType.slice(1)} Test Series List</h5>
                                                                            <Accordion className="lefticon-accordion custom-accordionwithicon accordion-border-box" id="accordionlefticon">
                                                                                {preTestSeriesData.map((rpt_val, index) => (
                                                                                    <AccordionItem key={index}>
                                                                                        <h2 className="accordion-header" id={`heading${index}`}>
                                                                                            <button
                                                                                                className={classnames("accordion-button", { collapsed: openIndexes.indexOf(index) === -1 })}
                                                                                                type="button"
                                                                                                onClick={() => { handleAccordionClick(index); setSeries_id(rpt_val.test_series_id) }}
                                                                                                style={{ cursor: "pointer" }}
                                                                                            >
                                                                                                {rpt_val.series_title} , {rpt_val.test_series_id}
                                                                                            </button>
                                                                                        </h2>
                                                                                        <Collapse isOpen={openIndexes.indexOf(index) !== -1} className="accordion-collapse">
                                                                                            {
                                                                                                preTestListData?.map((rpt_tst) => (
                                                                                                    <div className="accordion-body">
                                                                                                        <li key={rpt_tst.id}>
                                                                                                            <Link to={{pathname:`/student-test-series-report/${rpt_tst.attempt_id}`, state: { email: email, examType: examType }}}>{rpt_tst.test_title}{rpt_tst.attempt_id}</Link>
                                                                                                        </li>
                                                                                                    </div>
                                                                                                ))
                                                                                            }
                                                                                        </Collapse>
                                                                                    </AccordionItem>
                                                                                ))}
                                                                            </Accordion>
                                                                        </CardBody>
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2">
                                                <Row>
                                                    <Col lg={12}>
                                                        <div>
                                                            <Row>
                                                                <Col xxl={3}>
                                                                    <Card>
                                                                        <CardBody>                                                                            
                                                                            <h5 className="card-title mb-3">{examType.charAt(0).toUpperCase() + examType.slice(1)} Test Series List</h5>
                                                                            <Accordion className="lefticon-accordion custom-accordionwithicon accordion-border-box" id="accordionlefticon">
                                                                                {preTestSeriesData.map((rpt_val, index) => (
                                                                                    <AccordionItem key={index}>
                                                                                        <h2 className="accordion-header" id={`heading${index}`}>
                                                                                            <button
                                                                                                className={classnames("accordion-button", { collapsed: openIndexes.indexOf(index) === -1 })}
                                                                                                type="button"
                                                                                                onClick={() => { handleAccordionClick(index); setSeries_id(rpt_val.test_series_id) }}
                                                                                                style={{ cursor: "pointer" }}
                                                                                            >
                                                                                                {rpt_val.series_title} , {rpt_val.test_series_id}
                                                                                            </button>
                                                                                        </h2>
                                                                                        <Collapse isOpen={openIndexes.indexOf(index) !== -1} className="accordion-collapse">
                                                                                            {
                                                                                                preTestListData?.map((rpt_tst) => (
                                                                                                    <div className="accordion-body">
                                                                                                        <li key={rpt_tst.id}>
                                                                                                            <Link to={{pathname:`/student-mains-test-report/${rpt_tst.attempt_id}`, state: { email: email, examType: examType }}}>{rpt_tst.test_title}{rpt_tst.attempt_id}</Link>
                                                                                                        </li>
                                                                                                    </div>
                                                                                                ))
                                                                                            }
                                                                                        </Collapse>
                                                                                    </AccordionItem>
                                                                                ))}
                                                                            </Accordion>
                                                                        </CardBody>
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>
                                    </div>
                                </Col>
                            {/* )
                        })} */}

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ms_StudentProfile_Series;