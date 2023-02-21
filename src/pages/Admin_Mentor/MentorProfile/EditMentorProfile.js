import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";
import * as Yup from "yup";
import { useFormik, yupToFormErrors } from "formik";

//import images
import progileBg from '../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import { useSelector, useDispatch } from "react-redux";
import { mentorProfile } from '../../../store/actions';
import { mentorEditUser } from '../../../store/actions';

const EditMentorProfile = (props) => {

    const { id } = useParams();
    console.log(id, "id Edit Page")

    const [activeTab, setActiveTab] = useState("1");
    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };


    const dispatch = useDispatch();
    const { user } = useSelector(state => ({
        user: state.mentorEdit.user,
    }));
    const [userLogin, setUserLogin] = useState([]);
    useEffect(() => {
        if (user && user) {
            setUserLogin({
                name: user.user.name,
                email: user.user.email,
                mobile: user.user.mobile,
                subject_expert: user.user.subject_expert,
                profession: user.user.profession,
                qualification: user.user.qualification,
                address_1_line_1: user.user.address_1_line_1,
                pincode: user.user.pincode,
            });
        }
    }, [user]);

    const { userData } = useSelector((state) => ({
        userData: state.MentorProfileData.userData,
    }));
    const subject_expert = [
        {
            options: [
                { label: `${userData.subject_expert?.title}`, value: `${userData.subject_expert?.id}` },
                { label: "Civics", value: "63a973e33669e5b4b79d2294" },
                { label: "Histroy", value: "63a94ef93669e5b4b79d2291" },
            ],
        },
    ];

    const is_active = [
        {
            options:[
                {label: "Select", value: 'select'},
                { label: "True", value: "true" },
                { label: "False", value: "false" },
            ]
        }
    ]

    console.log(userData, "user data Edit")
    const validation = useFormik({ 
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            name: userLogin.name||userData.name || '',
            email: userLogin.email || userData.email || '',
            mobile: userLogin.mobile || userData.mobile || '',
            subject_expert: userLogin.subject_expert || userData.subject_expert?.title || '',
            profession: userLogin.profession || userData.profession || '',
            qualification: userLogin.qualification || userData.qualification || '',
            address_1_line_1: userLogin.address_1_line_1 || userData.address_1_line_1 || '',
            pincode: userLogin.pincode || userData.pincode || '',
            is_active:userLogin.is_active|| userData.is_active|| '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Your Name"),
            email: Yup.string().required("Please Enter Your Email"),
            mobile: Yup.number().required("Please Enter Your Mobile No."),
            subject_expert: Yup.string().required("Please Enter Your Mobile No."),
            profession: Yup.string().required("Please Enter Your Profession"),
            qualification: Yup.string().required("Please Enter Your Qualification"),
            address_1_line_1: Yup.string().required("Please Enter Address"),
            pincode: Yup.number().required("Please Enter Pincode"),
            is_active:Yup.string().required("Required Field"),
        }),        
        onSubmit: (values) => {
            console.log(values, "in submit Edit")
            dispatch(mentorEditUser(values, props.history, id));
        }
    });

    useEffect(() => {
        dispatch(mentorProfile(id));
    }, [dispatch]);

    document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";
    console.log("in eddit section")

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                            <div className="overlay-content">
                                <div className="text-end p-3">
                                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                        <Input id="profile-foreground-img-file-input" type="file"
                                            className="profile-foreground-img-file-input" />
                                        <Label htmlFor="profile-foreground-img-file-input"
                                            className="profile-photo-edit btn btn-light">
                                            <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col xxl={3}>
                            <Card className="mt-n5">
                                <CardBody className="p-4">
                                    <div className="text-center">
                                        <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                            <img src={avatar1}
                                                className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                                                alt="user-profile" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <Input id="profile-img-file-input" type="file"
                                                    className="profile-img-file-input" />
                                                <Label htmlFor="profile-img-file-input"
                                                    className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <i className="ri-camera-fill"></i>
                                                    </span>
                                                </Label>
                                            </div>
                                        </div>
                                        {/* <h5 className="fs-16 mb-1">Anna Adame</h5>
                                        <p className="text-muted mb-0">Lead Designer / Developer</p> */}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xxl={9}>
                            <Card className="mt-xxl-n5">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Personal Details
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <form
                                                onSubmit={(e) => {
                                                    console.log("submited")
                                                    e.preventDefault();
                                                    validation.handleSubmit();
                                                    return false;
                                                }}
                                                action="#">
                                                <Row>
                                                    <Col lg={12}>
                                                        <Label>Basic Details</Label>
                                                        <hr />
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label className="dtl" >Full Name: </Label>
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
                                                    </Col>
                                                    
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label className="dtl" >Phone Number: </Label>
                                                            <Input
                                                                name="mobile"
                                                                type="number"
                                                                className="form-control"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={validation.values.mobile || ""}
                                                                invalid={
                                                                    validation.touched.mobile && validation.errors.mobile ? true : false
                                                                }
                                                            />
                                                            {validation.touched.mobile && validation.errors.mobile ? (
                                                                <FormFeedback type="invalid">{validation.errors.mobile}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
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
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="JoiningdatInput" className="form-label">Joining
                                                                Date</Label>
                                                            <Flatpickr
                                                                className="form-control"
                                                                options={{
                                                                    dateFormat: "d M, Y"
                                                                }}
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Label>Full Details</Label>
                                                        <hr />
                                                    </Col>
                                                    
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">Status</Label>
                                                            <Input
                                                                name="is_active"
                                                                type="select"
                                                                className="form-select"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={
                                                                    validation.values.is_active || ""
                                                                }
                                                            >
                                                                {is_active.map((item, key) => (
                                                                    <React.Fragment key={key}>
                                                                        {item.options.map((item, key) => (<option value={item.value} key={key}>{item.label}</option>))}
                                                                    </React.Fragment>
                                                                ))}
                                                            </Input>
                                                            {validation.touched.is_active &&
                                                                validation.errors.is_active ? (
                                                                <FormFeedback type="invalid">
                                                                    {validation.errors.is_active}
                                                                </FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="skillsInput" className="form-label">Category</Label>
                                                            <Input
                                                                name="subject_expert"
                                                                type="select"
                                                                className="form-select"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={
                                                                    validation.values.subject_expert || ""
                                                                }
                                                            >
                                                                {subject_expert.map((item, key) => (
                                                                    <React.Fragment key={key}>
                                                                        {item.options.map((item, key) => (<option value={item.value} key={key}>{item.label}</option>))}
                                                                    </React.Fragment>
                                                                ))}
                                                            </Input>
                                                            {validation.touched.subject_expert &&
                                                                validation.errors.subject_expert ? (
                                                                <FormFeedback type="invalid">
                                                                    {validation.errors.subject_expert}
                                                                </FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label className="dtl" >Profession </Label>
                                                            <Input
                                                                name="profession"
                                                                type="text"
                                                                className="form-control"
                                                                onChange={validation.handleChange}
                                                                onBlur={validation.handleBlur}
                                                                value={validation.values.profession || ""}
                                                                invalid={
                                                                    validation.touched.profession && validation.errors.profession ? true : false
                                                                }
                                                            />
                                                            {validation.touched.profession && validation.errors.profession ? (
                                                                <FormFeedback type="invalid">{validation.errors.profession}</FormFeedback>
                                                            ) : null}
                                                        </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="mb-3">
                                                            <Label className="dtl" >Qualification </Label>
                                                            <Input
                                                                name="qualification"
                                                                type="text"
                                                                className="form-control"
                                                                onChange={validation.handleChange}
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
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="mb-3">
                                                            <Label className="dtl" >Address </Label>
                                                            <Input
                                                                name="address_1_line_1"
                                                                type="text"
                                                                className="form-control"
                                                                onChange={validation.handleChange}
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
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="cityInput" className="form-label">City</Label>
                                                            <Input type="text" className="form-control" id="cityInput"
                                                                placeholder="City" defaultValue="California" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className="mb-3">
                                                            <Label htmlFor="countryInput" className="form-label">Country</Label>
                                                            <Input type="text" className="form-control" id="countryInput"
                                                                placeholder="Country" defaultValue="United States" />
                                                        </div>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <div className="mb-3">
                                                            <Label className="dtl" >Zip Code </Label>
                                                            <Input
                                                                name="pincode"
                                                                type="number"
                                                                className="form-control"
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
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="submit"
                                                                className="btn btn-primary">Updates</button>
                                                            <button type="button"
                                                                className="btn btn-soft-success">Cancel</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default EditMentorProfile;