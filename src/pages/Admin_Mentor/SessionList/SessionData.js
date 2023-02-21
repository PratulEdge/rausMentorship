import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, Label, DropdownToggle, Input, UncontrolledDropdown, Form } from 'reactstrap';
import { Button,FormFeedback, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import { mentorSessions } from '../../../store/actions';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteSession } from '../../../store/actions';

const data = [
    ["01", "test", "test@yopmail.com", "9844873526", "11/12/2022"],
    ["02", "test1", "test1@yopmail.com", "9876537373", "11/12/2022"],
    ["03", "test2", "test2@yopmail.com", "7836527867", "11/12/2022"],
    ["04", "test3", "test3@yopmail.com", "9842637128", "11/12/2022"],
];

// Base Example
const SessionData = (props) => {

    const dispatch = useDispatch();
    const [Session_id_value, setsession_id_value] = useState()
    const { Session } = useSelector((state) => ({
        Session: state.MentorSessionData.Session,
    }));
    const [modal_varying2, setmodal_varying2] = useState(false);
    const [sessionFilter, setSessionFilter] = useState([])
    function tog_varying2(e) {
        const ids = e.target.id;
        setsession_id_value(ids)
        const sessionData = Session.filter((val) => val.session_id === e.target.id)
        setSessionFilter(sessionData);
        setmodal_varying2(!modal_varying2);
    }

    console.log(sessionFilter, "Filter Value")
    // sessionFilter.map((SessionVal) => {
    //     // setsession_id_value(SessionVal.session_id)
    //     console.log(SessionVal.session_id, "session Id ")
    // })
    console.log(Session_id_value, "session id")
    console.log(Session, "Session List")

    useEffect(() => {
        dispatch(mentorSessions());
    }, [dispatch]);

    const data = Session.map(((list, index) => [
        list.serial = index + 1,
        list.mentor_name,
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

    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={['ID', "Mentor Name", 'Student Name', "Time", "Date",
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
                                {/* <DropdownItem className='edit-item-btn' onClick={() => tog_varying2()}><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</DropdownItem> */}
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


export { SessionData };
