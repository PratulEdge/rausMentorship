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
import { msMentorAvailUser } from '../../../store/actions';
import { subjectExpert } from '../../../store/actions';
import Ms_Availability from './Availability/mnt_availabilitys';
import { Ms_AvailabilityData } from './Availability/mnt_availability_datas';
import { time } from 'echarts';

const Ms_MentorAvailibility = (props) => {

  const [selectedOption, setSelectedOption] = useState("");  //category

  const [modal_center, setmodal_center] = useState(false);

  const handleOptionSelect = (event) => {
    console.log("mentor catogery");
    validation.handleChange(event);
    setSelectedOption(event.target.value);
  };
  const { subjectExpertData } = useSelector((state) => ({
    subjectExpertData: state.SubjectExpertData.subjectExpertData.detail,
  }));
  console.log(subjectExpertData, "subjectExpertData")

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

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      startDate: { dateTime } || '',
      available_date_time: dateTime,
      is_active: true || '',
      category: selectedOption || '',
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Please Select Category"),
      available_date_time: Yup.string().required("Please Select Date and Time"),
    }),
    onSubmit: (values) => {
      // console.log(values.is_active, "is active value")
      // if (values.is_active === true) {
      console.log(values, "mentor Avail value submitting")
      // setAvailValue(availValue.concat(values))
      dispatch(msMentorAvailUser(values, props.history));
      // }
      // else {
      //   console.log(values, "deleted Value sfsfsf")
      // }

    }
  })


  // const subjectFilterData = userData.filter((item1) => item1.subject_expert?.title === selectedOption && item1.is_active === true);

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
                          <Label className="form-label mb-0">Select Mentor Category<span className="text-danger">*</span></Label>
                          <Input
                            name="category"
                            type="select"
                            className="form-select"
                            id="category-field"
                            onChange={handleOptionSelect}
                            onBlur={validation.handleBlur}
                            required
                            value={
                              validation.values.category || ""
                            }

                          >
                            <option value="" >Select Category</option>
                            {subjectExpertData?.map((item, key) => (
                              <React.Fragment key={key}>
                                <option value={item.id} key={key}>{item.title}</option>
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

                      <Col lg={2}>
                        <div className="mt-6">
                          <Button color="success" type="submit">
                            <i className="ri-add-fill me-1 align-bottom"></i> Add Availibility</Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
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
                    <Ms_AvailabilityData />
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

export default Ms_MentorAvailibility;