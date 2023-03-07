import React, { useEffect } from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { mentorDashDetail } from "../../../store/actions";
import { studentDashDetail } from '../../../store/actions';
import { useSelector, useDispatch } from "react-redux";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

const Widgets = () => {

    const dispatch = useDispatch();
    const { studentDashData } = useSelector((state) => ({
        studentDashData: state.StudentDashData.studentDashData,
    }));
    useEffect(() => {
        dispatch(studentDashDetail());
    }, [dispatch]);

    console.log(studentDashData, "student Dashboard Data")

    return (
        <React.Fragment>

            {
                studentDashData.map((stu_val) => {
                    return (
                        <>
                            <Row className="mb-3 pb-1">
                                <Col xs={12}>
                                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                        <div className="flex-grow-1">
                                            <h4 className="fs-16 mb-1">Welcome, {stu_val.first_name}</h4>
                                            <p className="text-muted mb-0">Here's what's happening with your Session's today.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Col xl={4} md={6}>
                                <Card className="card-animate">
                                    <CardBody>
                                        <Row>
                                            <Col lg={4}>
                                                <div className="align-items-center">
                                                    <img className="rounded-circle wid" src={avatar1}
                                                        alt="Header Avatar" />
                                                </div>
                                            </Col>
                                            <Col lg={8}>
                                                <div className="align-items-center">
                                                    <span className='d-flex stu-detail'> {stu_val.name}</span>
                                                    <span className='d-flex stu-sub-detail text-muted'>{stu_val.email}</span>
                                                    <span className='d-flex stu-sub-detail text-muted'>{stu_val.student_id}</span>
                                                </div>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4} md={6}>
                                <Card className="card-animate">
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Total Session Taken</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                                    <CountUp
                                                        start={0}
                                                        separator=","
                                                        end={stu_val.total_session_taken}
                                                        duration={4}
                                                    />
                                                </span></h4>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4} md={6}>
                                <Card className="card-animate">
                                    <CardBody>
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1 overflow-hidden">
                                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Total Minutes of Session Taken</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mt-4">
                                            <div>
                                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                                    <CountUp
                                                        start={0}
                                                        separator=","
                                                        end={stu_val.total_min_sessions}
                                                        duration={4}
                                                    />
                                                </span></h4>
                                                {/* <Link to="#" className="text-decoration-underline">View all</Link> */}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </>
                    )
                })
            }
        </React.Fragment>
    );
};

export default Widgets;