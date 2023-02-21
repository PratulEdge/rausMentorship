import React, { useEffect } from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';
import { mentorDashDetail } from "../../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const Widgets = () => {

    const dispatch = useDispatch();
    const { mentorDashData } = useSelector((state) => ({
        mentorDashData: state.MentorDashData.mentorDashData,
    }));
    useEffect(() => {
        dispatch(mentorDashDetail());
    }, [dispatch]);

    console.log(mentorDashData, "mentor Dashboard Data")

    return (
        <React.Fragment>
            <Col xl={4} md={6}>
                <Card className="card-animate">
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Total Active Student Assigned</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                    <CountUp
                                        start={0}
                                        separator=","
                                        end={mentorDashData.total_student_assigned}
                                        duration={4}
                                    />
                                </span></h4>
                                <Link to="#" className="text-decoration-underline">View all</Link>
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
                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0">Total Session Taken</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                    <CountUp
                                        start={0}
                                        separator=","
                                        end={mentorDashData.total_session_taken}
                                        duration={4}
                                    />
                                </span></h4>
                                <Link to="#" className="text-decoration-underline">View all</Link>
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
                                        end={mentorDashData.total_minutes}
                                        duration={4}
                                    />
                                </span></h4>
                                <Link to="#" className="text-decoration-underline">View all</Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Widgets;