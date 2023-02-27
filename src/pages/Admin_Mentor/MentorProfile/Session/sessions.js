import React, { useState, useEffect } from 'react';
// import BreadCrumb from '../../../Components/Common/BreadCrumb';
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

import { MentorProfileSessionData, SessionData } from './SessionData';

const MentorProfileSession = () => {
    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);
    };


    document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
                {/* <Container fluid>                    */}
                    <Row>
                        <Col lg={12}>
                            <Card>
                            <CardHeader>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            {/* <CardHeader> */}
                                                <h4 className="card-title mb-0 flex-grow-1">Sessions List</h4>
                                            {/* </CardHeader> */}
                                        </div>                                        
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                        <MentorProfileSessionData />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                {/* </Container> */}
        </React.Fragment>
    );
};

export default MentorProfileSession;
