import React from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Ms_UpComing_SessionData } from './Ms_UpComing_SessionData';

const Ms_UpComing_Sessions = () => {
    // document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            {/* <ToastContainer closeButton={false} /> */}
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Upcoming Session" pageTitle="Sessions" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title mb-0 flex-grow-1">UpComing Sessions</h4>

                                        </div>
                                        
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                    <Ms_UpComing_SessionData />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ms_UpComing_Sessions;
