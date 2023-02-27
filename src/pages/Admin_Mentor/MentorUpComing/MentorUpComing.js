import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Card, CardBody, Col, Row, TabContent, Table, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import { useSelector, useDispatch } from "react-redux";
import { mentorSessions } from '../../../store/actions';
import Sessions from "./sessions/todaySession/sessions";
import AttendantSessions from "./sessions/AttendedSession/AttendedSessions";
import UpComingSessions from "./sessions/UpComingSessions/UpSessions";
// import Sessions from "./sessions/sessions";

export default function MentorUpComing() {
    const dispatch = useDispatch();
    const { Session } = useSelector((state) => ({
        Session: state.MentorSessionData.Session,
    }));

    // const options = {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     timeZone: "Asia/Calcutta",
    //   };
    //   const currentDate = new Date();
    //   const formattedDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

    let tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    let localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    console.log(Session, "all Session")
    const event = new Date();
    const jsonDate = localISOTime;
    // console.log(formattedDate, "today date in formatted")
    console.log(jsonDate, "date time")
    // const todayVal = Session.filter(val => val.schedule_date_time == jsonDate).length
    // const upCompingVal = Session.filter(val => val.schedule_date_time > jsonDate).length
    // const attendantVal = Session.filter(val => val.schedule_date_time < jsonDate).length  

    useEffect(() => {
        dispatch(mentorSessions());
    }, [dispatch]);

    const [todayVal, setTodayVal] = useState(0);
  const [upcomingVal, setUpcomingVal] = useState(0);
  const [attendedVal, setAttendedVal] = useState(0);

    useEffect(() => {
        const currentDate = new Date();

    //     const todayVal = Session.filter(val => new Date(val.schedule_date_time) === currentDate)
    // const upCompingVal = Session.filter(val => new Date(val.schedule_date_time) > currentDate)
    // const attendantVal = Session.filter(val => new Date(val.schedule_date_time) < currentDate)   
        const todaySessions = Session.filter((val) => {
          const sessionDate = new Date(val.schedule_date_time);
          return (
            sessionDate.getFullYear() === currentDate.getFullYear() &&
            sessionDate.getMonth() === currentDate.getMonth() &&
            sessionDate.getDate() === currentDate.getDate()
          );
        });
        const upcomingSessions = Session.filter((val) => {
            const sessionDate = new Date(val.schedule_date_time);
            return (
              sessionDate > currentDate &&
              (
                sessionDate.getFullYear() > currentDate.getFullYear() ||
                sessionDate.getMonth() > currentDate.getMonth() ||
                sessionDate.getDate() > currentDate.getDate()
              )
            //   sessionDate.getMonth() !== currentDate.getMonth() &&
            //   sessionDate.getDate() > currentDate.getDate()
            );
          });
        // const upcomingSessions = Session.filter((val) => {
        //   const sessionDate = new Date(val.schedule_date_time);
        //   return sessionDate > currentDate && sessionDate !== currentDate;
        // });
        const attendedSessions = Session.filter((val) => {
          const sessionDate = new Date(val.schedule_date_time);
          return sessionDate < currentDate;
        });
        setTodayVal(todaySessions.length);
        setUpcomingVal(upcomingSessions.length);
        setAttendedVal(attendedSessions.length);
      }, [Session]);

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

      
    console.log(todayVal, "schedule Date time",upcomingVal ,"compare date time",attendedVal, "filterVAl Session List in mentorUpcoming")
    return (
        <React.Fragment>
            <Col xl={4} md={6}>
                <Card className="card-animate">
                    <CardBody
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                            console.log('In tab 1')
                            toggleTab('1');
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0 sz-17">Today's Session</p>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                                <span className="avatar-title rounded fs-3 bg-soft-success">
                                    <i className="text-success bx bx-dollar-circle"></i>
                                </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-2">
                            <div>
                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                    <CountUp
                                        start={0}
                                        separator=","
                                        end={todayVal}
                                        duration={3}
                                    />
                                </span></h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4} md={6}>
                <Card className="card-animate" >
                    <CardBody
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                            console.log('In tab 2')
                            toggleTab('2');
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0 sz-17">UpComing Session</p>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                                <span className="avatar-title rounded fs-3 bg-soft-danger">
                                    <i className="text-danger bx bx-shopping-bag"></i>
                                </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-2">
                            <div>
                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                    <CountUp
                                        start={0}
                                        separator=","
                                        end={upcomingVal}
                                        duration={3}
                                    />
                                </span></h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4} md={6}>
                <Card className="card-animate" >
                    <CardBody
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {                            
                            console.log('In tab 3')
                            toggleTab('3');
                        }}
                    >
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="text-uppercase fw-medium text-muted text-truncate mb-0 sz-17">Attendant</p>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                                <span className="avatar-title rounded fs-3 bg-soft-success">
                                    <i className="text-success bx bx-user-circle"></i>
                                </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-2">
                            <div>
                                <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                    <CountUp
                                        start={0}
                                        separator=","
                                        end={attendedVal}
                                        duration={3}
                                    />
                                </span></h4>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <TabContent activeTab={activeTab} className="pt-4">
                <TabPane tabId="1">
                    <Sessions />
                </TabPane>
                <TabPane tabId="2">
                    <UpComingSessions />
                </TabPane>

                <TabPane tabId="3">
                    <AttendantSessions />
                </TabPane>
            </TabContent>
        </React.Fragment>
    )
}