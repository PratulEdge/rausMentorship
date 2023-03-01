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


const Ms_StudentProfile_Series = () => {

    ///

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
        dispatch(preTestSeriesProfile(email));
        dispatch(preTestListProfile());
    }, [dispatch]);


    // AccordionClick Ui

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
                        {ms_studentData.map((stu_val) => {
                            return (
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
                                                            className="d-none d-md-inline-block">Prelims</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        href="#activities"
                                                        className={classnames({ active: activeTab === '2' })}
                                                        onClick={() => { toggleTab('2'); }}
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
                                                                            <h5 className="card-title mb-3">Prelims Test Series List</h5>
                                                                            <Accordion className="lefticon-accordion custom-accordionwithicon accordion-border-box" id="accordionlefticon">
                                                                                {preTestSeriesData.map((rpt_val, index) => (
                                                                                    <AccordionItem key={index}>
                                                                                        <h2 className="accordion-header" id={`heading${index}`}>
                                                                                            <button
                                                                                                className={classnames("accordion-button", { collapsed: openIndexes.indexOf(index) === -1 })}
                                                                                                type="button"
                                                                                                onClick={() => handleAccordionClick(index)}
                                                                                                style={{ cursor: "pointer" }}
                                                                                            >
                                                                                                {rpt_val.name} , {rpt_val.id}
                                                                                            </button>
                                                                                        </h2>
                                                                                        <Collapse isOpen={openIndexes.indexOf(index) !== -1} className="accordion-collapse">
                                                                                            {
                                                                                                preTestListData.map((rpt_tst) => (
                                                                                                    <div className="accordion-body">
                                                                                                        <li key={rpt_tst.id}>
                                                                                                        <Link to={`/student-test-series-report/${rpt_tst.attempt_id}`}>{rpt_tst.title}{rpt_tst.attempt_id}</Link>
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
                                                                            <h5 className="card-title mb-3">Mains Test Series List</h5>
                                                                            <ul>
                                                                                {preTestSeriesData.map((rpt_val) => (
                                                                                    <li key={rpt_val.id}>
                                                                                        <a href={`/${rpt_val.id}`}>{rpt_val.name}</a>
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
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
                            )
                        })}

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ms_StudentProfile_Series;