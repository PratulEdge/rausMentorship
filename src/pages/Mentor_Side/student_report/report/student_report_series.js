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
import { preTestSeriesProfile } from '../../../../store/actions';
import StudentProfileSession from '../../../Admin_Mentor/student/StudentProfile/Session/sessions';
// import StudentProfileSession from '../../Session/sessions';


const Ms_StudentProfile_Series = () => {

    // const [email, setEmail] = useState('')
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
    //
    const email = "ecv1@yopmail.com";
    console.log(preTestSeriesData, email, "Pre Series data")
    useEffect(() => {
        dispatch(Ms_studentProfile(id));
        dispatch(preTestSeriesProfile(email));
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
                        <Col lg={12}>
                            <div>
                                <Row>
                                    <Col xxl={3}>
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Prelims Test Series List</h5>
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

                </Container>
            </div>
        </React.Fragment >
    );
};

export default Ms_StudentProfile_Series;