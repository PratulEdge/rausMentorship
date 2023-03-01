import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { document } from '../../../common/data';
import { Mnt_Sess_report } from '../../../store/actions';
import {startOfToday, subMonths,startOfMonth, endOfMonth } from 'date-fns';
import Flatpickr from "react-flatpickr";

const Mnt_Session_Report = () => {

    //
    const [mentor_prev_data, setMentor_prev_data] = useState([])
    const { parseISO, format } = require('date-fns');
    const [selectedDates, setSelectedDates] = useState([]);
    //
    const dispatch = useDispatch();
    const { mnt_sess_report_Data } = useSelector((state) => ({
        mnt_sess_report_Data: state.Mnt_Sess_report_Data.mnt_sess_report_Data,
    }));

    console.log(mnt_sess_report_Data, " Mentor Session past Report", mentor_prev_data)
    useEffect(() => {
        dispatch(Mnt_Sess_report())
    }, [dispatch]);

    useEffect(() => {
        setMentor_prev_data(mnt_sess_report_Data);
    }, [mnt_sess_report_Data])

    //
    function handleDateSelection(selectedDates) {
        console.log("i am running")
        setSelectedDates(selectedDates);      
        if (selectedDates.length === 0) {
        //   const today = new Date();
        //   const startDate = format(startOfMonth(today), 'yyyy-MM-dd');
        //   const endDate = format(endOfMonth(today), 'yyyy-MM-dd');
        //   selectedDates = [startDate, endDate];
        }
      
        const startDate = format(selectedDates[0], "yyyy-MM-dd");
        const endDate = format(selectedDates[1], "yyyy-MM-dd");
      
        const filteredItems = mnt_sess_report_Data.filter((item) => {
          const itemDate = format(parseISO(item.schedule_date_time), "yyyy-MM-dd");
          console.log(itemDate, "date value");
          return itemDate >= startDate && itemDate <= endDate;
        });
      
        setMentor_prev_data(filteredItems);
        console.log(filteredItems, "filtered value");
      }
    //

    document.title = "Profile | Rau's MentorShip - Mentor Profile";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src="" alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 pb-lg-4 mb-4">
                        <Row className="g-4">
                            <Col lg={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white-50 text-center">
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">2</h4>
                                            <p className="fs-14 mb-0">Total Session</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">1</h4>
                                            <p className="fs-14 mb-0">Total Hours</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col className="col-12">
                            <Row>
                                <Col lg={6}>
                                    <div className="justify-content-between d-flex align-items-center mt-3 mb-4">
                                        <h3 className="text-white mb-0 pb-1">Past Session</h3>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <Col xs={5} xxl={2} lg={8} className="flt-rt">
                                        <Flatpickr
                                            className="form-control mt-3 "
                                            placeholder="Select Date"
                                            options={{
                                                mode: 'range',
                                                minDate: new Date().fp_incr(),
                                                maxDate: new Date().fp_incr(-1),
                                            }}
                                            value={selectedDates}
                                            onChange={handleDateSelection}
                                        />
                                    </Col>
                                </Col>
                            </Row>

                            <Row className="row-cols-xxl-5 row-cols-lg-3 row-cols-3">

                                {mentor_prev_data.map((prev_val) => {
                                    return (
                                        <Col lg={4}>
                                            <Card className="card-body">
                                                <div className="mb-4 align-items-center">
                                                    <div className="flex-shrink-0">
                                                        {/* <img src={avatar1} alt="" className="avatar-sm rounded-circle" /> */}
                                                    </div>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h6 className="card-title mb-1">Student Name:- </h6>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <p className="text-muted mb-0">{prev_val.student_name}</p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h6 className="card-title mb-1">Schedule Date:- </h6>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <p className="text-muted mb-0">{new Date(prev_val.schedule_date_time).toLocaleDateString('en-US')}</p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h6 className="card-title mb-1">Schedule Time:- </h6>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <p className="text-muted mb-0">{new Date(prev_val.schedule_date_time).toLocaleTimeString('en-US')}</p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col lg={6}>
                                                            <h6 className="card-title mb-1">Status:- </h6>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <p className="text-muted mb-0">{prev_val.status === 4 ? 'completed' : prev_val.status === 5 ? ' Cancelled' : 'Not Updated'}</p>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Link to={`/m_session_detail/${prev_val.session_id}`} className="btn btn-primary btn-sm">See Details</Link>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Mnt_Session_Report;