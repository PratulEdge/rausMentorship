import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown, Modal, ModalBody,ModalHeader,Button } from 'reactstrap';
// import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { todaySessions } from '../../../../store/actions'
import { mentorSessDetail } from '../../../../store/actions';
// import { todaySessions } from '../../../../../../../store/actions';

const Ms_SessionData = () => {
    const [modal_center, setmodal_center] = useState(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }


    const dispatch = useDispatch();
    const { mentorSessData } = useSelector((state) => ({
        mentorSessData: state.MentorSessData.mentorSessData,
    }));
    console.log(mentorSessData, "MentorSessData T_Session userDatasdsd")

    useEffect(() => {
        dispatch(mentorSessDetail());
    }, [dispatch]);

    const filterData = mentorSessData.filter((val)=> new Date(val.schedule_date_time).toLocaleDateString('en-US') === new Date().toLocaleDateString('en-US') && new Date(val.schedule_date_time).toLocaleTimeString('en-US') >= new Date().toLocaleTimeString('en-US') )
    const data = filterData.map(((detail,index) =>
        [
            detail.serial = index + 1,
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
                columns={["ID", "Student Name", 'Session Date', "Session Time",
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
                            <DropdownMenu className="dropdown-menu-end dropdown-flow" style={{ position: "absolute", inset: "auto 0px auto auto", margin: "0px", transform: "translate(0px, 23px)" }}>
                                <DropdownItem href={`/session-details/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                                <DropdownItem href="/edit-mentor-profile" className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Delete</DropdownItem>
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


export { Ms_SessionData };
