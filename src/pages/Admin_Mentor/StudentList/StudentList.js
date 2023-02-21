
import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Flatpickr from "react-flatpickr";
import ExportCSVModal from '../../../Components/Common/ExportCSVModal';
import {
    Button,
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    ModalFooter,
    Table,
    FormFeedback
} from "reactstrap";

import { StudentDataList } from '../StudentList/StudentListData';

const StudentList = () => {

    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);
    };

    // Export Modal
    const [isExportCSV, setIsExportCSV] = useState(false);

    document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Student Detail" pageTitle="Student" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0 flex-grow-1">Student List</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                        <StudentDataList />
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

export default StudentList;
