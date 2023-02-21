import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown,Label,Form } from 'reactstrap';
import { Button, FormFeedback,Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik, yupToFormErrors } from "formik";
import { ToastContainer } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { mentorSessions } from '../../../../../store/actions';
import { studentSession } from '../../../../../store/actions';
import { deleteSession } from '../../../../../store/actions';


const StudentProfileSessionData = (props) => {
    const dispatch = useDispatch();
    const [modal_center, setmodal_center] = useState(false);

    const [modal_varying2, setmodal_varying2] = useState(false);
    const [sessionFilter, setSessionFilter] = useState([])
    function tog_center() {
        setmodal_center(!modal_center);
    }
    const [Session_id_value, setsession_id_value] = useState()
    const { Session } = useSelector((state) => ({
        Session: state.MentorSessionData.Session,
    }));
    function tog_varying2(e) {
        const ids = e.target.id;
        setsession_id_value(ids)
        const sessionData = Session.filter((val) => val.session_id === e.target.id)
        setSessionFilter(sessionData);
        setmodal_varying2(!modal_varying2);
    }
    const { id } = useParams();
    console.log(id, "id props")

    const { assignedSession } = useSelector((state) => ({
        assignedSession: state.StudentAssignedSessionData.assignedSession,
    }));

    console.log(assignedSession , "session data")
    const data = assignedSession.map(((list, index) =>
        [
            list.serial = index + 1,
            list.student_name,
            new Date(list.schedule_date_time).toLocaleDateString('en-US'),
            new Date(list.schedule_date_time).toLocaleTimeString('en-US'),
            list.status,
            list.session_id
        ]
    ));

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            session_id: Session_id_value || '',
            status: '5' || '',
            cancel_reason: '' || '',
        },
        validationSchema: Yup.object({
            cancel_reason: Yup.string().required("Please Enter the Reason for Cancellation"),
        }),
        onSubmit: (values) => {
            console.log(values, "Submit valuesas")
            setmodal_varying2(false);
            validation.resetForm();
            dispatch(deleteSession(values, props.history));
        }
    });
    useEffect(() => {
        dispatch(studentSession(id));
        dispatch(mentorSessions());
    }, [dispatch]);

    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
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
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href={`/session-details/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                                {/* <DropdownItem href="/edit-mentor-profile" className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</DropdownItem> */}
                                <DropdownItem id={cell} onClick={(e) => tog_varying2(e)} className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>)
                    },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
            <Modal
                isOpen={modal_varying2}
                toggle={() => {
                    tog_varying2();
                }}
            >
                <ModalHeader className="bg-light p-3 col-12">
                    Cancel Session
                    <Button type="button" onClick={() => { setmodal_varying2(false); }} className="btn-close" aria-label="Close" style={{ float: 'right' }} >
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit(e);
                        console.log("in submit")
                        return false;
                    }}
                        action="#">
                        {sessionFilter.map((SessionVal) => {
                            return (
                                <>
                                    <div className="mb-3">
                                        <label htmlFor="customer-name" className="col-form-label">Mentor Name:</label>
                                        <Input type="text" className="form-control" id="customer-name" value={SessionVal.mentor_name} readOnly />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="customer-name" className="col-form-label">Student Name:</label>
                                        <Input type="text" className="form-control" id="customer-name" value={SessionVal.student_name} readOnly />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="customer-name" className="col-form-label">Date & Time:</label>
                                        <Input type="text" className="form-control" id="customer-name" value={new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(new Date(SessionVal.schedule_date_time))} readOnly />
                                    </div>
                                    {/* {setSession_id(SessionVal.session_id)}                                     */}
                                </>
                            )
                        })}                        
                        <div className="mb-3">
                            <Label className="form-label" >Reason: </Label>
                            <textarea
                                name="cancel_reason"
                                type="text"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.cancel_reason || ""}
                                invalid={
                                    validation.touched.cancel_reason && validation.errors.cancel_reason ? true : false
                                }
                                required
                            />
                            {validation.touched.cancel_reason && validation.errors.cancel_reason ? (
                                <FormFeedback type="invalid">{validation.errors.cancel_reason}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="modal-footer">
                            <Button
                                color="light"
                                onClick={() => {
                                    setmodal_varying2(false);
                                    // setSession_id()
                                }}
                            >
                                Close
                            </Button>
                            <Button color="primary" type='submit' onClick={() => {
                                // setmodal_varying2(false);
                            }}
                            >
                                Submit

                            </Button>
                        </div>
                    </Form>
                </ModalBody>

            </Modal>
        </React.Fragment>
    );
};


export { StudentProfileSessionData };