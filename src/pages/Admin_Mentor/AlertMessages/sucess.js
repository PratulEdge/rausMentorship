import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, Col, Container, Input, Modal, ModalBody, ModalHeader, PopoverBody, PopoverHeader, Row, UncontrolledPopover, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import Content
import UiContent from '../../../Components/Common/UiContent';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';
import { DefaultModalExample, CenteredModalExample, GridsModalExample, StaticBackdropModalExample, TogglebetweenExample, TooltipModalExample, ScrollableModalExample, VaryingModalExample, OptionalModalExample, FullscreenResponsiveExample, AnimationModalExample, PositionModalExample } from './messageModalcode';

// Import Images
import loginImg from "../../../assets/images/modals/login.png";
import signupImg from "../../../assets/images/modals/signup.png";
import subscribeImg from "../../../assets/images/modals/subscribe.png";
import paymentImg from "../../../assets/images/modals/success-payment.png";
import authbg from "../../../assets/images/auth-one-bg.jpg";



const SuccessMessage = () => {

    const [modal_center, setmodal_center] = useState(false);
    function tog_center() {
        setmodal_center(!modal_center);
    }
    return (
        <React.Fragment>
            {/* <UiContent /> */}
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Modals" pageTitle="Base UI" />
                    <Row>
                        <Col xxl={6}>
                            <Card>
                                <PreviewCardHeader title="Vertically Centered Modal" />

                                <CardBody>
                                    <p className="text-muted">Use <code>modal-dialog-centered</code> class to show vertically center the modal.</p>
                                    <div className="live-preview">
                                        <div>
                                            <Button color="primary" onClick={() => tog_center()}>Center Modal</Button>
                                        </div>
                                    </div>

                                    <div className="d-none code-view">
                                        <pre className="language-markup" style={{ height: "275px" }}>
                                            <code>
                                                <CenteredModalExample />
                                            </code>
                                        </pre>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Vertically Centered */}
            <Modal
                isOpen={modal_center}
                toggle={() => {
                    tog_center();
                }}
                centered
            >
                <ModalHeader className="modal-title" />

                <ModalBody className="text-center p-5">
                    <lord-icon src="https://cdn.lordicon.com/hrqwmuhr.json"
                        trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{ width: "120px", height: "120px" }}>
                    </lord-icon>
                    <div className="mt-4">
                        <h4 className="mb-3">Oops something went wrong!</h4>
                        <p className="text-muted mb-4"> The transfer was not successfully received by us. the email of the recipient wasn't correct.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Button color="light" onClick={() => setmodal_center(false)}>Close</Button>
                            <Link to="#" className="btn btn-danger">Try Again</Link>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

        </React.Fragment >
    );
};

export default SuccessMessage;
