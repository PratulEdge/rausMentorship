import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';

import { useHistory } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
//Images
import profileBg from '../../../assets/images/profile-bg.jpg'
import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import { useSelector, useDispatch } from "react-redux";
import { projects, document } from '../../../common/data';
import MentorProfileSession from './Session/sessions';
import { mentorProfile } from '../../../store/actions';
import { identity } from '@fullcalendar/react';
import MyModal from '../Modals/mentorDef'


const MentorProfile = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    const toggleActivityTab = (tab) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };

    const dispatch = useDispatch();
    const { userData } = useSelector((state) => ({
        userData: state.MentorProfileData.userData,
    }));


    // console.log(userData.country.name, "country name")

    const { id } = useParams();
    console.log(id, "id")

    useEffect(() => {
        dispatch(mentorProfile(id));
    }, [dispatch]);

    //Modal Example
    const [showModal, setShowModal] = useState(false);
    // const [userId, setUserId] = useState(null);


    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
        // setUserId(id);
    }
    ///

    document.title = "Profile | Rau's MentorShip - Mentor Profile";

    return (
        <React.Fragment>
             <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar1} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">{userData.name}</h3>
                                    <p className="text-white-75">{userData.profession}</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>
                                            {userData.state?.name},{userData.country?.name}
                                        </div>
                                        <div>
                                            <i
                                                className="ri-building-line me-1 text-white-75 fs-16 align-middle"></i>Rau's IAS Study Circle
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
                                            <h4 className="text-white mb-1">2 hrs</h4>
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
                                    </Nav>
                                    <div className="flex-shrink-0">
                                        <a href={`/edit-mentor-profile/${id}`} className="btn btn-success"><i
                                            className="ri-edit-box-line align-bottom"></i> Edit Profile</a>
                                    </div>
                                </div>
                                <TabContent activeTab={activeTab} className="pt-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Info</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Full Name :</th>
                                                                        <td className="text-muted">{userData.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Mobile :</th>
                                                                        <td className="text-muted">{userData.mobile}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">{userData.email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Joining Date</th>
                                                                        <td className="text-muted">24 Nov 2021</td>
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
                                                        {userData.subject_expert?.title ? <tbody>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Full Address :</th>
                                                                <td className="text-muted">{userData.address_1_line_1}{userData.address_1_line_2}{userData.pincode}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Location :</th>
                                                                <td className="text-muted">{userData.city?.name} ,{userData.state?.name} ,{userData.country?.name}
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Category :</th>
                                                                <td className="text-muted">{userData.subject_expert?.title}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Qualification :</th>
                                                                <td className="text-muted">{userData.qualification}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Profession :</th>
                                                                <td className="text-muted">{userData.profession}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="ps-0" scope="row">Joining Date</th>
                                                                <td className="text-muted">24 Nov 2021</td>
                                                            </tr>
                                                        </tbody> :
                                                            <>

                                                                <div className='mentor-profile-bg'>
                                                                    <Button className='mnt-btn-position' color='success' onClick={() => toggleModal(id)}>Complete Mentor Profile </Button>
                                                                    {modalIsOpen && <MyModal isOpen={modalIsOpen} toggle={toggleModal} userId={id} />}
                                                                </div>
                                                            </>

                                                        }
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                    <MentorProfileSession />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MentorProfile;