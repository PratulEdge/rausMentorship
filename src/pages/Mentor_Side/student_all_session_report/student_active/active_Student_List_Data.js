import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Form } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { studDataDetail } from '../../../../store/actions';


const Active_student_List_Data = (props) => {
    const dispatch = useDispatch();
    const { studentData } = useSelector((state) => ({
        studentData: state.StudentData.studentData,
    }));

    const data = studentData.map(((list, index) => [   ///icoList
        list.serial = index + 1,
        list.name,
        list.email,
        list.mobile,
        list.prev_civil_attempt,
        list.id
    ]
    ));

    useEffect(() => {
        dispatch(studDataDetail());
    }, [dispatch]);

    console.log(studentData, "student data value")
    
    return (
        <React.Fragment>           
            <Grid
                data={data}
                columns={['ID', "Name", 'Email', "Mobile",
                    {
                        name: "Prev Attempted",
                        formatter: (cell) => {
                            console.log(cell, "value")
                            switch (cell) {
                                case "no":
                                    return _(<span className="badge_sz badge badge-soft-danger"> No </span>);
                                case "yes":
                                    return _(<span className="badge_sz badge badge-soft-success"> Yes </span>);
                                default:
                                    return _(<span className="badge_sz badge badge-soft-warning"> Not Updated </span>);
                            }
                        },
                    },
                    {
                        name: 'Actions',
                        formatter: (cell) => _(<UncontrolledDropdown className="dropdown d-inline-block">
                            <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                                <i className="ri-more-fill align-middle"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                                <DropdownItem href={`/student-past-sessions-detail/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>)
                    },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
        </React.Fragment >
    );
};


export { Active_student_List_Data };
