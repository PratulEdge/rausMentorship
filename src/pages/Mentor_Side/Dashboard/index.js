import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Widget from "./Widgets";
import Section from "./Section";
import Sessions from "./T_upcoming/Ms_sessions";
import { ToastContainer } from 'react-toastify';


const DashboardEcommerce = () => {
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
                <Section />
                <Row>
                  <Widget />
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Sessions />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
