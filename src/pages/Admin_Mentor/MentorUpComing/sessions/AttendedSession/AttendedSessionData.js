import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from 'reactstrap';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { A_Sessions } from '../../../../../store/actions';


const AttendantSessionData = () => {
    const [modal_center, setmodal_center] = useState(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }


    const dispatch = useDispatch();
    const { A_Session } = useSelector((state) => ({
        A_Session: state.ASessionData.A_Session,
    }));
    console.log(A_Session, "A_Session userDatasdsd")

    useEffect(() => {
        dispatch(A_Sessions());
    }, [dispatch]);

    const count = A_Session.length;
    console.log(count, "Session Count")
    
    const data = A_Session.map(((detail, index) =>
        [
            detail.serial = index + 1,
            detail.mentor_name,
            detail.student_name,
            new Date(detail.schedule_date_time).toLocaleDateString('en-US'),
            new Date(detail.schedule_date_time).toLocaleTimeString('en-US'),
            detail.status,
            detail.session_id

        ]
      
    ));

    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={["ID","Mentor Name", "Student Name", 'Session Date', "Session Time",
                {
                    name: "Status",
                    formatter: (cell) => {
                        switch (cell) {
                            case 1:
                                return _(<span className="badge badge_sz badge-soft-info"> Schedule </span>);
                            case 2: 
                                return _(<span className="badge badge_sz badge-soft-primary"> Approved </span>);
                            case 3:
                                return _(<span className="badge badge_sz badge-soft-warning"> OnGoing </span>);
                            case 4:
                                return _(<span className="badge badge_sz badge-soft-success"> Completed </span>);
                            case 5:
                                return _(<span className="badge badge_sz badge-soft-danger"> Cancel </span>);
                            case 6:
                                return _(<span className="badge badge_sz badge-soft-secondary"> Reschedule </span>);
                            default:
                                return _(<span className="badge badge_sz badge-soft-danger"> Under Process</span>);
                        }
                    },
                    // formatter: (cell) => _(<span className="fw-semibold bg-success">{cell}</span>)
                },
                {
                    name: 'Actions',
                    formatter: (cell) => _(<UncontrolledDropdown className="dropdown d-inline-block">
                        <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                            <i className="ri-more-fill align-middle"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem href={`/session-details/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                            {/* <DropdownItem href="/edit-mentor-profile" className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</DropdownItem> */}
                            {/* <DropdownItem onClick={() => tog_center()} className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </DropdownItem> */}
                        </DropdownMenu>
                    </UncontrolledDropdown>)
                },
            ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
            <Modal
                isOpen={modal_center}
                toggle={() => {
                    tog_center();
                }}
                centered
            >
                <ModalHeader className="modal-title" />

                <ModalBody className="text-center p-5">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json"
                        trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
                    </lord-icon>
                    <div className="mt-4">
                        <h4 className="mb-3">Are you sure?</h4>
                        <p className="text-muted mb-4"> You won't be able to revert this!</p>
                        <div className="hstack gap-2 justify-content-center">
                        <Link to="#" className="btn btn-success">Yes, delete it!</Link>
                            <Button className='btn btn-danger' onClick={() => setmodal_center(false)}>Close</Button>
                           
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
};


export { AttendantSessionData };
