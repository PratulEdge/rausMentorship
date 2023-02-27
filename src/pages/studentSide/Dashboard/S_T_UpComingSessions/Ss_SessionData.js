import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown, Modal, ModalBody,ModalHeader,Button } from 'reactstrap';
// import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { todaySessions } from '../../../../store/actions'
import { mentorSessDetail } from '../../../../store/actions';
import { studentDashDetail } from '../../../../store/actions';
// import { todaySessions } from '../../../../../../../store/actions';

const Ss_SessionData = () => {
    const [modal_center, setmodal_center] = useState(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }


    const dispatch = useDispatch();
    const { studentDashData } = useSelector((state) => ({
        studentDashData: state.StudentDashData.studentDashData,
    }));

    useEffect(() => {
        dispatch(studentDashDetail());
    }, [dispatch]);

      const upcomingSessions = studentDashData.flatMap(student => student.upcomming_sessions)
  .filter(session => new Date(session.schedule_date_time) > new Date()).sort((a, b) => new Date(a.schedule_date_time) - new Date(b.schedule_date_time));;
    const data = upcomingSessions.map(((detail,index) =>
        [
            detail.serial = index + 1,
            detail.mentor_id__name,
            new Date(detail.schedule_date_time).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}),
            new Date(detail.schedule_date_time).toLocaleTimeString('en-US'),
            detail.status,
            detail.session_id

        ]

    ));

    console.log(upcomingSessions , "Student side session data")

    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={["ID","Mentor Name",  'Session Date', "Session Time",
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
                                <DropdownItem href={`/ss_session_details/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                                {/* <DropdownItem href="/edit-mentor-profile" className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Delete</DropdownItem> */}
                                {/* <DropdownItem onClick={() => tog_center()} className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>)
                    },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
        </React.Fragment>
    );
};


export { Ss_SessionData };
