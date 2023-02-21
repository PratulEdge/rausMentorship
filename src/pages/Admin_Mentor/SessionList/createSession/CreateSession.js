import React, { useState } from "react";
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

import Flatpickr from "react-flatpickr";

export default function CreateSession() {
    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);
    };

    return (

        <>
            <ModalHeader className="bg-light p-3 col-12">
                New Session
                <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" style={{ float: 'right' }} >
                </Button>
            </ModalHeader>
            <form>
                <ModalBody>
                    <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                        <label htmlFor="id-field" className="form-label">ID</label>
                        <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                    </div>
                    {/* <Col lg={5} > */}
                    <div className="mb-3">
                        <label htmlFor="customername-field" className="form-label">Select Mentor Category</label>
                        <select className="form-select" aria-label="Default select example">
                            <option >Select your Category </option>
                            <option value="1">History</option>
                            <option value="2">Geography and DM</option>
                            <option value="3">Society & Social justice</option>
                            <option value="4">Polity</option>
                            <option value="5">International Relations and security</option>
                            <option value="6">Economy</option>
                            <option value="7">S&T</option>
                            <option value="8">Env. Eco. Biodiversity</option>
                            <option value="9">Ethics</option>
                            <option value="10">CSAT</option>
                            <option value="11">Mains Answer Writing and evaluation</option>
                        </select>
                    </div>
                    {/* </Col> */}

                    <div className="mb-3">
                        <label htmlFor="customername-field" className="form-label">Mentor Name</label>
                        <input type="text" id="customername-field" className="form-control" placeholder="Enter Mentor Name" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email-field" className="form-label">Student Name</label>
                        <input type="text" id="customername-field" className="form-control" placeholder="Enter Student Name" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date-field" className="form-label">Date</label>
                        <Flatpickr
                            className="form-control"
                            options={{
                                dateFormat: "d M, Y"
                            }}
                            placeholder="Select Date"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone-field" className="form-label">Time</label>
                        <input type="text" id="time-field" className="form-control" placeholder="Enter Phone no." required />
                    </div>
                    <div>
                        <label htmlFor="status-field" className="form-label">Comment</label>
                        <input type="text" id="comment-field" className="form-control" placeholder="comment..." required />
                        {/* <select className="form-control" data-trigger name="status-field" id="status-field" >
                                        <option value="">Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Block">Block</option>
                                    </select> */}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
                        {/* <Button color="primary" onClick={() => tog_center()}>Center Modal</Button> */}
                        <button type="submit" className="btn btn-success" id="add-btn">Add Mentor</button>
                        {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
                    </div>
                </ModalFooter>
            </form>
        </>
    )
}