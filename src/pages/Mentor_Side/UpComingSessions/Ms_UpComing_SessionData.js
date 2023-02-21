import React, { useState, useEffect, useMemo } from 'react';

import Flatpickr from "react-flatpickr";
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, Col, DropdownMenu, DropdownToggle, Input, Label, UncontrolledDropdown, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
// import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
// import Flatpickr from "react-flatpickr";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { todaySessions } from '../../../../store/actions'
import { mentorSessDetail } from '../../../store/actions';
// import { todaySessions } from '../../../../../../../store/actions';

const Ms_UpComing_SessionData = () => {


    const [activeFilter, setActiveFilter] = useState('');
    const [maxDate_val, setMaxDate_val] = useState('')
    const [minDate_val, setMinDate_val] = useState(' ')
    const [filterData_val, setFilterData_val] = useState([]);
    const [modal_center, setmodal_center] = useState(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }
    // console.log(fp_incr_val, "fp incr val ")

    const [filter, setFilter] = useState("This Week");

    function handleFilter(event) {
        setFilter(event.target.value);
    }
    // console.log(data1, "data value")
    const dispatch = useDispatch();
    const { mentorSessData } = useSelector((state) => ({
        mentorSessData: state.MentorSessData.mentorSessData,
    }));
    console.log(mentorSessData, "MentorSessData T_Session userDatasdsd")
    useEffect(() => {
        dispatch(mentorSessDetail());
    }, [dispatch]);


    useEffect(()=>{
        setFilterData_val(mentorSessData);
    },[mentorSessData])
    
    const currentdate = new Date();
    const filteredata = filterData_val.filter(past => new Date(past.schedule_date_time) >= new Date() &&
        (activeFilter === 'All' || String(past.status).toLowerCase().includes(activeFilter.toLowerCase()))
    )
        .sort((a, b) => new Date(a.schedule_date_time) - new Date(b.schedule_date_time));
    console.log(mentorSessData, filteredata, "paste data filter")
    const data = filteredata.map(((detail, index) =>
        [
            detail.serial = index + 1,
            detail.student_name,
            new Date(detail.schedule_date_time).toLocaleDateString('en-US'),
            new Date(detail.schedule_date_time).toLocaleTimeString('en-US'),
            detail.status,
            detail.schedule_date_time,
            detail.session_id

        ]

    ));

    const { parseISO, format } = require('date-fns');
    const [selectedDates, setSelectedDates] = useState([]);

    function handleDateSelection(selectedDates) {
        setSelectedDates(selectedDates);

        if (selectedDates.length === 0) {
            // If no dates are selected, return all items

            return;
        }


        const startDate = format(selectedDates[0], "yyyy-MM-dd");
        const endDate = format(selectedDates[1], "yyyy-MM-dd");

        const filteredItems = mentorSessData.filter((item) => {
            const itemDate = format(parseISO(item.schedule_date_time), "yyyy-MM-dd");
            console.log(itemDate, "daet value")

            return itemDate >= startDate && itemDate <= endDate;
        });
        setFilterData_val(filteredItems)
        console.log(filteredItems);
    }

    console.log(filterData_val, "final value")


    return (
        <React.Fragment>
            <Col xs={5} xxl={2} lg={3} className="status-filter filter-pos">
                <label>Select Date :-</label>
                <Flatpickr
                    className="form-control align-filter"
                    placeholder="Select Date"
                    options={{
                        mode: 'range',
                        minDate: new Date().fp_incr(0),
                        maxDate: new Date().fp_incr(),
                    }}
                    value={selectedDates}
                    onChange={handleDateSelection}
                />
            </Col>
            <Col xs={5} xxl={2} lg={2} className="status-filter ps_act_iact">
                <label>Status :-</label>
                <select className="form-control align-filter" data-choices data-choices-search-false name="choices-single-default2"
                    id="choices-single-default2"
                    onChange={(e) => setActiveFilter(e.target.value)}
                    value={activeFilter}
                >
                    <option value="All">All</option>
                    <option value="4">Completed</option>
                    <option value="5">Canceled</option>
                </select>
            </Col>
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
                        name: 'Join Session',
                        formatter: (cell) => {
                            const scheduledDateTime = new Date(cell);
                            const now = new Date();
                            if ((scheduledDateTime.getTime() - now.getTime()) / (1000 * 60) <= 5) {
                                return _(<Button className='btn-success sess_wid' onClick={console.log("clicked")} >Join</Button>)
                                //   return <JoinSessionButton scheduledTime={cell} onClick={() => console.log("Join session")} />;
                            } else {
                                return _(<Button className='btn-success sess_wid' onClick={console.log("clicked")} disabled={true}>Join</Button>);
                            }
                        }
                    },
                    {
                        name: 'Actions',
                        formatter: (cell) => _(<UncontrolledDropdown className="dropdown d-inline-block">
                            <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end dropdown-flow" style={{ position: "absolute", inset: "auto 0px auto auto", margin: "0px", transform: "translate(0px, 23px)" }}>
                                <DropdownItem href={`/m_session_detail/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
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


export { Ms_UpComing_SessionData };