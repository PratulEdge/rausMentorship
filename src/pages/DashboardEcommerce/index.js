import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import Widget from "./Widgets";
import BestSellingProducts from "./BestSellingProducts";
import RecentActivity from "./RecentActivity";
import RecentOrders from "./RecentOrders";
import Revenue from "./Revenue";
import SalesByLocations from "./SalesByLocations";
import Section from "./Section";
import StoreVisits from "./StoreVisits";
import TopSellers from "./TopSellers";
import { ToastContainer } from 'react-toastify';

const DashboardEcommerce = () => {
  document.title ="Dashboard | Velzon - React Admin & Dashboard Template";
  console.log("gsjfsf")

  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const storedUserType = localStorage.getItem('user_type');
    setUserType(storedUserType);
  }, []);

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
                <Row>
                  <Col xl={8}>
                    <Revenue />
                  </Col>
                  <SalesByLocations />
                </Row>
                <Row>
                  <BestSellingProducts />
                  <TopSellers />
                </Row>
                <Row>
                  <StoreVisits />
                  <RecentOrders />
                </Row>
              </div>
            </Col>
            <RecentActivity />
          </Row>
        </Container>
      </div>
      {userType && (
        <p>User Type: {userType}</p>
      )}
    </React.Fragment>
  );
};

export default DashboardEcommerce;
