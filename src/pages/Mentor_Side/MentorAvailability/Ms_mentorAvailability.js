import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, CardBody, TabContent, CardHeader, Container, Form, Row, Col, Label, Input, Table, TabPane, FormFeedback, Modal, ModalHeader, ModalBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { useDispatch, useSelector } from "react-redux";
import classnames from 'classnames';
import { useFormik } from "formik";
import { ToastContainer } from 'react-toastify';
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import setSeconds from "date-fns/setSeconds"
import { format } from 'date-fns'
import 'react-toastify/dist/ReactToastify.css';
import { mentorDetail } from '../../../store/actions';
import { mentorAvailUser } from '../../../store/actions';
import { subjectExpert } from '../../../store/actions';
import { time } from 'echarts';

const Ms_MentorAvailibility = (props) => {

  const [selectedOption, setSelectedOption] = useState("");  //category
  const [mentor_name, setMentor_name] = useState([])
  const [available_date_time, setAvailable_date_time] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const [modal_center, setmodal_center] = useState(false);

  const handleOptionSelect = (event) => {
    console.log("mentor catogery");
    validation.handleChange(event);
    setSelectedOption(event.target.value);
  };
  // const handleOptionMentor = (event) => {
  //   console.log("mentor catogery");
  //   validation.handleChange(event);
  //   setSelectedOption(event.target.value);
  // };

  const { subjectExpertData } = useSelector((state) => ({
    subjectExpertData: state.SubjectExpertData.subjectExpertData.detail,
  }));

  const { user } = useSelector(state => ({
    user: state.mentorAvail.user,
  }));

  const [activeTab, setActiveTab] = useState();

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);

    }
    // setIsOpen(!isOpen);
  };

  const [is_delete, setIs_delete] = useState(true)
  function tog_center() {
    setmodal_center(!modal_center);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    setmodal_center(false);
    setIs_delete(false);
    console.log(is_delete, "is active value")
    
  };
  const [availValue, setAvailValue] = useState([])
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setStartDate(setHours(setMinutes(setSeconds(new Date(), 0), 0), 9));
  }, []);

  const filterPassedTime = useCallback((time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  }, []);

  const dispatch = useDispatch();
  const { userData } = useSelector((state) => ({
    userData: state.UserData.userData,
  }));
  console.log(userData, "user data value")
  useEffect(() => {
    dispatch(mentorDetail());
    dispatch(subjectExpert())
  }, [dispatch]);

  function convert(str) {
    var hours, minutes, seconds;
    var date = new Date(str),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    hours = ("0" + date.getHours()).slice(-2);
    minutes = ("0" + date.getMinutes()).slice(-2);
    seconds = ("0" + date.getSeconds()).slice(-2);
    var mySQLDate = [date.getFullYear(), month, day].join("-");
    var mySQLTime = [hours, minutes, seconds].join(":");
    return [mySQLDate, 'T', mySQLTime].join("");
  }
  const dateTime = convert(startDate)
  console.log(is_delete,"is active value23")
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      mentor_id: '' || '',
      startDate: { dateTime } || '',
      available_date_time: dateTime,
      is_active: true || ''
    },
    validationSchema: Yup.object({
      mentor_id: Yup.string().required("Please Enter a Mentor Name"),
      available_date_time: Yup.string().required("Please Select Date and Time"),
    }),
    onSubmit: (values) => {
      console.log(values.is_active, "is active value")
      if (values.is_active === true) {
        console.log(values, "mentor Avail value submitting")
        setAvailValue(availValue.concat(values))
        dispatch(mentorAvailUser(values, props.history));
      }
      else {
        console.log(values, "deleted Value sfsfsf")
      }

    }
  })


  const subjectFilterData = userData.filter((item1) => item1.subject_expert?.title === selectedOption && item1.is_active === true);

  //

  document.title = "Mentor Availibility | Rau's MentorShip - Mentor Availibility";

  return (
    <React.Fragment>
      <div className="page-content">
        <ToastContainer closeButton={false} />
        <Container fluid>
          <BreadCrumb title="Mentor Availibility" pageTitle="Mentor" />

          <Row>
            <Col lg={12}>
              <Card >
                <CardHeader >
                  <h4 className="card-title mb-0">Mentor Availibility</h4>
                </CardHeader>
                <CardBody>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit(e);
                      console.log("in submit")
                      return false;
                    }}>
                    <Row>
                      <Col lg={4}>
                        <div className="mt-3">
                          <Label className="form-label mb-0">Select Date & Time</Label>
                          <DatePicker
                            name="available_date_time"
                            // type="date"
                            id='date-field'
                            className="form-control"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            value={validation.values.startDate || ""}
                            showTimeSelect
                            filterTime={filterPassedTime}
                            dateFormat="dd-MM-yyyy h:mm:ss aa"
                          />
                          {validation.touched.startDate && validation.errors.startDate ? (
                            <FormFeedback type="invalid">{validation.errors.startDate}</FormFeedback>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg={3} >
                        <div className="mt-3">
                          <Label className="form-label mb-0">Select Mentor Category</Label>
                          <Input
                            name="category"
                            type="select"
                            className="form-select"
                            id="category-field"
                            onChange={handleOptionSelect}
                            onBlur={validation.handleBlur}
                            value={
                              validation.values.category || ""
                            }
                          >
                            <option value="Select Category" >Select Category</option>
                            {subjectExpertData?.map((item, key) => (
                              <React.Fragment key={key}>
                                <option value={item.title} key={key}>{item.title}</option>
                              </React.Fragment>
                            ))}
                          </Input>
                          {validation.touched.category &&
                            validation.errors.category ? (
                            <FormFeedback type="invalid">
                              {validation.errors.category}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg={3} >
                        <div className="mt-3">
                          <Label className="form-label mb-0">Select Mentor</Label>
                          <Input
                            name="mentor_id"
                            type="select"
                            className="form-select"
                            placeholder='Select Mentor'
                            id="mentor-field"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={
                              validation.values.mentor_id || ""
                            }
                          >
                            <option value="Select name" >Select Name</option>
                            {subjectFilterData.map((item, key) => (
                              <React.Fragment key={key}>
                                <option value={item.id} key={key}>{item.name}</option>
                              </React.Fragment>
                            ))}
                          </Input>
                          {validation.touched.mentor_id &&
                            validation.errors.mentor_id ? (
                            <FormFeedback type="invalid">
                              {validation.errors.mentor_id}
                            </FormFeedback>
                          ) : null}
                        </div>
                      </Col>
                      <Col lg={2}>
                        <div className="mt-6">
                          <Button color="success" type="submit" className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggleTab('1'); }}>
                            <i className="ri-add-fill me-1 align-bottom"></i> Add Availibility</Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <TabContent activeTab={activeTab} className="pt-4">
            <TabPane tabId="1">
              <Row>
                <Col xxl={3}>
                  {availValue.map((printVal, key) => {
                    return (
                      <Card key={key}>
                        <CardBody>
                          <div className='avail-dis'>
                            <div className='col-lg-3'>

                              <h5 className="ps-0" scope="row"><span className='text-muted'>Mentor Name :</span></h5><h5>
                                {(userData.filter((item1) => item1.id === printVal.mentor_id)).map((ewl) => {
                                  return (
                                    ewl.name
                                  )
                                })}
                              </h5>
                            </div>
                            <div className='col-lg-2'>

                              <h5 className="ps-0" scope="row"><span className='text-muted'>Date :</span></h5><h5> {new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(dateTime))}</h5>
                            </div>
                            <div className='col-lg-2'>


                              <h5 className="ps-0" scope="row"><span className='text-muted'>Time :</span></h5><h5> {new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(new Date(dateTime))}</h5>
                            </div>
                            <div className='col-lg-2'>


                              <h5 className="ps-0" scope="row"><span className='text-muted'>Subject Expert :</span></h5><h5> {printVal.category}</h5>
                            </div>
                            <div className='col-lg-3'>
                              <Button className="btn btn-success avil-btn" onClick={() => tog_center()} > Delete</Button>
                            </div>

                          </div>
                        </CardBody>
                      </Card>
                    )

                  })}
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
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
            handleSubmit(e);
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
                <Button to="#" type='submit' onClick={handleSubmit} className="btn btn-success">Yes, delete it!</Button>
                <Button className='btn btn-danger' onClick={() => setmodal_center(false)}>Close</Button>

              </div>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Ms_MentorAvailibility;