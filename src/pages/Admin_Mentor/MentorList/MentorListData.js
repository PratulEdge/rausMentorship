import React, { useState, useEffect } from 'react';
import { Grid, _ } from 'gridjs-react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Form } from 'reactstrap';
import { Button, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { mentorDetail } from '../../../store/actions';
import { useFormik, yupToFormErrors } from "formik";
import { mentorDeleteUser } from '../../../store/actions';
import { subjectExpert } from '../../../store/actions';


const BaseExample = (props) => {
    const [subjectFilter, setSubjectFilter] = useState('All');
    const [activeFilter, setActiveFilter] = useState('');
    const [mentor_id, setMentor_id] = useState('')
    const [user_data, setuser_data] = useState([])
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => ({
        userData: state.UserData.userData,
    }));
    const [modal_center, setmodal_center] = useState(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }
    const filteredData = user_data.filter(row =>
        (activeFilter === 'All' || String(row.is_active).toLowerCase().includes(activeFilter.toLowerCase())) &&
        (subjectFilter === 'All' || row.subject_expert?.title.toLowerCase().includes(subjectFilter.toLowerCase()))
    ).sort((a, b) => new Date(b.updation_date_time) - new Date(a.updation_date_time));;
    const { subjectExpertData } = useSelector((state) => ({
        subjectExpertData: state.SubjectExpertData.subjectExpertData.detail,
    }));
    const handleDelete = (event) => {
        tog_center()
        setMentor_id(event.target.id)
    };
    const data = filteredData.map(((list, index) => [   ///icoList
        list.serial = index + 1,
        list.name,
        list.email,
        list.mobile,
        list.subject_expert?.title,
        list.is_active,
        list.id
    ]
    ));
    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            is_active: 'false' || '',
        },
        onSubmit: (values) => {         
            dispatch(mentorDeleteUser(values, props.history, mentor_id));
        }
    });

    useEffect(() => {
        dispatch(subjectExpert());
        dispatch(mentorDetail());
    }, [dispatch]);

    useEffect(() => {
        setuser_data(userData);
    }, [userData])

    return (
        <React.Fragment>
            <Col xs={5} xxl={2} lg={3} className="status-filter">
                <select className="form-control align-filter" data-choices data-choices-search-false name="choices-single-default2"
                    id="choices-single-default2"
                    onChange={(e) => setActiveFilter(e.target.value)}
                    value={activeFilter}
                >
                    <option value="All">All</option>
                    <option value="true">Active</option>
                    <option value="false">Blocked</option>
                </select>
            </Col>
            <Col xs={7} xxl={2} lg={3} className="category-filter">
                <select className="form-control align-filter" data-choices data-choices-search-false name="choices-single-default2"
                    id="choices-single-default2"
                    onChange={(e) => setSubjectFilter(e.target.value)}
                    value={subjectFilter}
                >
                    <option value="All">All</option>
                    {subjectExpertData?.map((item, key) => (
                        <React.Fragment key={key}>
                            <option value={item.title} key={key}>{item.title}</option>
                        </React.Fragment>
                    ))}
                </select>
            </Col>
            <Grid
                data={data}
                columns={['ID', "Name", 'Email', "Mobile", "Category",
                    {
                        name: "Status",
                        formatter: (cell) => {
                            switch (cell) {
                                case true:
                                    return _(<span className="badge_sz badge badge-soft-success"> ACTIVE </span>);
                                case false:
                                    return _(<span className="badge_sz badge badge-soft-danger"> BLOCKED </span>);
                                default:
                                    return _(<span className="badge_sz badge badge-soft-warning"> INPROGRESS</span>);
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
                                <DropdownItem href={`/mentor-profile-view/${cell}`}><i className="ri-eye-fill align-bottom me-2 text-muted"></i>View</DropdownItem>
                                <DropdownItem href={`/edit-mentor-profile/${cell}`} className='edit-item-btn'><i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit</DropdownItem>
                                <DropdownItem id={cell} onClick={(event) => handleDelete(event)} className='remove-item-btn'> <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>)
                    },
                ]}
                search={true}
                sort={true}
                pagination={{ enabled: true, limit: 10, }}
            />
            <Modal
                isOpen={modal_center}
                toggle={() => {
                    tog_center();
                }}
                centered
            >
                <ModalHeader className="modal-title" />

                <ModalBody className="text-center p-5">
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit(e);
                        console.log("in submit")
                        return false;
                    }}
                        action="#">

                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json"
                            trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
                        </lord-icon>
                        <div className="mt-4">
                            <h4 className="mb-3">Are you sure?</h4>
                            <p className="text-muted mb-4"> You won't be able to revert this!</p>
                            <div className="hstack gap-2 justify-content-center">
                                <Button to="#" type='submit' onClick={() => {
                                    setmodal_center(false);
                                }} className="btn btn-success">Yes, delete it!</Button>
                                <Button className='btn btn-danger' onClick={() => setmodal_center(false)}>Close</Button>

                            </div>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>

        </React.Fragment >
    );
};


export { BaseExample };
