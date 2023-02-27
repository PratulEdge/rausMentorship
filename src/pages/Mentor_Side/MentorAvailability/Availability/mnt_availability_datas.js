import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Form } from 'reactstrap';
import { Button, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
// import { Link } from 'react-router-dom';
// import { mentorDetail } from '../../../store/actions';
// import { useFormik, yupToFormErrors } from "formik";
// import { mentorDeleteUser } from '../../../store/actions';
// import { mentorDashDetail } from "../../../store/actions";
// import { studDataSuccess } from '../../../store/actions';
import { studDataDetail } from '../../../../store/actions';
import { mntAvailability } from '../../../../store/actions';


const Ms_AvailabilityData = (props) => {
    console.log("in mento")
    const dispatch = useDispatch();
    const { mntAvailabilityData } = useSelector((state) => ({
        mntAvailabilityData: state.MntAvailabilityData.mntAvailabilityData,
    }));

    const data = mntAvailabilityData.map(((list, index) => [   ///icoList
        list.serial = index + 1,
        new Date(list.available_date_time).toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}),
        new Date(list.available_date_time).toLocaleTimeString('en-US'),
        list.is_booked,
        list.id
    ]
    ));

    useEffect(() => {
        dispatch(mntAvailability());
    }, [dispatch]);

    console.log(mntAvailabilityData, "Avaialbility data value")

    return (
        <React.Fragment>
            <Grid
                data={data}
                columns={['ID', "Date", 'Time',
                    {
                        name: "Booking Status",
                        formatter: (cell) => {
                            switch (cell) {
                                case true:
                                    return _(<span className="badge_sz badge badge-soft-success"> Booked </span>);
                                case false:
                                    return _(<span className="badge_sz badge badge-soft-danger"> Not Booked </span>);
                                default:
                                    return _(<span className="badge_sz badge badge-soft-warning"> Not Updated </span>);
                            }
                        },
                    },
                    // {
                    //     name: 'Actions',
                    //     formatter: (cell) => _(<UncontrolledDropdown className="dropdown d-inline-block">
                    //         <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
                    //             <i className="ri-more-fill align-middle"></i>
                    //         </DropdownToggle>
                    //         <DropdownMenu className="dropdown-menu-end">
                    //             <DropdownItem href={`/M_student-profile/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                    //         </DropdownMenu>
                    //     </UncontrolledDropdown>)
                    // },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
        </React.Fragment >
    );
};


export { Ms_AvailabilityData };
