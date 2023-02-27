import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../../../Components/Common/BreadCrumb';
import { ToastContainer } from 'react-toastify';
import {
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";

// Formik validation
import { Ms_StudentList } from './StudentListData';

const Ms_StudentLists = (props) => {

    console.log("student List")
    document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Student Details" pageTitle="Students" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title mb-0 flex-grow-1">Active Students List</h4>

                                        </div>
                                        
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                        <Ms_StudentList />
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

export default Ms_StudentLists;