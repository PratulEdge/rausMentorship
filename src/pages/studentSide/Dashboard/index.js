import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Widget from "./Widgets";
import Section from "./Section";
import Ss_Sessions from "./S_T_UpComingSessions/Ss_sessions";
// import Sessions from "./T_upcoming/Ms_sessions";
import { ToastContainer } from 'react-toastify';


const StudentDashboard = () => {
  console.log("sffdfdsfdsf")
  document.title = "Dashboard | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <ToastContainer closeButton={false} />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Dashboard" pageTitle="Dashboards" />
          <Row>
            <Col>
              <div className="h-100">
                {/* <Section /> */}
                <Row>
                  <Widget />
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Ss_Sessions />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default StudentDashboard;
