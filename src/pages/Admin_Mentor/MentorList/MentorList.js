import React, { useState, useEffect } from 'react';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
// import { useSelector, useDispatch } from "react-redux";
// import Flatpickr from "react-flatpickr"
import { useSelector, useDispatch } from "react-redux";
// import { history }
import { ToastContainer } from 'react-toastify';
import {
    Button,
    Col,
    Container,
    Row,
    Card,
    CardHeader,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    Label,
    FormFeedback,
    ModalFooter,
} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import { mentorCreateUser } from "../../../store/actions";
import CreateMentor from './CreateMentor';
import { BaseExample } from '../MentorList/MentorListData';

const MentorList = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.Account.user,
    }));

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
        // setUserId(id);
    }
  const [error, setError] = useState('');
      console.log(error)
    const handleChange = (event) => {
        let mobile = event.target.value;
        if (mobile.length === 0 || (mobile.length <= 10 && mobile.length >= 1 && Number(mobile[0]) >= 5)) {
          validation.handleChange(event);
          setError(" ")
        }else if(Number(mobile[0]) < 5){
            setError("First digit should be greater than 5")

        }
      };
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: '' || '',
            email: '' || '',
            mobile: '' || '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().required("Please Enter Your Email"),
            mobile: Yup.number().required("Please Enter Your Mobile No."),
        }),
        onSubmit: (values) => {
            dispatch(mentorCreateUser(values, props.history));            
            // window.location.reload(false);
        }
    });

    function refreshPage() {
        // window.location.reload(false);
        setmodal_list(false);
      }

    const [modal_list, setmodal_list] = useState(false);
    const tog_list = () => {
        setmodal_list(!modal_list);
    };


    document.title = "Datatables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Mentor Detail" pageTitle="Mentor" />
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardHeader>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="flex-grow-1">
                                            <h4 className="card-title mb-0 flex-grow-1">Mentors List</h4>

                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="hstack text-nowrap gap-2">
                                                <button
                                                    className="btn btn-info add-btn"
                                                    onClick={() => toggleModal()}
                                                >
                                                    <i className="ri-add-fill me-1 align-bottom"></i> Add
                                                    Mentor
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div id="table-gridjs">
                                        <BaseExample />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    {modalIsOpen && <CreateMentor isOpen={modalIsOpen} toggle={toggleModal} />}
                    {/* <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
                        <ModalHeader className="bg-light p-3 col-12">
                            Add Mentor
                            <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" style={{ float: 'right' }} >
                            </Button>
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={(e) => {
                                console.log("submit")
                                e.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}
                                action="#">

                                <div className="mb-3" id="modal-id" style={{ display: "none" }}>
                                    <label htmlFor="id-field" className="form-label">ID</label>
                                    <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
                                </div>

                                <div className="mb-3">
                                    <Label className="form-label" >Mentor Name: </Label>
                                    <Input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.name || ""}
                                        invalid={
                                            validation.touched.name && validation.errors.name ? true : false
                                        }
                                    />
                                    {validation.touched.name && validation.errors.name ? (
                                        <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <Label className="dtl" >Email: </Label>
                                    <Input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.email || ""}
                                        invalid={
                                            validation.touched.email && validation.errors.email ? true : false
                                        }
                                    />
                                    {validation.touched.email && validation.errors.email ? (
                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                    ) : null}
                                </div>

                                <div className="mb-3">
                                    <Label className="dtl" >Phone No.: </Label>
                                    <Input
                                        name="mobile"
                                        type="number"
                                        className="form-control"
                                        onChange={handleChange}
                                        onBlur={validation.handleBlur}
                                        value={validation.values.mobile || ""}
                                        invalid={
                                            validation.touched.mobile && validation.errors.mobile ? true : false
                                        }
                                    />
                                    <div className='mb-error'>
                                    {error}
                                    </div>
                                    {validation.touched.mobile && validation.errors.mobile ? (
                                        <FormFeedback type="invalid">{validation.errors.mobile}</FormFeedback>
                                    ) : null}
                                </div>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="button" className="btn btn-light" onClick={() => { setmodal_list(false); }}>Close</button>

                                    <button type="submit" className="btn btn-success" onClick={refreshPage}>Add Mentor</button>
                                </div>
                            </form>
                        </ModalBody>
                    </Modal> */}
                </Container>
            </div>
        </React.Fragment>
    );
};

export default MentorList;