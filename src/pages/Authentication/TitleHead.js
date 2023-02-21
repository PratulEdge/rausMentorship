import React from "react";
import { Card, CardBody, Col, Container, Input, Label, Row, Button, Form, FormFeedback, Alert } from 'reactstrap';
import { withRouter, Link } from "react-router-dom";

export default function TitleHead() {
    return (
        <Row>
            <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                    <div>
                        <Link to="/" className="d-inline-block auth-logo">
                            <p className='banner'>Rau's MentorShip</p>
                            {/* <img src={logoLight} alt="" height="20" /> */}
                        </Link>
                    </div>
                </div>
            </Col>
        </Row>
    )
}