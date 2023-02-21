import React, { useState, useEffect } from 'react';
// import BreadCrumb from '../../../../Components/Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import {
    Button,
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    ModalFooter,
    Table,
    FormFeedback
} from "reactstrap";

import { AttendantSessionData } from './AttendedSessionData';

const AttendantSessions = () => {

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col lg={12} className='pad-0'>
                        <Card>
                            <CardHeader>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <h4 className="card-title mb-0 flex-grow-1">Attendant Sessions List</h4>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <div id="table-gridjs">
                                    <AttendantSessionData />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default AttendantSessions;
