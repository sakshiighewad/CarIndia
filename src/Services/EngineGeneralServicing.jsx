import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import enginserviceing from '../assets/enginserviceing.png';
import enginserviceing1 from '../assets/enginserviceing1.jpg';
import engin from '../assets/engin.webp';

function EngineGeneralServicing() {
    return (

        <Container className="about-section">

            <Row className="align-items-center">

                {/* LEFT SIDE TEXT */}
                <Col md={6}>

                    <h1>Engine General Servicing</h1>

                    <p>
                        Engine General Servicing is an important maintenance service that keeps your vehicle engine in good condition. Regular servicing improves engine performance, increases fuel efficiency, and helps avoid major engine problems.
                        Our trained technicians carefully inspect and service all important engine components to ensure your vehicle runs smoothly and safely.
                    </p>

                </Col>


                {/* RIGHT SIDE CAROUSEL */}
                <Col md={6}>

                    <div className="about-carasouls">

                        <Carousel>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={enginserviceing}
                                    alt="Bike Service"
                                />
                                <Carousel.Caption>
                                    <h3>Bike Servicing</h3>
                                    <p>Professional two-wheeler servicing.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={enginserviceing1}
                                    alt="Oil Change"
                                />
                                <Carousel.Caption>
                                    <h3>Oil Change</h3>
                                    <p>High quality engine oil replacement.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={engin}
                                    alt="Bike Washing"
                                />
                                <Carousel.Caption>
                                    <h3>Bike Washing</h3>
                                    <p>Complete washing and detailing.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                        <p>Our Engine Servicing Includes

                            🔧 Engine Oil Change
                            Old engine oil is replaced with fresh oil to keep engine parts lubricated and running smoothly.

                            🌬 Air Filter Cleaning / Replacement
                            Air filters are cleaned or replaced to ensure proper airflow to the engine.

                            ⚡ Spark Plug Inspection
                            Spark plugs are checked and cleaned or replaced for better engine ignition.

                            🌡 Coolant Level Check
                            Coolant is inspected to prevent engine overheating.

                            🔋 Battery Check
                            Battery condition and terminals are checked for proper power supply.

                            🛠 Engine Inspection
                            Complete engine check is done to detect oil leaks, damaged belts, or other issues.</p>
                    </div>

                </Col>

            </Row>


            {/* SECOND ROW */}

            <Row className="mt-5">

                <Col md={4}>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide reliable and affordable two-wheeler
                        servicing that keeps your bike running smoothly.
                    </p>
                </Col>

                <Col md={4}>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Bike Servicing</li>
                        <li>Engine Repair</li>
                        <li>Oil Change</li>
                        <li>Brake Service</li>
                    </ul>
                </Col>

                <Col md={4}>
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Experienced Technicians</li>
                        <li>Genuine Spare Parts</li>
                        <li>Affordable Pricing</li>
                        <li>Quick Service</li>
                    </ul>
                </Col>

            </Row>


        </Container >
    )


}
export default EngineGeneralServicing;
