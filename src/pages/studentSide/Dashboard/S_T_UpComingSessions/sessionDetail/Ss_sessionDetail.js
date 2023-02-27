import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Table, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { detailSessions } from '../../../../../store/actions';
import progileBg from '../../../../../assets/images/profile-bg.jpg';
// import avatar1 from '../../../../assets/images/users/avatar-1.jpg';

const Ss_SessionDetail = () => {
    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const dispatch = useDispatch();
    const { SessionDetail } = useSelector((state) => ({
        SessionDetail: state.DetailSessionData.SessionDetail,
    }));
    console.log(SessionDetail, "SessionDetail")
    const { id } = useParams()
    console.log(id, "Session id")

    SessionDetail.map((value) => {
        return (
            console.log(value.mentor_id, "mentor id in session")
        )

    })
    useEffect(() => {
        dispatch(detailSessions(id));
    }, [dispatch]);
    document.title = "Session Detail | Rau's MentorShip - Session Detail";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                            <div className="overlay-content">
                                <div className="text-end p-3">
                                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                        <Input id="profile-foreground-img-file-input" type="file"
                                            className="profile-foreground-img-file-input" />
                                        <Label htmlFor="profile-foreground-img-file-input"
                                            className="profile-photo-edit btn btn-light">
                                            <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col xxl={9}>
                            <Card className="mt-xxl-n5 mn-t4">
                            <CardHeader className='card-head-pad'>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title mb-0 flex-grow-1">Session Details</h4>

                                        </div>
                                    </div>
                                </CardHeader>
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}
                                                type="button">
                                                <i className="fas fa-home"></i>
                                                Details
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                Video
                                            </NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink to="#"
                                                className={classnames({ active: activeTab === "3" })}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Feedback
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                        <Link to="#" className="badge bg-light text-primary fs-12 edit_flot"><i
                                        className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
                                    <Table className="table-borderless mb-0">
                                        {
                                            SessionDetail.map((SessionValue) => {
                                                return (
                                                    <tbody key={SessionValue.session_id}>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Mentor Name :</th>
                                                            <td className="text-muted">{SessionValue.mentor_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Student Name :</th>
                                                            <td className="text-muted">{SessionValue.student_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Category :</th>
                                                            <td className="text-muted">{SessionValue.mentor_category}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Status :</th>
                                                            <td className="text-muted">{SessionValue.status === 1 ? 'Schedule' : SessionValue.status === 2 ? 'Approved' : SessionValue === 3 ? 'OnGoing' : SessionValue === 4 ? 'Completed' : SessionValue.status === 5 ? 'Cancelled' : SessionValue.status === 6 ? 'Reschedule' : 'Under Process'}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Schedule Date :</th>
                                                            <td className="text-muted">{new Date(SessionValue.schedule_date_time).toLocaleDateString('en-US')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Schedule Time :</th>
                                                            <td className="text-muted">{new Date(SessionValue.schedule_date_time).toLocaleTimeString('en-US')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Update Date :</th>
                                                            <td className="text-muted">{new Date(SessionValue.update_date_time).toLocaleDateString('en-US')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Update Time :</th>
                                                            <td className="text-muted">{new Date(SessionValue.update_date_time).toLocaleTimeString('en-US')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Creation Date :</th>
                                                            <td className="text-muted">{new Date(SessionValue.creation_date_time).toLocaleDateString('en-US')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Creation Time :</th>
                                                            <td className="text-muted">{new Date(SessionValue.creation_date_time).toLocaleTimeString('en-US')}</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="ps-0" scope="row">Remarks :</th>
                                                            <td className="text-muted">{SessionValue.remarks}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        }

                                    </Table>

                                        </TabPane>
                                        <TabPane tabId="2">
                                            Here is the video
                                        </TabPane>
                                        <TabPane tabId="3">
                                            Feedback
                                        </TabPane>
                                    </TabContent>
                                   
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ss_SessionDetail;