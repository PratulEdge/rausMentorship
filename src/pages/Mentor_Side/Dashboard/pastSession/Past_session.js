import React from 'react';
import {
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";
import BreadCrumb from '../../../../Components/Common/BreadCrumb';
import { Past_Session_Data } from './Past_session_data';

const Past_Session = () => {
    // document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            {/* <ToastContainer closeButton={false} /> */}
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Past Session" pageTitle="Sessions" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title mb-0 flex-grow-1">Past Sessions</h4>

                                        </div>
                                        
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                    <Past_Session_Data />
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

export default Past_Session;
