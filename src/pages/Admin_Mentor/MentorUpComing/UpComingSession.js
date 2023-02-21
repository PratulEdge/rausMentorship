import React from "react";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import MentorUpComing from "./MentorUpComing";


export default function UpComingSession(){
    document.title ="UpComing Sessions | Rau's MentorShip - UpComing Sessions";
    return(
        <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <BreadCrumb title="UpComing Sessions" pageTitle="Sessions" />
            <Row>
              <Col>
                <div className="h-100">
                  <Row>
                    <MentorUpComing />
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
}