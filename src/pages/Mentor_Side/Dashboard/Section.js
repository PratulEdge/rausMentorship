import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";

const Section = () => {

    const mentorDashData = useSelector((state) => state.MentorDashData.mentorDashData);

    return (
        <React.Fragment>
            <Row className="mb-3 pb-1">
                <Col xs={12}>
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div className="flex-grow-1">
                            <h4 className="fs-16 mb-1">Welcome, {mentorDashData.personal_details?.name}!</h4>
                            <p className="text-muted mb-0">Here's what's happening with your Session's today.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Section;