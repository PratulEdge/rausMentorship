import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from 'reactstrap';
import { Button, Card, CardBody, CardHeader, Col, Container, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Flatpickr from "react-flatpickr";
import { useSelector, useDispatch } from "react-redux";
import { studentDetail } from '../../../store/actions';

const StudentDataList = () => {

    const dispatch = useDispatch();
    const { studentData } = useSelector((state) => ({
        studentData: state.StudentUserData.studentData,
    }));
    const data = studentData.filter(batch => batch.batch_details.map((batch_name)=>{
        return(

            batch_name.batch__type__name === "Mentorship Course Batch"
        )
    })).map(((list, index) => [
        list.serial = index + 1,
        list.name,
        list.email,
        list.mobile,
        list.dob,
        list.category,
        list.id
    ]
    ));
    useEffect(() => {
        dispatch(studentDetail());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Grid

                data={data}
                columns={['ID', 'Name', 'Email','Mobile','DOB', "Category",
                    {
                        name: 'Actions',
                        formatter: (cell) => _(<UncontrolledDropdown className="dropdown d-inline-block">
                            <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href={`/student-profile/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>)
                    },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
        </React.Fragment>
    );
};


export { StudentDataList };
