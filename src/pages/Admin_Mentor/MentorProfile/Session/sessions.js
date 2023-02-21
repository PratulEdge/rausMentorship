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
                <Container fluid>                   
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
                    {/* <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                        <ModalHeader className="bg-light p-3 col-12">
                            Add Mentor
                            <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" style={{float: 'right'}} >
                            </Button>
                        </ModalHeader>
                        <form>
                            <ModalBody>
                                <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                                    <label htmlFor="id-field" className="form-label">ID</label>
                                    <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="customername-field" className="form-label">Mentor Name</label>
                                    <input type="text" id="customername-field" className="form-control" placeholder="Enter Name" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email-field" className="form-label">Email</label>
                                    <input type="email" id="email-field" className="form-control" placeholder="Enter Email" required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone-field" className="form-label">Phone</label>
                                    <input type="text" id="phone-field" className="form-control" placeholder="Enter Phone no." required />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="date-field" className="form-label">Joining Date</label>
                                    <Flatpickr
                                        className="form-control"
                                        options={{
                                            dateFormat: "d M, Y"
                                        }}
                                        placeholder="Select Date"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="status-field" className="form-label">Status</label>
                                    <select className="form-control" data-trigger name="status-field" id="status-field" >
                                        <option value="">Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Block">Block</option>
                                    </select>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
                                    <button type="submit" className="btn btn-success" id="add-btn">Add Mentor</button>
                                </div>
                            </ModalFooter>
                        </form>
                    </Modal> */}
                </Container>
        </React.Fragment>
    );
};

export default MentorProfileSession;
