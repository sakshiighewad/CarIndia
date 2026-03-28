import React from "react";
import "./AirFelter.css";
import Image from 'react-bootstrap/Image';
import airfilter from "../assets/airfilter.jpg";   // image import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function AirFelter() {
    return (
        <div className="airfelter-1">

            <h1>Air Filter Cleaning Service | एअर फिल्टर क्लिनिंग सेवा</h1>

            <Container className="about-section">

                <Row className="align-items-center">

                    {/* LEFT SIDE TEXT */}
                    <Col md={6}>

                        < div className="air-img">
                            <Image src={airfilter} fluid />
                        </div>
                    </Col>

                    {/* RIGHT SIDE  */}
                    <Col md={6}>
                        <div className="air-text">
                            <p>
                                The air filter in your two-wheeler prevents dust, dirt, and debris from entering the engine.
                                Regular air filter cleaning improves engine performance, increases fuel efficiency, and ensures smooth airflow for better combustion.

                                तुमच्या दुचाकीच्या इंजिनमध्ये धूळ, माती आणि कचरा जाऊ नये म्हणून एअर फिल्टर महत्त्वाची भूमिका बजावतो.
                                नियमित एअर फिल्टर साफ केल्याने इंजिनची कार्यक्षमता वाढते, मायलेज सुधारते आणि इंजिनमध्ये हवा व्यवस्थित पोहोचते.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h3>Benefits | फायदे</h3>
                        <h6>
                            Better engine performance – इंजिनची कार्यक्षमता वाढते <br />
                            Improved fuel mileage – पेट्रोलचा मायलेज वाढतो <br />
                            Longer engine life – इंजिनचे आयुष्य वाढते <br />
                            Reduced pollution – प्रदूषण कमी होते <br />
                            Smooth bike performance – बाइक अधिक स्मूथ चालते
                        </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AirFelter;



