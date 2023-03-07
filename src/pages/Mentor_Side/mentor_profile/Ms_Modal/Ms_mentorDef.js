import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import * as Yup from "yup";
import { useFormik } from "formik";
import { cityDetail, stateDetail, subjectExpert } from '../../../../store/actions';
// import { mentorEditUser } from '../../../store/actions';
// import { addMentorUser } from '../../../store/actions';
import { useSelector, useDispatch } from "react-redux";
import { msMentorEditProfile } from '../../../../store/actions';


const Ms_MentorDef = (props) => {

    const [state_id, setState_id] = useState('')
    const [selected, setSelected] = useState('')
    const [qualification, setQualifilcation] = useState('')
    const [address, setAddress] = useState('')
    const [profession, setProfession] = useState('')
    const dispatch = useDispatch();

    // const cityData = useSelector((state) => state.City.cityData);
    // const stateData = useSelector((state) => state.State.stateData);
    // const subjectExpertData = useSelector((state) => state.SubjectExpertData.subjectExpertData.detail);
    const { cityData } = useSelector((state) => ({
        cityData: state.City.cityData,
    }));
    const { stateData } = useSelector((state) => ({
        stateData: state.State.stateData,
    }));
    const { subjectExpertData } = useSelector((state) => ({
        subjectExpertData: state.SubjectExpertData.subjectExpertData.detail,
    }));
    const handleOptionSelect = (event) => {
        console.log(event.target.value, "mentor catogery");
        validation.handleChange(event);
        setSelected(event.target.value);
    };
    const handleProfession = (event) => {
        console.log(event.target.value, "mentor catogery");
        validation.handleChange(event);
        setProfession(event.target.value);
    };
    const handleOptionQualification = (event) => {
        console.log(event.target.value, "mentor catogery");
        validation.handleChange(event);
        setQualifilcation(event.target.value);
        // setAddress(event.target.value);
    };
    const handleAddress = (event) => {
        console.log(event.target.value, "mentor catogery");
        validation.handleChange(event);
        // setQualifilcation(event.target.value);
        setAddress(event.target.value);
    };
    const handleStateOption = (event) => {
        validation.handleChange(event);
        setState_id(event.target.value)
        console.log(event.target.value, "value selected")
    };
    const productStatus = [
        {
            options: [
                { label: '-- Select Profession --', value: '-- Select Profession --' },
                { label: "Student", value: "STU" },
                { label: "Professional", value: "PRO" },
                { label: "Working", value: "WK" },
            ],
        },
    ];
    useEffect(() => {
        dispatch(cityDetail(state_id));
    }, [state_id])
    useEffect(() => {
        dispatch(stateDetail());
        dispatch(subjectExpert());
    }, [dispatch]);

    console.log(state_id, selected, "value print")

    console.log(cityData, "city data value", stateData, "State selected", subjectExpertData, "Subject Expert")

    let id = props.userId
    console.log(id, "value print")

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            profession: profession || '',
            subject_expert: selected || '',
            qualification: qualification || '',
            address_1_line_1: address || '',
            state: state_id || '',
            city: cityData || '',
            country: '' || '',
            pincode: '' || '',
        },
        validationSchema: Yup.object({
            profession: Yup.string().required("Please Enter a Profession"),
            subject_expert: Yup.string().required("Please Enter a Subject"),
            qualification: Yup.string().required("Please Enter a Qualification"),
            address_1_line_1: Yup.string().required("Please Enter a Address"),
            state: Yup.string().required("Please Enter a State"),
            city: Yup.string().required("Please Enter a City"),
            country: Yup.string().required("Please Enter a Country"),
            pincode: Yup.string().required("Please Enter a Pin Code"),

        }),
        onSubmit: (values) => {
            console.log(values, "modal Value")
            dispatch(msMentorEditProfile(values, props.history, id));
            props.toggle();
        }
    });
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered>
            <ModalHeader className="bg-light p-3 col-12">
                Add Mentor Details
                <button type="button" onClick={props.toggle} className="btn-close" aria-label="Close" style={{ float: 'right' }} >
                </button>
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={(e) => {
                    console.log("modal submit")
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
                        <Label className="form-label" >Profession: </Label>
                        <Input
                            name="profession"
                            type="select"
                            className="form-control"
                            onChange={handleProfession}
                            onBlur={validation.handleBlur}
                            value={validation.values.profession || ""}
                            invalid={
                                validation.touched.profession && validation.errors.profession ? true : false
                            }

                        >
                            {productStatus.map((item, key) => (
                                <React.Fragment key={key}>
                                    {item.options.map((item, key) => (<option value={item.value} key={key}>{item.label}</option>))}
                                </React.Fragment>
                            ))}
                        </Input>
                        {validation.touched.profession && validation.errors.profession ? (
                            <FormFeedback type="invalid">{validation.errors.profession}</FormFeedback>
                        ) : null}
                    </div>
                    <Row>

                        <div className="mb-3 col-lg-6">
                            <Label className="form-label" >Subject Expert: </Label>
                            <Input
                                name="subject_expert"
                                type="select"
                                className="form-control"
                                onChange={handleOptionSelect}
                                onBlur={validation.handleBlur}
                                value={validation.values.subject_expert || ""}
                                invalid={
                                    validation.touched.subject_expert && validation.errors.subject_expert ? true : false
                                }
                            >
                                <option value="Select Category" >-- Select Category --</option>
                                {subjectExpertData?.map((item, key) => (
                                    <React.Fragment key={key}>
                                        <option value={item.id} key={key}>{item.title}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                            {validation.touched.subject_expert && validation.errors.subject_expert ? (
                                <FormFeedback type="invalid">{validation.errors.subject_expert}</FormFeedback>
                            ) : null}
                        </div>

                        <div className="mb-3 col-lg-6">
                            <Label className="dtl" >Qualification: </Label>
                            <Input
                                name="qualification"
                                type="text"
                                className="form-control"
                                placeholder='Enter Qualification'
                                onChange={handleOptionQualification}
                                onBlur={validation.handleBlur}
                                value={validation.values.qualification || ""}
                            invalid={
                                validation.touched.qualification && validation.errors.qualification ? true : false
                            }
                            />
                            {validation.touched.qualification && validation.errors.qualification ? (
                                <FormFeedback type="invalid">{validation.errors.qualification}</FormFeedback>
                            ) : null}
                        </div>
                    </Row>
                    <div className="mb-3 ">
                        <Label className="form-label" >Address: </Label>
                        <Input
                            name="address_1_line_1"
                            type="text"
                            className="form-control"
                            placeholder='Enter Address'
                            onChange={handleAddress}
                            onBlur={validation.handleBlur}
                            value={validation.values.address_1_line_1 || ""}
                            invalid={
                                validation.touched.address_1_line_1 && validation.errors.address_1_line_1 ? true : false
                            }
                        />
                        {validation.touched.address_1_line_1 && validation.errors.address_1_line_1 ? (
                            <FormFeedback type="invalid">{validation.errors.address_1_line_1}</FormFeedback>
                        ) : null}
                    </div>
                    <Row>

                        <div className="mb-3 col-lg-6">
                            <Label className="form-label" >Select State: </Label>
                            <Input
                                name="state"
                                type="select"
                                className="form-control"
                                onChange={handleStateOption}
                                onBlur={validation.handleBlur}
                                value={validation.values.state || ""}
                                invalid={
                                    validation.touched.state && validation.errors.state ? true : false
                                }
                            >
                                <option className='text-muted' value={0}>-- Select State --</option>
                                {stateData?.map((item, key) => (
                                    <React.Fragment key={key}>
                                        <option value={item.id} key={key}>{item.name}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                            {validation.touched.state && validation.errors.state ? (
                                <FormFeedback type="invalid">{validation.errors.state}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="mb-3 col-lg-6">
                            <Label className="form-label" >Select City: </Label>
                            <Input
                                name="city"
                                type="select"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.city || ""}
                                invalid={
                                    validation.touched.city && validation.errors.city ? true : false
                                }
                            >
                                <option className='text-muted' value={0}>-- Select City --</option>
                                {!!cityData && cityData?.map((item, key) => (
                                    <React.Fragment key={key}>
                                        <option value={item.id} key={key}>{item.name}</option>
                                    </React.Fragment>
                                ))}
                            </Input>
                            {validation.touched.city && validation.errors.city ? (
                                <FormFeedback type="invalid">{validation.errors.city}</FormFeedback>
                            ) : null}
                        </div>
                    </Row>
                    <Row>
                        <div className="mb-3 col-lg-6">
                            <Label className="form-label" >Country: </Label>
                            <Input
                                name="country"
                                type="select"
                                className="form-control"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.country || ""}
                                invalid={
                                    validation.touched.country && validation.errors.country ? true : false
                                }
                            >
                                <option className='text-muted' value={0}>-- Select Country --</option>
                                <option value='101'>India</option>

                            </Input>
                            {validation.touched.country && validation.errors.country ? (
                                <FormFeedback type="invalid">{validation.errors.country}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="mb-3 col-lg-6">
                            <Label className="form-label" >Pin Code: </Label>
                            <Input
                                name="pincode"
                                type="text"
                                className="form-control"
                                placeholder='Enter Pin'
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.pincode || ""}
                                invalid={
                                    validation.touched.pincode && validation.errors.pincode ? true : false
                                }
                            />
                            {validation.touched.pincode && validation.errors.pincode ? (
                                <FormFeedback type="invalid">{validation.errors.pincode}</FormFeedback>
                            ) : null}
                        </div>
                    </Row>
                    <div className="hstack gap-2 justify-content-end">
                        <button type="button" className="btn btn-light" onClick={props.toggle}>Close</button>

                        <button type="submit" className="btn btn-success" >Submit</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default Ms_MentorDef;